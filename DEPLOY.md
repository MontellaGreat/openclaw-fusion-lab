# Deploy Guide

## 当前可用入口
- 融合控制台预览：`http://180.76.244.94:4174`
- Star Office 原项目：`http://180.76.244.94:19000`

## 本地运行
```bash
npm install
npm run dev -- --host 0.0.0.0 --port 4173
```

## 生产预览
```bash
npm run build
npm run preview -- --host 0.0.0.0 --port 4174
```

## 当前部署结构
- `4174`：Vite preview，承载融合控制台
- `19000`：Star Office 原项目 Flask 服务

## 下一步建议
- 用 Nginx 反向代理统一入口
- 让 `/` 指向融合控制台
- 让 `/star-office` 指向 Star Office 原项目
- 加 HTTPS
