import { events } from '../data/mockData.js'

export function renderCollaborationPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Collaboration / Handoff</div>
        <h1 class="page-title">谁把任务交给了谁，谁卡住了下一步，要一眼能看到。</h1>
        <p class="page-desc">这里继续承接 parent-child relay、sessions_send、handoff 关系和跨 session 通信。</p>
      </div>
      <span class="tag">9 Flows</span>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div><h2>协作链路</h2><p>从静态展示继续往真正 handoff 视图靠拢。</p></div></div>
        <div class="flow-lanes">
          <div class="flow-card glass-card glass-card--soft"><strong>main</strong><p>分发任务并审议</p></div>
          <div class="flow-arrow">→</div>
          <div class="flow-card glass-card glass-card--soft"><strong>ui-ux-agent</strong><p>完成页面方案</p></div>
          <div class="flow-arrow">→</div>
          <div class="flow-card glass-card glass-card--soft"><strong>review-agent</strong><p>审批与复核</p></div>
          <div class="flow-arrow">→</div>
          <div class="flow-card glass-card glass-card--soft"><strong>main</strong><p>最终交付</p></div>
        </div>
      </article>

      <article class="panel glass-card">
        <div class="panel__header">
          <div><h2>协作事件流</h2><p>显示 relay 与交接证据。</p></div></div>
        <div class="event-list">
          ${events.map(([text, time]) => `
            <div class="event-item">
              <span class="event-item__dot"></span>
              <div class="event-item__text">${text}</div>
              <div class="event-item__time">${time}</div>
            </div>
          `).join('')}
        </div>
      </article>
    </section>
  `
}
