import { quickActions, topStats } from '../data/mockData.js'

export function renderTopbar(activeLabel) {
  return `
    <section class="topbar glass-card">
      <div>
        <div class="topbar__title">${activeLabel}</div>
        <div class="topbar__sub">Glassmorphism Control Surface / Public Preview</div>
      </div>
      <div class="topbar__stats">
        ${topStats.map((item) => `<div class="top-stat"><span>${item.label}</span><strong>${item.value}</strong></div>`).join('')}
      </div>
      <div class="topbar__actions">
        ${quickActions.map((label) => `<button class="quick-action">${label}</button>`).join('')}
      </div>
    </section>
  `
}
