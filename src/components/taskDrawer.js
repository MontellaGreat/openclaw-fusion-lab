import { setUiState } from './uiState.js'

export function renderTaskDrawer() {
  return `
    <aside class="task-drawer glass-card" id="task-drawer">
      <div class="panel__header">
        <div><h2>任务详情</h2><p>面向后续正式任务对象的抽屉结构。</p></div>
        <button class="quick-action" data-close-drawer="task">关闭</button>
      </div>
      <div class="detail-card glass-card glass-card--soft">
        <strong id="task-drawer-title">请选择任务</strong>
        <p id="task-drawer-desc">点击任务卡后在这里查看更完整的任务信息。</p>
      </div>
      <div class="todo-list">
        <div class="todo-item">状态：<span id="task-drawer-stage">-</span></div>
        <div class="todo-item">负责人：<span id="task-drawer-owner">-</span></div>
        <div class="todo-item">优先级：<span id="task-drawer-priority">-</span></div>
        <div class="todo-item">预计交付：<span id="task-drawer-eta">-</span></div>
      </div>
      <div class="hero__actions">
        <button class="btn btn--primary" data-task-action="advance">标记推进</button>
        <button class="btn btn--ghost" data-task-action="approval">请求审批</button>
      </div>
      <div class="inline-feedback" id="task-drawer-feedback"></div>
    </aside>
  `
}

export function bindTaskDrawer() {
  const drawer = document.querySelector('#task-drawer')
  const feedback = document.querySelector('#task-drawer-feedback')
  if (!drawer) return

  document.querySelectorAll('[data-task]').forEach((card) => {
    card.addEventListener('click', () => {
      drawer.classList.add('is-open')
      document.querySelector('#task-drawer-title').textContent = card.dataset.taskTitle || '未命名任务'
      document.querySelector('#task-drawer-desc').textContent = card.dataset.taskDesc || '暂无描述'
      document.querySelector('#task-drawer-stage').textContent = card.dataset.taskStage || '-'
      document.querySelector('#task-drawer-owner').textContent = card.dataset.taskOwner || '-'
      document.querySelector('#task-drawer-priority').textContent = card.dataset.taskPriority || '-'
      document.querySelector('#task-drawer-eta').textContent = card.dataset.taskEta || '-'
      feedback.textContent = ''
    })
  })

  document.querySelectorAll('[data-close-drawer="task"]').forEach((button) => {
    button.addEventListener('click', () => drawer.classList.remove('is-open'))
  })

  document.querySelectorAll('[data-task-action]').forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.taskAction
      setUiState({ taskAction: action })
      feedback.textContent = action === 'advance' ? '已标记推进（前端交互态）' : '已发起审批请求（前端交互态）'
    })
  })
}
