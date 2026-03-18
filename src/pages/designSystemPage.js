export function renderDesignSystemPage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Design System / UI-UX Pro Max</div>
        <h1 class="page-title">把风格、组件、状态、可访问性，整理成一套可持续演进的系统。</h1>
        <p class="page-desc">这一页基于 ui-ux-pro-max 的方法，把当前控制台的设计语言正式化，方便继续开发和统一质量。</p>
      </div>
      <span class="tag">System</span>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header"><div><h2>核心 Tokens</h2><p>颜色、圆角、阴影、间距、状态色统一管理。</p></div></div>
        <div class="workspace-grid workspace-grid--double">
          <article class="workspace-card glass-card glass-card--soft"><strong>Colors</strong><p>Primary / Cyan / Green / Amber / Red / Text / Surface</p></article>
          <article class="workspace-card glass-card glass-card--soft"><strong>Radius</strong><p>14 / 16 / 18 / 22 / 28</p></article>
          <article class="workspace-card glass-card glass-card--soft"><strong>Spacing</strong><p>8 / 10 / 12 / 14 / 16 / 18 / 20 / 24 / 28</p></article>
          <article class="workspace-card glass-card glass-card--soft"><strong>Shadow</strong><p>单一深阴影体系，避免组件杂乱</p></article>
        </div>
      </article>

      <article class="panel glass-card">
        <div class="panel__header"><div><h2>组件状态</h2><p>每个可交互组件都要有完整状态。</p></div></div>
        <div class="todo-list">
          <div class="todo-item">Loading：状态块 / 数据区 / iframe fallback</div>
          <div class="todo-item">Empty：无任务 / 无会话 / 无审批</div>
          <div class="todo-item">Error：数据桥失败 / 网关异常 / 协作失败</div>
          <div class="todo-item">Focus：键盘导航高亮态</div>
        </div>
      </article>
    </section>
  `
}
