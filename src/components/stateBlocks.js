export function renderEmptyState(title, desc) {
  return `
    <div class="state-block glass-card glass-card--soft">
      <strong>${title}</strong>
      <p>${desc}</p>
    </div>
  `
}

export function renderLoadingState(label = '加载中') {
  return `
    <div class="state-block glass-card glass-card--soft">
      <strong>${label}</strong>
      <p>系统正在准备数据，请稍等。</p>
    </div>
  `
}

export function renderErrorState(label = '读取失败') {
  return `
    <div class="state-block glass-card glass-card--soft state-block--error">
      <strong>${label}</strong>
      <p>当前数据源暂不可用，请稍后重试。</p>
    </div>
  `
}
