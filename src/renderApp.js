import { renderTopbar } from './components/topbar.js'
import { renderStarOfficePage } from './pages/starOfficePage.js'
import { renderOverviewPage } from './pages/overviewPage.js'
import { renderMissionsPage } from './pages/missionsPage.js'
import { renderAgentsPage } from './pages/agentsPage.js'
import { renderUsagePage } from './pages/usagePage.js'
import { renderWorkspacePage } from './pages/workspacePage.js'
import { renderApprovalsPage } from './pages/approvalsPage.js'
import { renderCollaborationPage } from './pages/collaborationPage.js'

const routes = [
  { id: 'star-office', label: 'Star Office', badge: 'Home', render: renderStarOfficePage },
  { id: 'overview', label: '总览指挥台', badge: 'Live', render: renderOverviewPage },
  { id: 'missions', label: '任务编排', badge: '24', render: renderMissionsPage },
  { id: 'agents', label: 'Agent 运营', badge: '12', render: renderAgentsPage },
  { id: 'usage', label: 'Token / 成本', badge: '月', render: renderUsagePage },
  { id: 'approvals', label: '审批中心', badge: '3', render: renderApprovalsPage },
  { id: 'collaboration', label: '协作链路', badge: '9', render: renderCollaborationPage },
  { id: 'workspace', label: '工作台', badge: 'Docs', render: renderWorkspacePage },
]

function getRoute() {
  const hash = window.location.hash.replace('#/', '').trim()
  return routes.find((route) => route.id === hash)?.id ?? 'star-office'
}

function renderShell(activeRoute) {
  const current = routes.find((route) => route.id === activeRoute) ?? routes[0]

  return `
    <div class="shell">
      <aside class="sidebar glass-card">
        <div class="brand">
          <div class="brand__badge">OC</div>
          <div>
            <div class="brand__title">Fusion Control Center</div>
            <div class="brand__meta">Star Office + Control Center</div>
          </div>
        </div>

        <div class="section-label">Navigation</div>
        <nav class="nav-list">
          ${routes.map((route) => `
            <button class="nav-item ${route.id === activeRoute ? 'is-active' : ''}" data-route="${route.id}">
              ${route.label}
              <span>${route.badge}</span>
            </button>
          `).join('')}
        </nav>

        <div class="sidebar-note glass-card glass-card--soft">
          <div class="section-label">默认首页</div>
          <p>现在默认先进入 Star Office 主页，再通过按钮切回总览指挥台。当前页面：${current.label}。</p>
        </div>
      </aside>

      <main class="main">
        ${renderTopbar(current.label)}
        ${current.render()}
      </main>
    </div>
  `
}

export function renderApp() {
  const app = document.querySelector('#app')

  function bindRouteEvents() {
    app.querySelectorAll('[data-route]').forEach((button) => {
      button.addEventListener('click', () => {
        window.location.hash = `/${button.dataset.route}`
      })
    })

    app.querySelectorAll('[data-route-jump]').forEach((button) => {
      button.addEventListener('click', () => {
        window.location.hash = `/${button.dataset.routeJump}`
      })
    })
  }

  function paint() {
    const activeRoute = getRoute()
    app.innerHTML = renderShell(activeRoute)
    bindRouteEvents()
  }

  window.addEventListener('hashchange', paint)
  paint()

  return ''
}
