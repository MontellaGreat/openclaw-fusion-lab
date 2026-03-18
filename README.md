# OpenClaw Fusion Lab

默认融合版 OpenClaw 控制中心前端原型，统一采用玻璃拟态风。

## 当前状态
已经从静态稿升级为可运行的多页面前端骨架，包含：
- `Overview`
- `Missions`
- `Agents`
- `Usage`
- `Workspace`

## 目录说明
- `src/renderApp.js`：应用壳与导航切换
- `src/data/mockData.js`：共享模拟数据
- `src/pages/*.js`：页面模块
- `src/style.css`：玻璃拟态设计系统基础样式

## 本地运行
```bash
npm install
npm run dev
```

## 构建
```bash
npm run build
```

## 部署
### Vercel
仓库已包含 `vercel.json`，可直接导入仓库部署。

### Netlify
仓库已包含 `netlify.toml`，可直接连接仓库部署。

### 静态托管
构建后将 `dist/` 目录部署到任意静态服务器即可。

## 下一步建议
- 接入真实 OpenClaw / Gateway 数据
- 增加任务详情抽屉与筛选交互
- 增加文档 / 记忆工作台的真实读写状态
- 增加审批中心与协作链路页
