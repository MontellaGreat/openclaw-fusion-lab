import http from 'node:http'
import { execSync } from 'node:child_process'

function getOpenClawStatusText() {
  try {
    return execSync('openclaw status', { encoding: 'utf8', cwd: '/root/.openclaw/workspace' })
  } catch (error) {
    return String(error?.stdout || error?.message || error)
  }
}

function parseOpenClawStatus(text) {
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean)
  const sessionLines = lines.filter((line) => line.includes('agent:'))
  return {
    live: /status.:.live|status":"live"|OK/i.test(text),
    hasFeishu: /Feishu\s+│\s+ON\s+│\s+OK/i.test(text) || /Feishu/i.test(text),
    sessionCount: sessionLines.length,
    raw: text,
  }
}

function getSessions() {
  try {
    const text = execSync("python3 - <<'PY'
import json
from pathlib import Path
base=Path('/root/.openclaw/agents/main/sessions')
items=[]
if base.exists():
    for p in sorted(base.glob('*.jsonl'))[-10:]:
        items.append({'name': p.name, 'size': p.stat().st_size, 'mtime': p.stat().st_mtime})
print(json.dumps(items, ensure_ascii=False))
PY", { encoding: 'utf8' })
    return JSON.parse(text)
  } catch {
    return []
  }
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/live') {
    const raw = getOpenClawStatusText()
    const payload = {
      status: parseOpenClawStatus(raw),
      sessions: getSessions(),
      now: new Date().toISOString(),
    }
    res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    res.end(JSON.stringify(payload))
    return
  }
  res.writeHead(404)
  res.end('Not Found')
})

server.listen(4180, '0.0.0.0', () => {
  console.log('live-data-server listening on http://0.0.0.0:4180')
})
