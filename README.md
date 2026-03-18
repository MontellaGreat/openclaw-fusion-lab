# OpenClaw Fusion Lab

默认融合版 OpenClaw 控制中心前端原型，统一采用玻璃拟态风。

## 当前状态
已经从静态稿升级为可运行的多页面前端骨架，并且把 `Star Office UI` 原项目完整嵌入为默认主页。
同时已经开始接入真实 OpenClaw 状态。

## 当前页面
- `Star Office`（默认主页，完整嵌入原项目）
- `总览指挥台`
- `任务编排`
- `Agent 运营`
- `Token / 成本`
- `审批中心`
- `协作链路`
- `工作台`

## 当前入口
- 统一 HTTP 入口：`http://180.76.244.94/`
- 统一 HTTPS 入口：`https://180.76.244.94/`
- Star Office 路径：`http://180.76.244.94/star-office/`

## 说明
- HTTPS 当前为自签证书
- 真实状态接口已接入统一入口：`/api/live`
