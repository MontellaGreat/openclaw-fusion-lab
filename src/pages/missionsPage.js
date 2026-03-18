import { pipeline, events } from '../data/mockData.js'

export function renderMissionsPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Missions / Full Pipeline</div>
        <h1 class="page-title">任务从澄清到交付，整条链路一次看清。</h1>
        <p class="page-desc">这里重点承接两版 Mission Control 的强项：任务状态、交接关系、审批阻塞、实时事件。</p>
      </div>
      <span class="tag">31 Active</span>
    </section>

    <section class="panel glass-card panel--wide">
      <div class="panel__header">
        <div><h2>任务全流程</h2><p>下一步可以补拖拽、筛选、标签和任务详情抽屉。</p></div>
      </div>
      <div class="pipeline-grid">
        ${pipeline.map((column) => `
          <section class="pipeline-column glass-card glass-card--soft">
            <div class="pipeline-column__header"><strong>${column.title}</strong><span>${column.count}</span></div>
            ${column.cards.map((card) => `
              <article class="task-card">
                <strong>${card.title}</strong>
                <p>${card.desc}</p>
                <div class="task-card__meta">审批链 / 交付物 / 运行证据</div>
              </article>
            `).join('')}
          </section>
        `).join('')}
      </div>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>任务事件监督</h2><p>继承 AgentTeamsBI 的监督感和 Mission Control 的审计感。</p></div>
      </div>
      <div class="event-list">
        ${events.concat(events).map(([text, time]) => `
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
