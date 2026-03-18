import http from 'node:http'
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

function safeExec(command, cwd = '/root/.openclaw/workspace') {
  try {
    return execSync(command, { encoding: 'utf8', cwd, stdio: ['ignore', 'pipe', 'pipe'] })
  } catch (error) {
    return String(error?.stdout || error?.stderr || error?.message || error)
  }
}

function getOpenClawStatusText() {
  return safeExec('openclaw status')
}

function parseOpenClawStatus(text) {
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean)
  const sessionLines = lines.filter((line) => line.includes('agent:'))
  return {
    live: /status.:.live|status":"live"|\blive\b|\bOK\b/i.test(text),
    hasFeishu: /Feishu/i.test(text),
    sessionCount: sessionLines.length,
    raw: text,
  }
}

function getSessions() {
  try {
    const base = '/root/.openclaw/agents/main/sessions'
    if (!fs.existsSync(base)) return []
    return fs.readdirSync(base)
      .filter((name) => name.endsWith('.jsonl'))
      .map((name) => {
        const full = path.join(base, name)
        const stat = fs.statSync(full)
        return { name, size: stat.size, mtime: stat.mtimeMs }
      })
      .sort((a, b) => b.mtime - a.mtime)
      .slice(0, 10)
  } catch {
    return []
  }
}

function getTasks() {
  return [
    { id: 'task-1', title: '政府宣传页重构', stage: '待澄清', owner: 'main' },
    { id: 'task-2', title: '官网落地页设计', stage: '执行中', owner: 'ui-ux-agent' },
    { id: 'task-3', title: '短片镜头清单', stage: '待交付', owner: 'main' },
  ]
}

function getApprovals() {
  return [
    { id: 'approval-1', title: '写入共享文档库', owner: 'main', level: 'High Risk' },
    { id: 'approval-2', title: '覆盖旧海报素材', owner: 'visual-agent', level: 'Medium Risk' },
  ]
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/live') {
    const raw = getOpenClawStatusText()
    const payload = {
      status: parseOpenClawStatus(raw),
      sessions: getSessions(),
      tasks: getTasks(),
      approvals: getApprovals(),
      now: new Date().toISOString(),
    }
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    })
    res.end(JSON.stringify(payload))
    return
  }
  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('Not Found')
})

server.listen(4180, '0.0.0.0', () => {
  console.log('live-data-server listening on http://0.0.0.0:4180')
})
