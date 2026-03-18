# OpenClaw Fusion Lab

默认融合版 OpenClaw 控制中心前端原型。

## 当前方向
- 只保留默认融合版
- 视觉语言统一为玻璃拟态风
- 目标是继续演进成真实可用的控制中心前端

## 已完成
- `docs/feature-summary.md`：5 个参考项目功能总结与融合建议
- `src/renderApp.js`：默认融合版首页结构
- `src/style.css`：玻璃拟态设计系统基础样式
- `index.html`：Vite 入口页

## 运行
```bash
npm install
npm run dev
```

## 构建
```bash
npm run build
```

## 下一步
- 增加多页面结构
- 补 Mission / Agents / Usage / Workspace 页面
- 接入模拟数据层
- 再接真实 OpenClaw / Gateway 数据
