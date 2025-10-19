# 🚀 快速部署指南

## ⚡ 3步部署（推荐）

```bash
# 1. 安装依赖并构建
npm install && npm run build

# 2. 安装 PM2
sudo npm install -g pm2

# 3. 启动服务（80端口）
sudo pm2 start server.js --name ctok
```

**完成！** 访问 `http://your-server-ip`

---

## 🔧 或使用一键脚本

```bash
chmod +x quick-deploy.sh
./quick-deploy.sh
```

---

## 📋 常用命令

```bash
# 查看状态
pm2 status

# 查看日志
pm2 logs ctok

# 重启服务
pm2 restart ctok

# 停止服务
pm2 stop ctok
```

---

## 📚 完整文档

详细说明请查看：[DEPLOY_NODEJS.md](./DEPLOY_NODEJS.md)

---

## 🎯 项目文件说明

- `server.js` - Node.js 静态服务器
- `quick-deploy.sh` - 一键部署脚本
- `DEPLOY_NODEJS.md` - 完整部署文档
- `package.json` - 项目配置和命令

---

**就这么简单！** 🎉

