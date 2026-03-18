import { approvals, events } from '../data/mockData.js'

export function renderApprovalsPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Approvals / Governance</div>
        <h1 class="page-title">把高风险动作集中到一个中心，而不是散落在各处。</h1>
        <p class="page-desc">这一页继续承接 mission-control 与 control-center 的治理逻辑，开始走向可操作面板。</p>
      </div>
      <span class="tag">3 Pending</span>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div><h2>待审批列表</h2><p>统一收拢写入、覆盖、同步这类高风险动作。</p></div></div>
          <div class="approval-list">
            ${approvals.map((item) => `
              <div class="approval-item glass-card glass-card--soft approval-item--actionable">
                <div>
                  <strong>${item.title}</strong>
                  <p>负责人：${item.owner}</p>
                </div>
                <div class="approval-actions">
                  <span class="tag tag--warn">${item.level}</span>
                  <button class="quick-action">批准</button>
                  <button class="quick-action">驳回</button>
                </div>
              </div>
            `).join('')}
          </div>
      </article>

      <article class="panel glass-card">
        <div class="panel__header">
          <div><h2>审批事件</h2><p>给复盘留链路。</p></div></div>
        <div class="event-list">
          ${events.slice(0, 4).map(([text, time]) => `
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
