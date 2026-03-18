import { events } from '../data/mockData.js'

export function renderCollaborationPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Collaboration / Handoff</div>
        <h1 class="page-title">谁把任务交给了谁，谁卡住了下一步，要一眼能看到。</h1>
        <p class="page-desc">这里后续将承接 parent-child relay、sessions_send、handoff 关系和跨 session 通信。</p>
      </div>
      <span class="tag">9 Flows</span>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>协作链路</h2><p>当前先做展示版，后续接真实链路对象。</p></div></div>
        <div class="todo-list">
          <div class="todo-item">main → ui-ux-agent → review-agent → main</div>
          <div class="todo-item">ops-agent → data-agent → ops-agent</div>
          <div class="todo-item">main → visual-agent → delivery-agent</div>
        </div>
      </div>
    </section>

    <section class="panel glass-card">
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
      </div>
    </section>
  `
}
