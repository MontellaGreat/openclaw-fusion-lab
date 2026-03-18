# Deploy Guide

## 统一入口
- HTTP：`http://180.76.244.94/`
- HTTPS（自签证书）：`https://180.76.244.94/`

## 路径
- 融合控制台：`/`
- Star Office 原项目：`/star-office/`
- 实时状态接口：`/api/live`

## 后端结构
- `4174`：Vite preview，承载融合控制台
- `19000`：Star Office 原项目 Flask 服务
- `4180`：OpenClaw 实时数据桥
- `80/443`：Nginx 统一入口与反向代理

## 当前数据层
`/api/live` 目前已经返回：
- `status`
- `sessions`
- `tasks`
- `approvals`
- `agents`
- `flows`
- `summary`

## 当前说明
- HTTPS 目前为自签证书，因为只有 IP，没有域名，无法签发受信任证书
- 如果后续提供域名，可替换为正式证书
