import { agents } from '../data/mockData.js'

export function renderAgentsPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Agents / Operations</div>
        <h1 class="page-title">谁在忙、谁该派、谁该停，一页说清。</h1>
        <p class="page-desc">这一页继续往“真后台”推进：负载、状态、评分、任务量都放进单个 Agent 卡里。</p>
      </div>
      <span class="tag">14 Online</span>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>Agent 负载与状态</h2><p>下一步可以补排序、筛选、agent 详情弹层、生命周期操作。</p></div>
        <div class="filter-row"><span class="tag">All</span><span class="tag">Busy</span><span class="tag">Idle</span></div>
      </div>
      <div class="agent-grid">
        ${agents.map((agent, index) => `
          <article class="agent-card glass-card glass-card--soft agent-card--full">
            <div class="agent-card__avatar">${['M', 'UI', 'OP', 'DA', 'RV'][index]}</div>
            <div class="agent-card__body">
              <strong>${agent.name}</strong>
              <p>${agent.role}</p>
              <div class="agent-card__meta">区域：${agent.area} · 状态：${agent.status} · 评分：${agent.score}</div>
              <div class="progress"><span style="width:${agent.load}%"></span></div>
            </div>
            <div class="agent-side-meta">
              <div class="agent-card__load">${agent.load}%</div>
              <div class="agent-side-meta__sub">${agent.tasks} Tasks</div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `
}
