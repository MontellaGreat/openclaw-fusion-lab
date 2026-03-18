(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();function l(){const c=[{label:"在线 Agent",value:"14",hint:"+2 今日新增",tone:"up"},{label:"活跃任务",value:"31",hint:"18 个执行中",tone:"up"},{label:"今日 Token",value:"2.8M",hint:"高于均值 22%",tone:"warn"},{label:"待审批",value:"4",hint:"2 项高风险写入",tone:"danger"}],e=[{title:"待澄清",count:4,cards:[{title:"政府宣传页重构",desc:"等待品牌规范和投放要求"},{title:"招商专题页",desc:"需要补参考案例和主视觉方向"}]},{title:"已派发",count:6,cards:[{title:"活动海报批量生成",desc:"视觉 Agent + 审校 Agent 协同"}]},{title:"执行中",count:9,cards:[{title:"官网落地页设计",desc:"UI 完成 72%，文案同步推进中"},{title:"周报自动汇总",desc:"已接数据，等待异常值复核"}]},{title:"待交付",count:5,cards:[{title:"短片镜头清单",desc:"交付物已产出，等待主控复核"}]}],i=[{name:"主 Agent / 墨影",role:"总控、复核、审批决策",load:78,area:"中枢台"},{name:"UI / UX Agent",role:"页面设计、组件重构、可视化布局",load:63,area:"设计区"},{name:"运营 Agent",role:"线索整理、日报、投放复盘",load:41,area:"协作区"}],t=[["main 将“招商页改版”转交给 ui-ux-agent","1m"],["visual-agent 完成 3 张海报初稿","4m"],["gateway 心跳恢复，延迟回落到 84ms","7m"],["review-agent 请求高风险写操作审批","11m"]];return`
    <div class="shell">
      <aside class="sidebar glass-card">
        <div class="brand">
          <div class="brand__badge">OC</div>
          <div>
            <div class="brand__title">Fusion Control Center</div>
            <div class="brand__meta">Glassmorphism Control System</div>
          </div>
        </div>

        <div class="section-label">Control</div>
        <nav class="nav-list">
          <button class="nav-item is-active">总览指挥台 <span>Live</span></button>
          <button class="nav-item">任务编排 <span>24</span></button>
          <button class="nav-item">Agent 运营 <span>12</span></button>
          <button class="nav-item">协作流转 <span>9</span></button>
          <button class="nav-item">Token / 成本 <span>月</span></button>
          <button class="nav-item">审批 / 风险 <span>3</span></button>
        </nav>

        <div class="sidebar-note glass-card glass-card--soft">
          <div class="section-label">融合原则</div>
          <p>保留控制中心的判断力、任务编排的流程力、BI 面板的数据感，再融入 Star Office 的可感知空间层。</p>
        </div>
      </aside>

      <main class="main">
        <section class="hero glass-card glass-card--hero">
          <div class="hero__copy">
            <div class="hero__eyebrow">OpenClaw Orchestration / Default Fusion</div>
            <h1>把黑盒 Agent 系统，做成真正能看、能控、能判断的玻璃拟态运营中枢。</h1>
            <p>这一版只走默认融合方向，不再分叉苹果风和 Linear 风。视觉语言统一升级成玻璃拟态：更高级、更有层级，也更像一个成熟产品，而不是几块面板拼在一起。</p>
            <div class="hero__actions">
              <button class="btn btn--primary">启动调度中心</button>
              <button class="btn btn--ghost">查看设计原则</button>
            </div>
          </div>

          <div class="hero-status">
            <div class="status-card glass-card glass-card--soft">
              <div class="status-card__row"><strong>系统状态</strong><span class="status-dot"></span></div>
              <div class="status-card__value">Healthy with Pressure</div>
              <div class="status-card__hint">Gateway 正常，成本偏高，2 项审批待处理</div>
            </div>
            <div class="status-card glass-card glass-card--soft">
              <div class="status-card__row"><strong>当前主判断</strong><span class="tag tag--warn">需介入</span></div>
              <div class="status-card__hint">优先处理审批与高消耗任务，再放量派发。</div>
            </div>
          </div>
        </section>

        <section class="metric-grid">
          ${c.map(s=>`
            <article class="metric-card glass-card">
              <div class="metric-card__label">${s.label}</div>
              <div class="metric-card__value">${s.value}</div>
              <div class="metric-card__hint metric-card__hint--${s.tone}">${s.hint}</div>
            </article>`).join("")}
        </section>

        <section class="content-grid">
          <article class="panel glass-card panel--wide">
            <div class="panel__header">
              <div>
                <h2>任务编排主视图</h2>
                <p>继承 Mission Control 的任务骨架，但表达更轻、更稳、更适合日常运营盯盘。</p>
              </div>
              <span class="tag">Pipeline</span>
            </div>
            <div class="pipeline-grid">
              ${e.map(s=>`
                <section class="pipeline-column glass-card glass-card--soft">
                  <div class="pipeline-column__header">
                    <strong>${s.title}</strong>
                    <span>${s.count}</span>
                  </div>
                  ${s.cards.map(a=>`
                    <article class="task-card">
                      <strong>${a.title}</strong>
                      <p>${a.desc}</p>
                    </article>`).join("")}
                </section>`).join("")}
            </div>
          </article>

          <article class="panel-stack">
            <section class="panel glass-card">
              <div class="panel__header">
                <div>
                  <h2>决策压力指数</h2>
                  <p>先给运营判断，再给底层数据。</p>
                </div>
              </div>
              <div class="pressure-ring">
                <div class="pressure-ring__inner">68%</div>
              </div>
              <div class="callout">建议顺序：审批 → 成本控制 → 继续分发。</div>
            </section>

            <section class="panel glass-card">
              <div class="panel__header">
                <div>
                  <h2>实时事件流</h2>
                  <p>保留 live feed 能力，给排障和复盘留证据。</p>
                </div>
              </div>
              <div class="event-list">
                ${t.map(([s,a])=>`
                  <div class="event-item">
                    <span class="event-item__dot"></span>
                    <div class="event-item__text">${s}</div>
                    <div class="event-item__time">${a}</div>
                  </div>`).join("")}
              </div>
            </section>
          </article>
        </section>

        <section class="content-grid content-grid--bottom">
          <article class="panel glass-card panel--wide">
            <div class="panel__header">
              <div>
                <h2>Glass Office Layer</h2>
                <p>把 Star Office 的空间化能力融入主系统，但改成玻璃拟态而不是像素风。</p>
              </div>
              <span class="tag">Presence</span>
            </div>
            <div class="agent-grid">
              ${i.map((s,a)=>`
                <article class="agent-card glass-card glass-card--soft">
                  <div class="agent-card__avatar">${["M","UI","OP"][a]}</div>
                  <div class="agent-card__body">
                    <strong>${s.name}</strong>
                    <p>${s.role}</p>
                    <div class="agent-card__meta">当前区域：${s.area}</div>
                    <div class="progress"><span style="width: ${s.load}%"></span></div>
                  </div>
                  <div class="agent-card__load">${s.load}%</div>
                </article>`).join("")}
            </div>
          </article>

          <article class="panel glass-card">
            <div class="panel__header">
              <div>
                <h2>下一步模块</h2>
                <p>接下来继续做成真实可用产品。</p>
              </div>
            </div>
            <div class="todo-list">
              <div class="todo-item">增加多页面路由：Overview / Missions / Agents / Usage / Workspace</div>
              <div class="todo-item">接入模拟数据层，为真实 Gateway 数据做接口准备</div>
              <div class="todo-item">补充审批、记忆、文档工作台</div>
              <div class="todo-item">统一成一套 glass design system</div>
            </div>
          </article>
        </section>
      </main>
    </div>
  `}document.querySelector("#app").innerHTML=l();
