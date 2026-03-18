import { approvals, events, pipeline } from '../data/mockData.js'

export function renderMissionsPage() {
  const allCards = pipeline.flatMap((column) => column.cards.map((card) => ({ ...card, stage: column.title })))
  const featured = allCards[0]

  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Missions / Full Pipeline</div>
        <h1 class="page-title">任务从澄清到交付，整条链路一次看清。</h1>
        <p class="page-desc">继续向真实任务系统靠拢：状态、详情、审批、事件，尽量都放进一个完整面板体系。</p>
      </div>
      <span class="tag">31 Active</span>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div><h2>任务全流程</h2><p>下一步可以补拖拽、标签过滤、任务详情抽屉和子任务。</p></div>
          <div class="filter-row"><span class="tag">All</span><span class="tag">High Priority</span><span class="tag">Blocked</span></div>
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
            <div><h2>任务详情</h2><p>当前聚焦任务的摘要与执行建议。</p></div>
          </div>
          <div class="detail-card glass-card glass-card--soft">
            <strong>${featured.title}</strong>
            <p>${featured.desc}</p>
            <div class="detail-list">
              <div>当前阶段：${featured.stage}</div>
              <div>负责人：${featured.owner}</div>
              <div>优先级：${featured.priority}</div>
              <div>预计交付：${featured.eta}</div>
            </div>
          </div>
        </section>

        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>待审批</h2><p>高风险写操作和阻塞项集中展示。</p></div>
          </div>
          <div class="approval-list">
            ${approvals.map((item) => `
              <div class="approval-item glass-card glass-card--soft">
                <div>
                  <strong>${item.title}</strong>
                  <p>${item.owner}</p>
                </div>
                <span class="tag tag--warn">${item.level}</span>
              </div>
            `).join('')}
          </div>
        </section>
      </article>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>任务事件监督</h2><p>继承 AgentTeamsBI 的监督感和 Mission Control 的审计感。</p></div>
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
  `
}
