import { metrics, pipeline, agents, events } from '../data/mockData.js'

export function renderOverviewPage() {
  return `
    <section class="hero glass-card glass-card--hero">
      <div class="hero__copy">
        <div class="hero__eyebrow">Overview / Glass Control Center</div>
        <h1>把黑盒 Agent 系统，做成真正能看、能控、能判断的玻璃拟态运营中枢。</h1>
        <p>这一版继续沿着默认融合版推进：控制中心、任务编排、Agent 运营和空间状态层统一成一套产品语言。</p>
        <div class="hero__actions">
          <button class="btn btn--primary">启动调度中心</button>
          <button class="btn btn--ghost">查看风险摘要</button>
        </div>
      </div>
      <div class="hero-status">
        <div class="status-card glass-card glass-card--soft">
          <div class="status-card__row"><strong>系统状态</strong><span class="status-dot"></span></div>
          <div class="status-card__value">Healthy with Pressure</div>
          <div class="status-card__hint">Gateway 正常，成本偏高，2 项审批待处理</div>
        </div>
        <div class="status-card glass-card glass-card--soft">
          <div class="status-card__row"><strong>当前主判断</strong><span class="tag tag--warn">需介入</span></div>
          <div class="status-card__hint">优先处理审批与高消耗任务，再放量派发。</div>
        </div>
      </div>
    </section>

    <section class="metric-grid">
      ${metrics.map((item) => `
        <article class="metric-card glass-card">
          <div class="metric-card__label">${item.label}</div>
          <div class="metric-card__value">${item.value}</div>
          <div class="metric-card__hint metric-card__hint--${item.tone}">${item.hint}</div>
        </article>
      `).join('')}
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div>
            <h2>任务编排主视图</h2>
            <p>先看任务卡在哪，再决定资源怎么派。</p>
          </div>
          <span class="tag">Pipeline</span>
        </div>
        <div class="pipeline-grid">
          ${pipeline.map((column) => `
            <section class="pipeline-column glass-card glass-card--soft">
              <div class="pipeline-column__header"><strong>${column.title}</strong><span>${column.count}</span></div>
              ${column.cards.map((card) => `
                <article class="task-card">
                  <strong>${card.title}</strong>
                  <p>${card.desc}</p>
                </article>
              `).join('')}
            </section>
          `).join('')}
        </div>
      </article>

      <article class="panel-stack">
        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>实时事件流</h2><p>给排障、复盘和审计留证据。</p></div>
          </div>
          <div class="event-list">
            ${events.map(([text, time]) => `
              <div class="event-item">
                <span class="event-item__dot"></span>
                <div class="event-item__text">${text}</div>
                <div class="event-item__time">${time}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>核心 Agent</h2><p>只显示当前最该看的 Agent。</p></div>
          </div>
          <div class="agent-grid compact-grid">
            ${agents.slice(0, 3).map((agent, index) => `
              <article class="agent-card glass-card glass-card--soft">
                <div class="agent-card__avatar">${['M', 'UI', 'OP'][index]}</div>
                <div class="agent-card__body">
                  <strong>${agent.name}</strong>
                  <p>${agent.role}</p>
                  <div class="agent-card__meta">${agent.area}</div>
                  <div class="progress"><span style="width:${agent.load}%"></span></div>
                </div>
                <div class="agent-card__load">${agent.load}%</div>
              </article>
            `).join('')}
          </div>
        </section>
      </article>
    </section>
  `
}
