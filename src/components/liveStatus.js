export function renderLiveStatusBlock() {
  return `
    <section class="panel glass-card" id="live-status-panel">
      <div class="panel__header">
        <div>
          <h2>真实 OpenClaw 状态</h2>
          <p>这里开始接真实环境，而不是纯 mock 数据。</p>
        </div>
        <span class="tag">Live</span>
      </div>
      <div class="real-metric-grid" id="real-metric-grid">
        <article class="metric-card glass-card glass-card--soft"><div class="metric-card__label">Gateway</div><div class="metric-card__value">--</div><div class="metric-card__hint">加载中</div></article>
        <article class="metric-card glass-card glass-card--soft"><div class="metric-card__label">Feishu</div><div class="metric-card__value">--</div><div class="metric-card__hint">加载中</div></article>
        <article class="metric-card glass-card glass-card--soft"><div class="metric-card__label">Sessions</div><div class="metric-card__value">--</div><div class="metric-card__hint">加载中</div></article>
        <article class="metric-card glass-card glass-card--soft"><div class="metric-card__label">Tasks</div><div class="metric-card__value">--</div><div class="metric-card__hint">加载中</div></article>
      </div>
      <div class="live-status-grid">
        <div class="live-card glass-card glass-card--soft">
          <strong>Gateway / Sessions 原始状态</strong>
          <pre id="live-status-text">正在读取...</pre>
        </div>
        <div class="live-card glass-card glass-card--soft">
          <strong>最近会话文件</strong>
          <div id="live-sessions-list" class="todo-list">正在读取...</div>
        </div>
      </div>
    </section>
  `
}

export function bindLiveStatus() {
  const textEl = document.querySelector('#live-status-text')
  const sessionsEl = document.querySelector('#live-sessions-list')
  const metricGrid = document.querySelector('#real-metric-grid')
  if (!textEl || !sessionsEl || !metricGrid) return

  fetch('/api/live')
    .then((response) => response.json())
    .then((data) => {
      const status = data?.status || {}
      const summary = data?.summary || {}
      textEl.textContent = status.raw || '暂无状态'
      metricGrid.innerHTML = `
        <article class="metric-card glass-card glass-card--soft"><div class="metric-card__label">Gateway</div><div class="metric-card__value">${summary.gateway === 'live' ? 'Live' : 'Down'}</div><div class="metric-card__hint ${summary.gateway === 'live' ? 'metric-card__hint--up' : 'metric-card__hint--danger'}">真实环境</div></article>
        <article class="metric-card glass-card glass-card--soft"><div class="metric-card__label">Feishu</div><div class="metric-card__value">${status.hasFeishu ? 'ON' : 'OFF'}</div><div class="metric-card__hint">渠道状态</div></article>
        <article class="metric-card glass-card glass-card--soft"><div class="metric-card__label">Sessions</div><div class="metric-card__value">${summary.sessions ?? 0}</div><div class="metric-card__hint">当前识别到的会话</div></article>
        <article class="metric-card glass-card glass-card--soft"><div class="metric-card__label">Tasks</div><div class="metric-card__value">${summary.tasks ?? 0}</div><div class="metric-card__hint">当前任务对象</div></article>
      `

      const sessions = Array.isArray(data?.sessions) ? data.sessions : []
      sessionsEl.innerHTML = sessions.length
        ? sessions.map((item) => `<div class="todo-item">${item.name} · ${(item.size / 1024).toFixed(1)} KB</div>`).join('')
        : '<div class="todo-item">暂无会话数据</div>'
    })
    .catch(() => {
      textEl.textContent = '实时状态读取失败'
      sessionsEl.innerHTML = '<div class="todo-item">实时会话读取失败</div>'
    })
}
