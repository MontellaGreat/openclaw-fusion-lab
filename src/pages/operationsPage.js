export function renderOperationsPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Operations / Unified Surface</div>
        <h1 class="page-title">把任务、审批、协作、员工和工作台放进一个运营视角里。</h1>
        <p class="page-desc">这一页作为控制面总图，帮助你先做运营判断，再决定去哪个细分页面处理。</p>
      </div>
      <span class="tag">Ops View</span>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header"><div><h2>当前最该处理</h2><p>用一句话告诉你先干什么。</p></div></div>
        <div class="detail-card glass-card glass-card--soft">
          <strong>优先处理审批，再推进高优任务，再释放待命员工。</strong>
          <p>当前审批项阻塞任务进入下一阶段；处理后可把待命角色拉入执行链，缩短交付时间。</p>
        </div>
      </article>

      <article class="panel glass-card">
        <div class="panel__header"><div><h2>快速入口</h2><p>运营判断后，直接去对应页面处理。</p></div></div>
        <div class="hero__actions">
          <button class="btn btn--primary" data-route-jump="approvals">去审批中心</button>
          <button class="btn btn--ghost" data-route-jump="missions">去任务编排</button>
          <button class="btn btn--ghost" data-route-jump="agents">去员工总览</button>
        </div>
      </article>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header"><div><h2>状态摘要</h2><p>给运营看的，不是给程序看的。</p></div></div>
        <div class="todo-list">
          <div class="todo-item">任务 31，执行中压力偏高</div>
          <div class="todo-item">审批 3，当前存在阻塞</div>
          <div class="todo-item">待命员工 1，可立即接单</div>
          <div class="todo-item">真实状态桥在线</div>
        </div>
      </article>

      <article class="panel glass-card">
        <div class="panel__header"><div><h2>下一步</h2><p>从演示版继续往正式平台推进。</p></div></div>
        <div class="todo-list">
          <div class="todo-item">把审批按钮接成真实动作</div>
          <div class="todo-item">把任务推进接成真实状态变更</div>
          <div class="todo-item">把员工总览接成真实 agent 对象</div>
        </div>
      </article>
    </section>
  `
}
