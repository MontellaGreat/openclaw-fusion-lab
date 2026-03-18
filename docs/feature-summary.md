# 参考项目功能总结与融合建议

## 1. `TianyiDataScience/openclaw-control-center`

### 核心定位
- 面向 OpenClaw 的本地控制中心
- 强调可见、可控、可信
- 面向非技术运营者，不只是开发者

### 主要功能
- Overview 总览页
  - 系统健康状态
  - 当前运行状态
  - 待决策事项
  - 面向 operator 的摘要结论
- Usage 用量页
  - 今日 / 7 日 / 30 日使用趋势
  - 消耗与花费趋势
  - 订阅窗口
  - 配额消耗
  - 连接器状态
  - 上下文压力卡片
- Staff 团队页
  - 谁在真实工作
  - 谁只是排队中
  - 忙碌 / 空闲 / 阻塞 / 等待 区分
- Collaboration 协作页
  - 父子 session relay
  - 跨 session 通信
  - handoff 关系可视化
- Tasks 任务页
  - 当前工作
  - 审批事项
  - 执行链
  - 运行证据
- Documents 文档工作台
  - 共享核心文档
  - agent 专属文档
  - 真实源文件读写
- Memory 记忆工作台
  - 每个 agent 的 memory 状态
  - 可搜索 / 可用 / 需要关注
  - 仅显示 active agents 对应的数据
- Settings 设置页
  - Connection health
  - Security risk summary
  - Update status
  - 环境接线状态说明
- 安全默认值
  - 只读默认开启
  - 本地 token 认证默认开启
  - mutation 路由默认关闭
  - 审批动作默认 hard-gated
  - dry-run 模式默认开启

### 这个项目的最大优点
- 信息架构成熟
- 很适合做“总控视角”首页
- 不是纯展示数据，而是给运营判断

---

## 2. `sunxi1993-a11y/AgentTeamsBI`

### 核心定位
- 多 Agent 团队运营看板
- 偏轻量、偏状态展示、偏运营感

### 主要功能
- Agent 状态总览
  - 忙碌 / 空闲 / 离线 状态展示
- Agent 排位系统
  - Agent 排名
  - 段位展示
- Agent 详细配置查看
- Token 用量日历
  - 按月份展示每日消耗
  - 4 档颜色区分用量等级
  - 支持历史月份滚动查看
- 任务监督日志
  - 自动记录任务派发
  - 自动记录任务进度
  - 自动记录任务完成情况
  - 实时更新任务事件
  - 展示任务类型与状态
- 运营统计
  - Token 总消耗统计
  - 各 Agent 工作量排行
  - 运营数据汇总
- 部署结构
  - Python 后端
  - React 前端
  - dashboard 静态分发

### 这个项目的最大优点
- 很有“团队运营”味道
- Token 日历和任务事件流很适合盯盘
- 低门槛、直观

---

## 3. `abhi1693/openclaw-mission-control`

### 核心定位
- 集中式组织级 OpenClaw 运维与治理平台
- 强调 approval、governance、gateway-aware orchestration

### 主要功能
- Work orchestration
  - organizations
  - board groups
  - boards
  - tasks
  - tags
- Agent operations
  - 创建 agent
  - 查看 agent
  - 管理 agent 生命周期
- Governance and approvals
  - 敏感动作审批流
  - 决策轨迹留痕
- Gateway management
  - gateway 集成与管理
  - 支持分布式环境
- Activity visibility
  - 系统行为时间线
  - 排障 / 问责 / 审计复盘
- API-first model
  - UI 与自动化共用一套对象模型
- Multi-team support
  - 多组织、多 board、多 team 运维
- Human-in-the-loop
  - 高风险操作需要人工批准
- Unified UI + API model
  - operator 和 automation 使用同一生命周期系统
- Deployment / auth
  - docker / local 两种部署
  - local token / clerk 两种认证模式

### 这个项目的最大优点
- 治理能力完整
- 更像真正的平台产品
- 适合做企业级控制面

---

## 4. `crshdn/mission-control`

### 核心定位
- AI Agent Orchestration Dashboard
- 偏任务驱动、派发驱动、执行流驱动

### 主要功能
- Task management
  - 7 列 kanban
  - 拖拽推进任务状态
- AI planning
  - AI 先提问澄清需求
  - 再进入任务执行
- Agent system
  - 自动创建专用 agent
  - 自动分配任务
  - 实时追踪进度
- Gateway integration
  - WebSocket 连接 OpenClaw Gateway
  - 一键导入 Gateway 现有 agents
- Live feed
  - 实时事件流
  - agent activity
  - task update
  - system event
- 多机部署
  - dashboard 与 AI agents 可不同机器
  - 支持 Tailscale
