import { workspaceDocs } from '../data/mockData.js'

export function renderWorkspacePage() {
  return `
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Workspace / Docs / Memory</div>
        <h1 class="page-title">文档、记忆、昨日小记，最后都要变成可工作的台面。</h1>
        <p class="page-desc">这一页承接 control-center 的 Documents / Memory 工作台，以及 Star Office 的昨日小记表达。</p>
      </div>
      <span class="tag">4 Sources</span>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>工作台</h2><p>下一步可以接真实文档、记忆检索状态、Agent scoped workspace。</p></div>
      </div>
      <div class="workspace-grid">
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
    </section>
  `
}
