import { renderOverviewPage } from './pages/overviewPage.js'
import { renderMissionsPage } from './pages/missionsPage.js'
import { renderAgentsPage } from './pages/agentsPage.js'
import { renderUsagePage } from './pages/usagePage.js'
import { renderWorkspacePage } from './pages/workspacePage.js'

const routes = [
  { id: 'overview', label: '总览指挥台', badge: 'Live', render: renderOverviewPage },
  { id: 'missions', label: '任务编排', badge: '24', render: renderMissionsPage },
  { id: 'agents', label: 'Agent 运营', badge: '12', render: renderAgentsPage },
  { id: 'usage', label: 'Token / 成本', badge: '月', render: renderUsagePage },
  { id: 'workspace', label: '工作台', badge: 'Docs', render: renderWorkspacePage },
]

function getRoute() {
  const hash = window.location.hash.replace('#/', '').trim()
  return routes.find((route) => route.id === hash)?.id ?? 'overview'
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
            <div class="brand__meta">Glassmorphism Operations System</div>
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
          <div class="section-label">当前方向</div>
          <p>只走默认融合版，并把所有页面统一进玻璃拟态设计系统。当前页面：${current.label}。</p>
        </div>
      </aside>

      <main class="main">
        ${current.render()}
      </main>
    </div>
  `
}

export function renderApp() {
  const app = document.querySelector('#app')

  function paint() {
    const activeRoute = getRoute()
    app.innerHTML = renderShell(activeRoute)
    app.querySelectorAll('[data-route]').forEach((button) => {
      button.addEventListener('click', () => {
        window.location.hash = `/${button.dataset.route}`
      })
    })
  }

  window.addEventListener('hashchange', paint)
  paint()

  return ''
}
