import { agents } from '../data/mockData.js'

const activeAgents = agents.filter((agent) => ['busy', 'working', 'syncing'].includes(agent.status))
const queuedAgents = agents.filter((agent) => agent.status === 'researching')
const idleAgents = agents.filter((agent) => agent.status === 'idle')

function renderAgentCard(agent) {
  return `
    <article class="staff-card glass-card glass-card--soft">
      <img class="staff-card__avatar" src="${agent.avatar}" alt="${agent.name}" />
      <div class="staff-card__body">
        <div class="staff-card__top">
          <div>
            <strong>${agent.name}</strong>
            <div class="agent-card__meta">${agent.persona} · ${agent.role}</div>
          </div>
          <span class="tag">${agent.stateLabel}</span>
        </div>
        <div class="staff-card__meta-row">
          <span>区域：${agent.area}</span>
          <span>负载：${agent.load}%</span>
          <span>任务：${agent.tasks}</span>
          <span>评分：${agent.score}</span>
        </div>
        <div class="progress"><span style="width:${agent.load}%"></span></div>
        <div class="staff-card__queue">${agent.queue}</div>
      </div>
    </article>
  `
}

export function renderAgentsPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Staff / Agent Operations</div>
        <h1 class="page-title">谁是真正在工作，谁只是排队，谁可以立即接手，现在分清楚。</h1>
        <p class="page-desc">这轮按照 openclaw-control-center 的 staff/operator 思路重做：先给运营判断，再给个人卡片。</p>
      </div>
      <span class="tag">5 Visible</span>
    </section>

    <section class="metric-grid">
      <article class="metric-card glass-card"><div class="metric-card__label">真实工作中</div><div class="metric-card__value">${activeAgents.length}</div><div class="metric-card__hint metric-card__hint--up">当前正在消化任务</div></article>
      <article class="metric-card glass-card"><div class="metric-card__label">排队准备中</div><div class="metric-card__value">${queuedAgents.length}</div><div class="metric-card__hint metric-card__hint--warn">有任务但未真正执行</div></article>
      <article class="metric-card glass-card"><div class="metric-card__label">待命中</div><div class="metric-card__value">${idleAgents.length}</div><div class="metric-card__hint">可以立即接单</div></article>
      <article class="metric-card glass-card"><div class="metric-card__label">总负载</div><div class="metric-card__value">54%</div><div class="metric-card__hint">团队平均负载</div></article>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>真实工作中</h2><p>先看真正有产出的，不把排队误判成正在工作。</p></div></div>
      <div class="staff-grid">
        ${activeAgents.map(renderAgentCard).join('')}
      </div>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div><h2>排队准备中</h2><p>有任务但还没有进入真正执行态。</p></div></div>
        <div class="staff-grid">
          ${queuedAgents.length ? queuedAgents.map(renderAgentCard).join('') : '<div class="todo-item">当前没有排队中的员工</div>'}
        </div>
      </article>

      <article class="panel glass-card">
        <div class="panel__header">
          <div><h2>待命区</h2><p>这些角色可以优先接新单。</p></div></div>
        <div class="staff-grid staff-grid--single">
          ${idleAgents.length ? idleAgents.map(renderAgentCard).join('') : '<div class="todo-item">当前没有待命员工</div>'}
        </div>
      </article>
    </section>
  `
}
