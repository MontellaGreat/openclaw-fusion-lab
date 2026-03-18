export function renderIntegrationPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Integration / OpenClaw Wiring</div>
        <h1 class="page-title">这些页面到底是怎么把数据接到 OpenClaw 上的，这里说清楚。</h1>
        <p class="page-desc">这页不是展示层，而是给我们自己后续接线做参照：当前接法、参考项目接法、下一步接法。</p>
      </div>
      <span class="tag">Wiring</span>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header"><div><h2>当前项目</h2><p>先把我们已经做成的接线说清楚。</p></div></div>
        <div class="todo-list">
          <div class="todo-item">Nginx 统一入口：/、/star-office/、/api/live</div>
          <div class="todo-item">Star Office 原项目：19000</div>
          <div class="todo-item">融合控制台：4174</div>
          <div class="todo-item">OpenClaw 数据桥：4180</div>
          <div class="todo-item">真实状态来源：openclaw status + sessions 文件</div>
          <div class="todo-item">对象化接口：tasks / approvals / agents / flows / summary</div>
        </div>
      </article>

      <article class="panel glass-card">
        <div class="panel__header"><div><h2>下一步路线</h2><p>从观察层走向平台对象层。</p></div></div>
        <div class="todo-list">
          <div class="todo-item">补 task object store</div>
          <div class="todo-item">补 approval action handler</div>
          <div class="todo-item">补 agent discovery</div>
          <div class="todo-item">补 gateway runtime client</div>
        </div>
      </article>
    </section>
  `
}
