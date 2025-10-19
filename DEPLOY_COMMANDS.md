# 🚀 部署命令速查卡

快速参考，复制粘贴即可使用。

---

## 🔐 第一次部署（完整流程）

```bash
# 1. 登录服务器
ssh root@your-server-ip

# 2. 更新系统
sudo apt update && sudo apt upgrade -y

# 3. 安装 Node.js
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt install -y nodejs git

# 4. 验证安装
node --version && npm --version

# 5. 创建并进入项目目录
cd /var/www && sudo mkdir -p ctok && cd ctok

# 6. 克隆代码（或手动上传）
sudo git clone https://github.com/your-repo/kaer.git .

# 7. 安装依赖
npm install

# 8. 构建项目
npm run build

# 9. 安装 PM2
sudo npm install -g pm2

# 10. 启动服务
sudo pm2 start server.js --name ctok

# 11. 设置开机自启
sudo pm2 startup && sudo pm2 save

# 12. 配置防火墙
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw enable

# 13. 查看状态
pm2 status && pm2 logs ctok

# 完成！访问 http://your-server-ip
```

---

## 🔄 更新网站

```bash
# 1. 进入项目目录
cd /var/www/ctok

# 2. 拉取最新代码
sudo git pull

# 3. 重新构建
npm run build

# 4. 重启服务
pm2 restart ctok

# 5. 查看日志
pm2 logs ctok
```

---

## 📊 常用命令

### PM2 管理

```bash
# 查看状态
pm2 status

# 查看日志（实时）
pm2 logs ctok

# 查看日志（最近100行）
pm2 logs ctok --lines 100

# 重启
pm2 restart ctok

# 停止
pm2 stop ctok

# 删除
pm2 delete ctok

# 监控面板
pm2 monit

# 查看详细信息
pm2 show ctok
```

### 文件操作

```bash
# 查看当前位置
pwd

# 进入目录
cd /var/www/ctok

# 列出文件
ls -la

# 查看文件内容
cat filename

# 编辑文件
nano filename
```

### 系统信息

```bash
# 查看磁盘空间
df -h

# 查看内存
free -h

# 查看CPU和进程
top

# 查看端口占用
sudo lsof -i :80

# 查看系统版本
cat /etc/os-release
```

---

## 🆘 故障排查

### 服务无法启动

```bash
# 查看详细日志
pm2 logs ctok --err

# 检查端口占用
sudo lsof -i :80

# 杀死占用进程
sudo kill -9 <PID>

# 重新启动
pm2 restart ctok
```

### 权限问题

```bash
# 修改项目权限
sudo chown -R $(whoami):$(whoami) /var/www/ctok

# 修改文件权限
sudo chmod -R 755 /var/www/ctok
```

### 构建失败

```bash
# 清理并重新安装
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 查看错误日志

```bash
# PM2 错误日志
pm2 logs ctok --err

# 系统日志（Ubuntu）
sudo tail -f /var/log/syslog

# 系统日志（CentOS）
sudo tail -f /var/log/messages
```

---

## 🔒 安全相关

### 修改 SSH 端口（可选）

```bash
# 编辑 SSH 配置
sudo nano /etc/ssh/sshd_config

# 找到并修改：
# Port 22
# 改为：
# Port 2222

# 重启 SSH
sudo systemctl restart sshd

# 记得在防火墙开放新端口
sudo ufw allow 2222/tcp
```

### 禁用 root 登录（推荐）

```bash
# 先创建普通用户
sudo adduser yourname
sudo usermod -aG sudo yourname

# 编辑 SSH 配置
sudo nano /etc/ssh/sshd_config

# 修改：
# PermitRootLogin yes
# 改为：
# PermitRootLogin no

# 重启 SSH
sudo systemctl restart sshd
```

---

## 📦 备份和恢复

### 备份网站

```bash
# 备份整个项目
sudo tar -czf /backup/ctok-$(date +%Y%m%d).tar.gz /var/www/ctok

# 备份数据库（如果有）
# mysqldump -u root -p database_name > backup.sql
```

### 恢复网站

```bash
# 解压备份
sudo tar -xzf /backup/ctok-20250101.tar.gz -C /var/www/

# 重启服务
pm2 restart ctok
```

---

## 🌐 域名配置（可选）

如果您有域名，需要：

### 1. DNS 配置

在域名服务商后台添加 A 记录：
```
类型: A
主机: @
值: 你的服务器IP
TTL: 600
```

### 2. 等待 DNS 生效

```bash
# 测试域名解析
ping your-domain.com

# 或使用 nslookup
nslookup your-domain.com
```

---

## 📈 性能优化

### 查看资源使用

```bash
# 实时监控
htop

# 查看进程
ps aux | grep node

# 查看网络连接
netstat -tulpn | grep :80
```

### PM2 集群模式（可选）

```bash
# 停止当前服务
pm2 stop ctok
pm2 delete ctok

# 以集群模式启动（使用所有CPU核心）
sudo pm2 start server.js --name ctok -i max

# 保存配置
sudo pm2 save
```

---

## 💡 实用技巧

### 快速清理日志

```bash
# 清理 PM2 日志
pm2 flush

# 查看日志文件位置
pm2 show ctok | grep "log path"
```

### 设置日志自动轮转

```bash
# 安装 PM2 日志轮转模块
pm2 install pm2-logrotate

# 配置（可选）
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### 环境变量设置

```bash
# 临时设置
PORT=3000 pm2 start server.js --name ctok

# 永久设置（编辑配置文件）
nano ~/.bashrc
# 添加：export PORT=3000
source ~/.bashrc
```

---

## 📝 检查清单

部署前检查：
- [ ] SSH 可以登录
- [ ] 服务器有足够空间（至少 5GB）
- [ ] 服务器有足够内存（至少 1GB）
- [ ] 80 端口未被占用

部署后检查：
- [ ] `pm2 status` 显示 online
- [ ] `curl http://localhost` 返回 200
- [ ] 浏览器能访问网站
- [ ] 所有页面正常加载
- [ ] 图片正常显示
- [ ] 开机自启动已配置

---

## 🔗 相关文档

- [完整部署教程](./SERVER_DEPLOY_GUIDE.md)
- [Node.js 部署文档](./DEPLOY_NODEJS.md)
- [快速部署说明](./README_DEPLOY.md)

---

**提示：** 将常用命令保存到本地，方便随时查看！