- 安全能力
  - bearer token auth
  - HMAC webhooks
  - Zod validation
  - path traversal protection
  - security headers
- 隐私说明
  - 无内建 analytics trackers
  - 数据默认保留在自己部署环境
- 数据层
  - SQLite
  - workspace 文件
- 工作流设计
  - Create task
  - AI Q&A
  - Agent created
  - Agent works
  - Delivery
- 状态链
  - Planning
  - Inbox
  - Assigned
  - In Progress
  - Testing
  - Review
  - Done

### 这个项目的最大优点
- 产品叙事很强
- 很适合把“任务是怎么被 AI 团队处理掉的”做清楚
- 调度流程感非常强

---

## 5. `ringhyacinth/Star-Office-UI`

### 核心定位
- 像素风 AI 办公室
- 把不可见的工作状态做成有场景感、有角色感的可视化空间

### 主要功能
- 状态可视化
  - 6 种状态：idle / writing / researching / executing / syncing / error
  - 状态自动映射到办公室不同区域
  - 动画与气泡实时展示
- 昨日小记
  - 自动从 memory/*.md 读取最近一天记录
  - 脱敏后生成“昨日小记”卡片
- 多 Agent 协作
  - join key 邀请其他 Agent 加入
  - 实时显示多人状态
- 多语言
  - 中 / 英 / 日切换
- 美术资产自定义
  - 场景 / 角色 / 装饰素材管理
  - 动态帧同步
- AI 生图装修
  - Gemini API 驱动办公室背景生成
- 移动端适配
- 安全能力
  - 侧边栏密码保护
  - 弱密码拦截
  - Session Cookie 加固
- 公网访问
  - Cloudflare Tunnel
  - 自有域名 / 反向代理
- 桌面宠物版
  - Electron 封装
  - 透明窗口桌面宠物模式
- OpenClaw 深度集成
  - set_state.py 驱动状态
  - office-agent-push.py 推送访客状态
- API 接口
  - `/health`
  - `/status`
  - `/set_state`
  - `/agents`
  - `/join-agent`
  - `/agent-push`
  - `/leave-agent`
  - `/yesterday-memo`
  - Gemini 配置与轮询接口

### 这个项目的最大优点
- 情绪价值和可感知性最强
- 让 AI 工作状态“被看见”
- 非常适合做“空间化可视化层”或品牌化首页

---

# 融合时不能漏掉的功能模块

## A. 总控与健康
- 系统健康总览
- 当前状态摘要
- 决策待办
- 风险与异常提示
- 连接状态 / gateway 健康
- 更新状态 / 版本状态

## B. 任务编排与执行
- 任务创建
- AI 澄清提问
- 任务派发
- 多阶段流程推进
- 看板视图
- 执行证据
- 交付状态
- 任务日志与监督流

## C. Agent 团队运营
- Agent 在线 / 忙碌 / 空闲 / 离线
- Agent 当前任务
- Agent 负载
- Agent 排名 / 工作量
- Agent 配置查看
- Agent 生命周期管理

## D. 成本与资源
- Token 日 / 周 / 月趋势
- Token 日历热力图
- 成本 / 花费趋势
- 配额窗口
- 上下文压力

## E. 协作与治理
- 父子 session handoff
- 跨 session 通信
- 审批流
- 敏感操作治理
- 审计轨迹
- activity timeline

## F. 文档与记忆
- 文档工作台
- 记忆工作台
- 昨日小记 / 工作摘要
- active agents scoped data

## G. 空间化与品牌表达
- 空间化状态可视化
- 角色 / 场景 / 办公室概念
- 更有温度的状态展示
- 多语言与品牌感
- 移动端友好体验

---

# 融合建议：最终产品应该长什么样

## 一层：Operator Control Center
继承 `openclaw-control-center`
- 首页先回答：现在系统怎么样、哪里要处理、风险在哪

## 二层：Mission Workflow
继承两版 `mission-control`
- 把任务全生命周期做清楚
- 从澄清到派发到执行到审批到交付形成闭环

## 三层：Agent BI
继承 `AgentTeamsBI`
- 用量、排行、负载、事件监督都放进来
- 让运营有抓手

## 四层：Star Office Layer
继承 `Star-Office-UI`
- 做一个“空间化状态层”
- 不一定作为主工作区，但很适合作为首页顶部 / 专属空间页 / 品牌化模式

---

# 设计方向建议

## 默认融合版
- 控制中心 + 任务编排 + 运营面板三位一体
- 高级深色科技风
- 适合正式产品

## 苹果风版
- 更克制
- 更轻盈
- 更像 macOS / Apple Pro Apps
- 更适合高端演示与品牌展示

## Linear 风版
- 更理性
- 更产品化
- 更适合任务管理与团队协作
- 更适合真正长期使用
