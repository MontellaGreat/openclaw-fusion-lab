# OpenClaw 数据接入方式研究笔记

这份文档只回答一件事：参考项目是怎么把数据接到 OpenClaw 上的，以及我们当前该走哪条路。

## 1. `TianyiDataScience/openclaw-control-center`

### 接入思路
- 不是重度依赖单一实时 API
- 更偏“本地控制中心”思路
- 以本机可读数据源为核心：
  - OpenClaw home
  - Codex home
  - subscription snapshot
  - Gateway reachability
  - active agents / sessions / docs / memory

### 特征
- 读本地真实文件和真实目录
- 强调 source-backed workbench
- 偏 read-only 安全模式
- 把 operator 关心的结论提炼出来，而不是直接暴露底层 payload

### 对我们有用的点
- 我们现在已经在走这条路线的雏形：
  - `openclaw status`
  - 本机会话文件
  - Nginx 本地统一入口
- 后续适合继续把：
  - memory
  - docs
  - sessions
  - gateway health
 结构化为本地数据桥

---

## 2. `sunxi1993-a11y/AgentTeamsBI`

### 接入思路
- 偏轻量
- 通过本地运行环境和日志/统计文件做状态展示
- 重点不是强治理，而是“团队运营可视化”

### 特征
- Python 后端
- dashboard 静态前端
- Token 用量、任务事件、Agent 状态来自本地统计和周期性采集

### 对我们有用的点
- 适合做 BI 视角
- 我们现在的：
  - usage
  - event feed
  - agent ranking
  其实可以继续朝这个方向补

---

## 3. `abhi1693/openclaw-mission-control`

### 接入思路
- 平台型
- 强调 unified model
- 更像“OpenClaw 的上层操作系统”

### 特征
- work orchestration + agent ops + gateway ops + approvals
- 通过平台自己的对象模型承接：
  - organizations
  - boards
  - tasks
  - agents
  - approvals
- 核心不是只读状态，而是“平台自己有任务对象和治理对象”

### 对我们有用的点
- 如果我们想把当前项目从演示版升级成真正产品
- 就必须补自己的一层对象模型
- 也就是：
  - task object
  - approval object
  - handoff object
  - agent object

---

## 4. `crshdn/mission-control`

### 接入思路
- 最明确的一条：通过 OpenClaw Gateway 直连
- 关键方式：
  - WebSocket 连接 Gateway
  - `OPENCLAW_GATEWAY_URL`
  - `OPENCLAW_GATEWAY_TOKEN`
- 再在自己系统里维护：
  - tasks
  - planning
  - dispatch
  - execution
  - delivery

### 特征
- Dashboard 自己有数据库（SQLite）
- Dashboard 自己维护任务生命周期
- Gateway 提供运行时能力和 agent discovery
- UI 读的是“平台对象 + gateway runtime”两层

### 对我们有用的点
- 如果我们要真正把功能正式启用
- 后续最该补的就是：
  1. Gateway token/config 接入
  2. runtime discovery
  3. task / approval / dispatch 本地对象存储
  4. 再把 UI 绑定上去

---

# 结论：这 4 个项目的接线方式，本质上分成两类

## A. 本地只读/统计型
代表：
- `openclaw-control-center`
- `AgentTeamsBI`

特点：
- 读取本地文件
- 读取本地状态
- 读取运行日志或统计快照
- UI 更偏 observability / BI

## B. 平台对象 + Gateway 运行时型
代表：
- 两版 `mission-control`

特点：
- 自己维护任务与审批对象
- Gateway 负责 agent runtime
- UI 不只是展示，而是做 orchestration

---

# 我们当前项目现在处于什么位置

## 已经做到的
- 有统一入口
- 有 Star Office 默认主页
- 有控制台页面
- 有本地数据桥
- 已经能读：
  - `openclaw status`
  - session 文件

## 还没做到的
- 还没有真正的 task object store
- 还没有 approval object store
- 还没有真正的 gateway runtime client
- 还没有 WebSocket 实时接 Gateway

---

# 我们下一步最合理的接入路线

## 第一步
继续强化本地数据桥：
- `status`
- `sessions`
- `tasks`
- `approvals`
- `agents`

## 第二步
给这些数据定义本地对象结构：
- task
- approval
- collaboration flow
- agent

## 第三步
再接真正 Gateway：
- URL
- token
- discovery
- runtime events

## 第四步
把当前前端从“交互壳”升级成“真实操作面”

---

# 当前建议
如果继续推进，我建议我们后面就按 `crshdn/mission-control` 的路线走：
- UI 保持我们现在这套更高级的融合风格
- 数据接线层逐步向 mission-control 靠拢
- 而不是只停在 control-center 的观察层
