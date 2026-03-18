import { workspaceDocs } from '../data/mockData.js'

export function renderWorkspacePage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Workspace / Docs / Memory</div>
        <h1 class="page-title">文档、记忆、昨日小记，最后都要变成可工作的台面。</h1>
        <p class="page-desc">这一页承接 control-center 的 Documents / Memory 工作台，以及 Star Office 的昨日小记表达。</p>
      </div>
      <span class="tag">6 Sources</span>
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div><h2>工作台</h2><p>下一步可以接真实文档、记忆检索状态、Agent scoped workspace。</p></div>
        </div>
        <div class="workspace-grid workspace-grid--double">
          ${workspaceDocs.map((doc) => `
            <article class="workspace-card glass-card glass-card--soft">
              <div>
                <strong>${doc.title}</strong>
                <p>${doc.type}</p>
              </div>
              <span class="tag">${doc.state}</span>
            </article>
          `).join('')}
        </div>
      </article>

      <article class="panel-stack">
        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>昨日小记</h2><p>把 Star Office 的感知层融进正式工作台。</p></div>
          </div>
          <div class="detail-card glass-card glass-card--soft">
            <strong>昨日摘要</strong>
            <p>完成招商页框架整理、活动海报第一轮生成、政府合作名单清洗，并识别出 2 个高风险写入动作。</p>
          </div>
        </section>
        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>记忆状态</h2><p>真实版本这里将接 searchable / healthy / degraded 状态。</p></div>
          </div>
          <div class="todo-list">
            <div class="todo-item">main memory：Healthy</div>
            <div class="todo-item">ops memory：Searchable</div>
            <div class="todo-item">design memory：Needs check</div>
          </div>
        </section>
      </article>
    </section>
  `
}
