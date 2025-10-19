# 🚀 Node.js 快速部署指南（80端口）

最简单的部署方式，3步完成！

---

## ⚡ 超快速部署（推荐）

### 方式一：一键部署（最简单）

```bash
# 1. 安装依赖并构建
npm install && npm run build

# 2. 启动服务器（80端口需要sudo）
sudo npm run start:80
```

**完成！** 访问 `http://your-server-ip` 查看网站

---

### 方式二：分步部署

```bash
# 1. 安装依赖
npm install

# 2. 构建项目
npm run build

# 3. 启动服务器（80端口）
sudo node server.js
```

---

## 🔧 使用 PM2 管理（推荐生产环境）

### 安装 PM2

```bash
sudo npm install -g pm2
```

### 启动服务

```bash
# 构建项目
npm run build

# 使用 PM2 启动（80端口）
sudo pm2 start server.js --name ctok

# 设置开机自启
sudo pm2 startup
sudo pm2 save

# 查看状态
pm2 status
pm2 logs ctok
```

### PM2 常用命令

```bash
# 查看状态
pm2 status

# 查看日志
pm2 logs ctok

# 重启服务
pm2 restart ctok

# 停止服务
pm2 stop ctok

# 删除服务
pm2 delete ctok

# 监控
pm2 monit
```

---

## 🎯 使用其他端口

如果不想用 80 端口，可以用其他端口（不需要 sudo）：

```bash
# 使用 3000 端口
PORT=3000 node server.js

# 或修改 package.json 添加脚本
"start:3000": "PORT=3000 node server.js"
```

---

## 📋 完整部署流程

### 1. 准备服务器

```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装 Node.js (v18+)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt install -y nodejs

# 验证安装
node --version
npm --version
```

### 2. 部署项目

```bash
# 克隆项目
cd /var/www
sudo git clone <your-repo> ctok
cd ctok

# 安装依赖
npm install

# 构建项目
npm run build

# 安装 PM2
sudo npm install -g pm2

# 启动服务（80端口）
sudo pm2 start server.js --name ctok

# 设置开机自启
sudo pm2 startup
sudo pm2 save
```

### 3. 验证部署

```bash
# 检查服务状态
pm2 status

# 测试访问
curl -I http://localhost

# 查看日志
pm2 logs ctok
```

---

## 🔄 更新部署

```bash
cd /var/www/ctok

# 拉取最新代码
git pull

# 重新构建
npm run build

# 重启服务
pm2 restart ctok
```

---

## 🛑 停止服务

```bash
# 使用 PM2
pm2 stop ctok

# 直接运行的话，按 Ctrl+C
```

---

## 📊 查看日志

```bash
# PM2 日志
pm2 logs ctok

# 实时日志
pm2 logs ctok --lines 100

# 清空日志
pm2 flush ctok
```

---

## 🔒 安全建议

### 1. 配置防火墙

```bash
# 允许 80 端口
sudo ufw allow 80/tcp
sudo ufw enable
```

### 2. 使用反向代理（可选）

如果需要 HTTPS，建议在前面加 Nginx 反向代理：

```bash
# 安装 Nginx
sudo apt install nginx

# 配置反向代理
sudo nano /etc/nginx/sites-available/ctok
```

Nginx 配置：

```nginx
server {
    listen 80;
    server_name ctok.ai;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

然后让 Node.js 服务运行在 3000 端口：

```bash
PORT=3000 pm2 start server.js --name ctok
```

---

## ❓ 常见问题

### 1. 端口 80 需要 root 权限

**问题：** `Error: listen EACCES: permission denied 0.0.0.0:80`

**解决：**
```bash
# 方案1：使用 sudo
sudo node server.js

# 方案2：使用其他端口
PORT=3000 node server.js

# 方案3：给 Node.js 授权（不推荐）
sudo setcap 'cap_net_bind_service=+ep' $(which node)
```

### 2. PM2 启动失败

**解决：**
```bash
# 检查构建是否成功
ls -la .vitepress/dist

