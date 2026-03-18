const uiState = {
  approvalAction: '',
  taskAction: '',
}

export function setUiState(partial) {
  Object.assign(uiState, partial)
}

export function getUiState() {
  return uiState
}
