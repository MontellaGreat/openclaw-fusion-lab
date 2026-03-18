import { agents } from '../data/mockData.js'

export function renderAgentsPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Agents / Operations</div>
        <h1 class="page-title">谁在忙、谁该派、谁该停，一页说清。</h1>
        <p class="page-desc">这一页吸收 AgentTeamsBI 的团队感、control-center 的 staff 判断力，以及 Star Office 的空间感。</p>
      </div>
      <span class="tag">14 Online</span>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>Agent 负载与状态</h2><p>下一步可以补排序、筛选、agent 详情弹层、生命周期操作。</p></div>
      </div>
      <div class="agent-grid">
        ${agents.map((agent, index) => `
          <article class="agent-card glass-card glass-card--soft">
            <div class="agent-card__avatar">${['M', 'UI', 'OP', 'DA'][index]}</div>
            <div class="agent-card__body">
              <strong>${agent.name}</strong>
              <p>${agent.role}</p>
              <div class="agent-card__meta">区域：${agent.area} · 状态：${agent.status}</div>
              <div class="progress"><span style="width:${agent.load}%"></span></div>
            </div>
            <div class="agent-card__load">${agent.load}%</div>
          </article>
        `).join('')}
      </div>
    </section>
  `
}