# 重新构建
npm run build

# 查看详细错误
pm2 logs ctok --err
```

### 3. 端口已被占用

**解决：**
```bash
# 查看占用进程
sudo lsof -i :80

# 杀死进程
sudo kill -9 <PID>
```

### 4. 无法访问

**检查：**
```bash
# 1. 检查服务是否运行
pm2 status

# 2. 检查防火墙
sudo ufw status

# 3. 测试本地访问
curl http://localhost

# 4. 查看日志
pm2 logs ctok
```

---

## 🎁 一键部署脚本

创建 `quick-deploy.sh`：

```bash
#!/bin/bash

echo "🚀 开始部署 Ctok VitePress..."

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查 PM2
if ! command -v pm2 &> /dev/null; then
    echo "📥 安装 PM2..."
    sudo npm install -g pm2
fi

# 停止旧服务（如果存在）
pm2 stop ctok 2>/dev/null || true
pm2 delete ctok 2>/dev/null || true

# 启动新服务
echo "🚀 启动服务..."
sudo pm2 start server.js --name ctok

# 设置开机自启
sudo pm2 startup
sudo pm2 save

echo "✅ 部署完成！"
echo ""
echo "📊 服务状态："
pm2 status
echo ""
echo "🌐 访问地址：http://your-server-ip"
echo "📝 查看日志：pm2 logs ctok"
```

使用：

```bash
chmod +x quick-deploy.sh
./quick-deploy.sh
```

---

## 📈 性能优化

### 1. 启用集群模式

```bash
# 使用所有 CPU 核心
pm2 start server.js --name ctok -i max

# 指定进程数
pm2 start server.js --name ctok -i 4
```

### 2. 内存限制

```bash
pm2 start server.js --name ctok --max-memory-restart 500M
```

### 3. 自动重启

```bash
pm2 start server.js --name ctok --watch
```

---

## 🎯 对比其他方案

### Node.js 直接部署 vs Nginx

| 特性 | Node.js | Nginx |
|------|---------|-------|
| 部署速度 | ⭐⭐⭐⭐⭐ 最快 | ⭐⭐⭐ 较快 |
| 配置难度 | ⭐⭐⭐⭐⭐ 最简单 | ⭐⭐⭐ 中等 |
| 性能 | ⭐⭐⭐⭐ 很好 | ⭐⭐⭐⭐⭐ 最好 |
| 资源占用 | ⭐⭐⭐⭐ 较低 | ⭐⭐⭐⭐⭐ 最低 |
| 适用场景 | 小中型网站 | 大型生产环境 |

**推荐：**
- 🚀 快速测试/小型项目：Node.js 直接部署
- 🏢 生产环境/大流量：Nginx 静态部署

---

## ✅ 部署检查清单

- [ ] Node.js 已安装（v18+）
- [ ] 项目依赖已安装
- [ ] 项目构建成功
- [ ] 服务启动成功
- [ ] 80 端口可访问
- [ ] PM2 已配置开机自启
- [ ] 防火墙已配置
- [ ] 日志正常记录

---

## 🎉 总结

使用 Node.js 部署的优势：

✅ **超级简单** - 3个命令完成部署  
✅ **无需 Nginx** - 减少配置复杂度  
✅ **快速启动** - 几秒钟即可运行  
✅ **易于调试** - 直接查看 Node.js 日志  
✅ **跨平台** - Windows/Linux/macOS 都可用  

**最简单的部署命令：**

```bash
npm install && npm run build && sudo pm2 start server.js --name ctok
```

就这么简单！ 🚀

---

**需要帮助？**
- 查看日志：`pm2 logs ctok`
- 查看状态：`pm2 status`
- 查看详细文档：[DEPLOYMENT.md](./DEPLOYMENT.md)

