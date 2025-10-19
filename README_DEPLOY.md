# 🚀 快速部署指南

> **新手？** 👉 查看 [保姆级部署教程](./SERVER_DEPLOY_GUIDE.md)  
> **快速参考？** 👉 查看 [命令速查卡](./DEPLOY_COMMANDS.md)

---

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

## 📚 文档导航

| 文档 | 适合人群 | 说明 |
|------|---------|------|
| [🎓 保姆级部署教程](./SERVER_DEPLOY_GUIDE.md) | **新手必看** | 从登录服务器到网站上线，每一步都详细说明 |
| [⚡ 命令速查卡](./DEPLOY_COMMANDS.md) | 快速查阅 | 所有常用命令，复制粘贴即用 |
| [📖 Node.js 部署](./DEPLOY_NODEJS.md) | 详细了解 | 完整的 Node.js 部署方案和说明 |

---

## 🎯 项目文件说明

- `server.js` - Node.js 静态服务器
- `quick-deploy.sh` - 一键部署脚本
- `SERVER_DEPLOY_GUIDE.md` - ⭐ 保姆级教程（推荐新手）
- `DEPLOY_COMMANDS.md` - 命令速查卡
- `DEPLOY_NODEJS.md` - 完整部署文档
- `package.json` - 项目配置和命令

---

**就这么简单！** 🎉

