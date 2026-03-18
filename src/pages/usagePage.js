import { metrics, usageBars } from '../data/mockData.js'

export function renderUsagePage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Usage / Token / Cost</div>
        <h1 class="page-title">看消耗，不只是看数字，而是看风险和调度策略。</h1>
        <p class="page-desc">这一页承接 control-center 的 usage 体系和 AgentTeamsBI 的日历 / 用量感知。</p>
      </div>
      <span class="tag">This Month</span>
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

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>Token 趋势</h2><p>下一步可以补热力图、时间范围切换、成本折线和上下文压力模块。</p></div>
      </div>
      <div class="usage-bars">
        ${usageBars.map((value, index) => `
          <div class="usage-bar" style="height:${value}%"><span>${String(index + 1).padStart(2, '0')}</span></div>
        `).join('')}
      </div>
    </section>
  `
}
