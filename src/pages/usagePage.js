import { metrics, usageBars, usageBreakdown } from '../data/mockData.js'

export function renderUsagePage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Usage / Token / Cost</div>
        <h1 class="page-title">看消耗，不只是看数字，而是看风险和调度策略。</h1>
        <p class="page-desc">这一页承接 control-center 的 usage 体系和 AgentTeamsBI 的用量感知，并继续向 BI 视图靠拢。</p>
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

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div><h2>Token 趋势</h2><p>下一步可以补热力图、范围切换、成本折线和上下文压力模块。</p></div>
        </div>
        <div class="usage-bars">
          ${usageBars.map((value, index) => `
            <div class="usage-bar" style="height:${value}%"><span>${String(index + 1).padStart(2, '0')}</span></div>
          `).join('')}
        </div>
      </article>

      <article class="panel-stack">
        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>消耗构成</h2><p>把大头先看清，后面才好控。</p></div>
          </div>
          <div class="breakdown-list">
            ${usageBreakdown.map((item) => `
              <div class="breakdown-item glass-card glass-card--soft">
                <strong>${item.label}</strong>
                <span>${item.value}</span>
              </div>
            `).join('')}
          </div>
        </section>
        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>运营建议</h2><p>根据当前压力给出动作建议。</p></div>
          </div>
          <div class="todo-list">
            <div class="todo-item">视频生成任务建议拆分成 2 批执行</div>
            <div class="todo-item">高消耗任务优先安排在低峰时段</div>
            <div class="todo-item">把大文档整理拆为摘要 + 深读两段流程</div>
          </div>
        </section>
      </article>
    </section>
  `
}
