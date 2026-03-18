export function renderStarOfficePage() {
  return `
    <section class="embed-shell glass-card">
      <button class="floating-switch-btn" data-route-jump="overview">切回总览指挥台</button>
      <div class="iframe-wrap iframe-wrap--full">
        <iframe class="office-frame" src="http://180.76.244.94:19000" title="Star Office UI"></iframe>
      </div>
    </section>
  `
}
