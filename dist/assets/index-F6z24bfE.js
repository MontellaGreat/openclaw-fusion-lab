(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function i(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(a){if(a.ep)return;a.ep=!0;const t=i(a);fetch(a.href,t)}})();const r=[{label:"在线 Agent",value:"14",hint:"+2 今日新增",tone:"up"},{label:"活跃任务",value:"31",hint:"18 个执行中",tone:"up"},{label:"今日 Token",value:"2.8M",hint:"高于均值 22%",tone:"warn"},{label:"待审批",value:"4",hint:"2 项高风险写入",tone:"danger"}],o=[{title:"待澄清",count:4,cards:[{title:"政府宣传页重构",desc:"等待品牌规范和投放要求"},{title:"招商专题页",desc:"需要补参考案例和主视觉方向"}]},{title:"已派发",count:6,cards:[{title:"活动海报批量生成",desc:"视觉 Agent + 审校 Agent 协同"}]},{title:"执行中",count:9,cards:[{title:"官网落地页设计",desc:"UI 完成 72%，文案同步推进中"},{title:"周报自动汇总",desc:"已接数据，等待异常值复核"}]},{title:"待交付",count:5,cards:[{title:"短片镜头清单",desc:"交付物已产出，等待主控复核"}]}],v=[{name:"主 Agent / 墨影",role:"总控、复核、审批决策",load:78,area:"中枢台",status:"Busy"},{name:"UI / UX Agent",role:"页面设计、组件重构、可视化布局",load:63,area:"设计区",status:"Working"},{name:"运营 Agent",role:"线索整理、日报、投放复盘",load:41,area:"协作区",status:"Researching"},{name:"数据 Agent",role:"统计、报表、异常值监控",load:54,area:"分析区",status:"Syncing"}],l=[["main 将“招商页改版”转交给 ui-ux-agent","1m"],["visual-agent 完成 3 张海报初稿","4m"],["gateway 心跳恢复，延迟回落到 84ms","7m"],["review-agent 请求高风险写操作审批","11m"]],p=[28,42,38,76,61,92,68,81],g=[{title:"品牌规范 / 政务版",type:"Document",state:"已同步"},{title:"投标资料知识库",type:"Memory",state:"可检索"},{title:"招商页需求清单",type:"Task Doc",state:"待补充"},{title:"昨日小记摘要",type:"Memo",state:"已生成"}];function u(){return`
    <section class="hero glass-card glass-card--hero">
      <div class="hero__copy">
        <div class="hero__eyebrow">Overview / Glass Control Center</div>
        <h1>把黑盒 Agent 系统，做成真正能看、能控、能判断的玻璃拟态运营中枢。</h1>
        <p>这一版继续沿着默认融合版推进：控制中心、任务编排、Agent 运营和空间状态层统一成一套产品语言。</p>
        <div class="hero__actions">
          <button class="btn btn--primary">启动调度中心</button>
          <button class="btn btn--ghost">查看风险摘要</button>
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
      ${r.map(s=>`
        <article class="metric-card glass-card">
          <div class="metric-card__label">${s.label}</div>
          <div class="metric-card__value">${s.value}</div>
          <div class="metric-card__hint metric-card__hint--${s.tone}">${s.hint}</div>
        </article>
      `).join("")}
    </section>

    <section class="content-grid">
      <article class="panel glass-card panel--wide">
        <div class="panel__header">
          <div>
            <h2>任务编排主视图</h2>
            <p>先看任务卡在哪，再决定资源怎么派。</p>
          </div>
          <span class="tag">Pipeline</span>
        </div>
        <div class="pipeline-grid">
          ${o.map(s=>`
            <section class="pipeline-column glass-card glass-card--soft">
              <div class="pipeline-column__header"><strong>${s.title}</strong><span>${s.count}</span></div>
              ${s.cards.map(e=>`
                <article class="task-card">
                  <strong>${e.title}</strong>
                  <p>${e.desc}</p>
                </article>
              `).join("")}
            </section>
          `).join("")}
        </div>
      </article>

      <article class="panel-stack">
        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>实时事件流</h2><p>给排障、复盘和审计留证据。</p></div>
          </div>
          <div class="event-list">
            ${l.map(([s,e])=>`
              <div class="event-item">
                <span class="event-item__dot"></span>
                <div class="event-item__text">${s}</div>
                <div class="event-item__time">${e}</div>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="panel glass-card">
          <div class="panel__header">
            <div><h2>核心 Agent</h2><p>只显示当前最该看的 Agent。</p></div>
          </div>
          <div class="agent-grid compact-grid">
            ${v.slice(0,3).map((s,e)=>`
              <article class="agent-card glass-card glass-card--soft">
                <div class="agent-card__avatar">${["M","UI","OP"][e]}</div>
                <div class="agent-card__body">
                  <strong>${s.name}</strong>
                  <p>${s.role}</p>
                  <div class="agent-card__meta">${s.area}</div>
                  <div class="progress"><span style="width:${s.load}%"></span></div>
                </div>
                <div class="agent-card__load">${s.load}%</div>
              </article>
            `).join("")}
          </div>
        </section>
      </article>
    </section>
  `}function _(){return`
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Missions / Full Pipeline</div>
        <h1 class="page-title">任务从澄清到交付，整条链路一次看清。</h1>
        <p class="page-desc">这里重点承接两版 Mission Control 的强项：任务状态、交接关系、审批阻塞、实时事件。</p>
      </div>
      <span class="tag">31 Active</span>
    </section>

    <section class="panel glass-card panel--wide">
      <div class="panel__header">
        <div><h2>任务全流程</h2><p>下一步可以补拖拽、筛选、标签和任务详情抽屉。</p></div>
      </div>
      <div class="pipeline-grid">
        ${o.map(s=>`
          <section class="pipeline-column glass-card glass-card--soft">
            <div class="pipeline-column__header"><strong>${s.title}</strong><span>${s.count}</span></div>
            ${s.cards.map(e=>`
              <article class="task-card">
                <strong>${e.title}</strong>
                <p>${e.desc}</p>
                <div class="task-card__meta">审批链 / 交付物 / 运行证据</div>
              </article>
            `).join("")}
          </section>
        `).join("")}
      </div>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>任务事件监督</h2><p>继承 AgentTeamsBI 的监督感和 Mission Control 的审计感。</p></div>
      </div>
      <div class="event-list">
        ${l.concat(l).map(([s,e])=>`
          <div class="event-item">
            <span class="event-item__dot"></span>
            <div class="event-item__text">${s}</div>
            <div class="event-item__time">${e}</div>
          </div>
        `).join("")}
      </div>
    </section>
  `}function h(){return`
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Agents / Operations</div>
        <h1 class="page-title">谁在忙、谁该派、谁该停，一页说清。</h1>
        <p class="page-desc">这一页吸收 AgentTeamsBI 的团队感、control-center 的 staff 判断力，以及 Star Office 的空间感。</p>
      </div>
      <span class="tag">14 Online</span>
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>Agent 负载与状态</h2><p>下一步可以补排序、筛选、agent 详情弹层、生命周期操作。</p></div>
      </div>
      <div class="agent-grid">
        ${v.map((s,e)=>`
          <article class="agent-card glass-card glass-card--soft">
            <div class="agent-card__avatar">${["M","UI","OP","DA"][e]}</div>
            <div class="agent-card__body">
              <strong>${s.name}</strong>
              <p>${s.role}</p>
              <div class="agent-card__meta">区域：${s.area} · 状态：${s.status}</div>
              <div class="progress"><span style="width:${s.load}%"></span></div>
            </div>
            <div class="agent-card__load">${s.load}%</div>
          </article>
        `).join("")}
      </div>
    </section>
  `}function m(){return`
    <section class="page-head glass-card">
      <div>
        <div class="hero__eyebrow">Usage / Token / Cost</div>
        <h1 class="page-title">看消耗，不只是看数字，而是看风险和调度策略。</h1>
        <p class="page-desc">这一页承接 control-center 的 usage 体系和 AgentTeamsBI 的日历 / 用量感知。</p>
      </div>
      <span class="tag">This Month</span>
    </section>

    <section class="metric-grid">
      ${r.map(s=>`
        <article class="metric-card glass-card">
          <div class="metric-card__label">${s.label}</div>
          <div class="metric-card__value">${s.value}</div>
          <div class="metric-card__hint metric-card__hint--${s.tone}">${s.hint}</div>
        </article>
      `).join("")}
    </section>

    <section class="panel glass-card">
      <div class="panel__header">
        <div><h2>Token 趋势</h2><p>下一步可以补热力图、时间范围切换、成本折线和上下文压力模块。</p></div>
      </div>
      <div class="usage-bars">
        ${p.map((s,e)=>`
          <div class="usage-bar" style="height:${s}%"><span>${String(e+1).padStart(2,"0")}</span></div>
        `).join("")}
      </div>
    </section>
  `}function $(){return`
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
        ${g.map(s=>`
          <article class="workspace-card glass-card glass-card--soft">
            <div>
              <strong>${s.title}</strong>
              <p>${s.type}</p>
            </div>
            <span class="tag">${s.state}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `}const n=[{id:"overview",label:"总览指挥台",badge:"Live",render:u},{id:"missions",label:"任务编排",badge:"24",render:_},{id:"agents",label:"Agent 运营",badge:"12",render:h},{id:"usage",label:"Token / 成本",badge:"月",render:m},{id:"workspace",label:"工作台",badge:"Docs",render:$}];function b(){const s=window.location.hash.replace("#/","").trim();return n.find(e=>e.id===s)?.id??"overview"}function f(s){const e=n.find(i=>i.id===s)??n[0];return`
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
          ${n.map(i=>`
            <button class="nav-item ${i.id===s?"is-active":""}" data-route="${i.id}">
              ${i.label}
              <span>${i.badge}</span>
            </button>
          `).join("")}
        </nav>

        <div class="sidebar-note glass-card glass-card--soft">
          <div class="section-label">当前方向</div>
          <p>只走默认融合版，并把所有页面统一进玻璃拟态设计系统。当前页面：${e.label}。</p>
        </div>
      </aside>

      <main class="main">
        ${e.render()}
      </main>
    </div>
  `}function y(){const s=document.querySelector("#app");function e(){const i=b();s.innerHTML=f(i),s.querySelectorAll("[data-route]").forEach(c=>{c.addEventListener("click",()=>{window.location.hash=`/${c.dataset.route}`})})}return window.addEventListener("hashchange",e),e(),""}y();
