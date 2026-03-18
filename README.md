# OpenClaw Fusion Lab

默认融合版 OpenClaw 控制中心前端原型，统一采用玻璃拟态风。

## 当前状态
已经从静态稿升级为可运行的多页面前端骨架，并且把 `Star Office UI` 原项目完整嵌入为默认主页。

## 当前页面
- `Star Office`（默认主页，完整嵌入原项目）
- `总览指挥台`
- `任务编排`
- `Agent 运营`
- `Token / 成本`
- `审批中心`
- `协作链路`
- `工作台`

## 目录说明
- `src/renderApp.js`：应用壳与导航切换
- `src/components/topbar.js`：顶部状态条
- `src/data/mockData.js`：共享模拟数据
- `src/pages/*.js`：页面模块
- `src/style.css`：玻璃拟态设计系统基础样式
- `DEPLOY.md`：部署说明

## 本地运行
```bash
npm install
npm run dev
```

## 构建
```bash
npm run build
```

## 当前公网预览
- 融合控制台：`http://180.76.244.94:4174`
- Star Office 原项目：`http://180.76.244.94:19000`
