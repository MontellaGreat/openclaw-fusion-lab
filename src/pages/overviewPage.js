import { agents, approvals, events, metrics, pipeline } from '../data/mockData.js'

export function renderOverviewPage() {
  return `
    <section class="hero glass-card glass-card--hero">
      <div class="hero__copy">
        <div class="hero__eyebrow">Overview / Glass Control Center</div>
        <h1>把黑盒 Agent 系统，做成真正能看、能控、能判断的玻璃拟态运营中枢。</h1>
        <p>这版继续往“可部署演示版”推进：首页回答现在系统怎样、哪件事该先处理、谁需要被调度，而不是先把数据堆给你。</p>
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
                  <div class="task-card__meta">${card.priority} · ${card.owner} · ETA ${card.eta}</div>
                </article>
              `).join('')}
            </section>
          `).join('')}
        </div>
      </article>

      <article class="panel-stack">
        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>待审批</h2><p>把高风险与阻塞项放在首页就能先看到。</p></div></div>
          <div class="approval-list compact-list">
            ${approvals.slice(0, 3).map((item) => `
              <div class="approval-item glass-card glass-card--soft">
                <div><strong>${item.title}</strong><p>${item.owner}</p></div>
                <span class="tag tag--warn">${item.level}</span>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>实时事件流</h2><p>给排障、复盘和审计留证据。</p></div>
          </div>
          <div class="event-list">
            ${events.slice(0, 5).map(([text, time]) => `
              <div class="event-item">
                <span class="event-item__dot"></span>
                <div class="event-item__text">${text}</div>
                <div class="event-item__time">${time}</div>
              </div>
            `).join('')}
          </div>
        </section>
      </article>
    </section>

    <section class="content-grid content-grid--bottom">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div><h2>关键 Agent</h2><p>只展示现在最该盯的三个角色，避免首页过载。</p></div></div>
        <div class="agent-grid compact-grid three-col-grid">
          ${agents.slice(0, 3).map((agent, index) => `
            <article class="agent-card glass-card glass-card--soft agent-card--full">
              <div class="agent-card__avatar">${['M', 'UI', 'OP'][index]}</div>
              <div class="agent-card__body">
                <strong>${agent.name}</strong>
                <p>${agent.role}</p>
                <div class="agent-card__meta">区域：${agent.area} · 状态：${agent.status}</div>
                <div class="progress"><span style="width:${agent.load}%"></span></div>
              </div>
              <div class="agent-side-meta"><div class="agent-card__load">${agent.load}%</div></div>
            </article>
          `).join('')}
        </div>
      </article>

      <article class="panel glass-card">
        <div class="panel__header">
          <div><h2>下一步重点</h2><p>继续从演示页推进到正式控制台。</p></div></div>
        <div class="todo-list">
          <div class="todo-item">接 Gateway 实时健康数据</div>
          <div class="todo-item">接任务与审批的真实对象模型</div>
          <div class="todo-item">加协作链路与审批中心页</div>
        </div>
      </article>
    </section>
  `
}
