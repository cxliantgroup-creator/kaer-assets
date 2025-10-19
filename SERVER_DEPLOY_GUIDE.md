# 🚀 服务器部署保姆级教程

从登录服务器到网站上线的完整操作指南，适合新手。

---

## 📋 准备工作

### 需要准备的信息

- ✅ 服务器 IP 地址：例如 `123.45.67.89`
- ✅ SSH 登录用户名：通常是 `root` 或 `ubuntu`
- ✅ SSH 登录密码或密钥
- ✅ 项目 Git 仓库地址（如果有）

---

## 第一步：登录服务器

### Windows 用户

#### 方式1：使用 PowerShell（推荐）

1. 按 `Win + X`，选择 "Windows PowerShell"

2. 输入登录命令（替换成你的信息）：

```powershell
ssh root@123.45.67.89
```

3. 第一次登录会提示：
```
The authenticity of host '123.45.67.89' can't be established.
Are you sure you want to continue connecting (yes/no)?
```

输入 `yes` 并回车

4. 输入密码（注意：输入时不会显示任何字符，这是正常的）

#### 方式2：使用 PuTTY

1. 下载并安装 PuTTY：https://www.putty.org/
2. 打开 PuTTY
3. 在 "Host Name" 输入服务器 IP：`123.45.67.89`
4. 点击 "Open"
5. 输入用户名和密码

---

### macOS/Linux 用户

1. 打开终端（Terminal）
   - macOS：按 `Command + 空格`，输入 `Terminal`
   - Linux：按 `Ctrl + Alt + T`

2. 输入登录命令：

```bash
ssh root@123.45.67.89
```

3. 按提示输入密码

---

### ✅ 登录成功标志

看到类似这样的提示，说明登录成功：

```
Welcome to Ubuntu 20.04.1 LTS
root@your-server:~#
```

或者

```
[root@your-server ~]#
```

---

## 第二步：检查和更新系统

### 1. 查看当前位置

```bash
pwd
```

输出示例：`/root` 或 `/home/ubuntu`

### 2. 查看系统信息

```bash
# 查看系统版本
cat /etc/os-release

# 查看磁盘空间
df -h

# 查看内存
free -h
```

### 3. 更新系统包

**Ubuntu/Debian：**

```bash
sudo apt update
sudo apt upgrade -y
```

**CentOS/RHEL：**

```bash
sudo yum update -y
```

> 💡 **提示**：这一步可能需要几分钟，等待完成即可

---

## 第三步：安装 Node.js

### 1. 安装 Node.js（Ubuntu/Debian）

```bash
# 下载 Node.js 安装脚本
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -

# 安装 Node.js
sudo apt install -y nodejs

# 验证安装
node --version
npm --version
```

### 2. 安装 Node.js（CentOS）

```bash
# 下载 Node.js 安装脚本
curl -fsSL https://rpm.nodesource.com/setup_lts.x | sudo bash -

# 安装 Node.js
sudo yum install -y nodejs

# 验证安装
node --version
npm --version
```

### ✅ 成功标志

看到类似输出说明安装成功：
```
v20.10.0
10.2.3
```

---

## 第四步：创建项目目录

### 1. 切换到 www 目录

```bash
# 进入 /var 目录
cd /var

# 查看当前目录内容
ls -la

# 如果没有 www 目录，创建它
sudo mkdir -p www

# 进入 www 目录
cd www

# 查看当前路径（确认在 /var/www）
pwd
```

应该显示：`/var/www`

---

## 第五步：获取项目代码

### 方式1：从 Git 仓库克隆（推荐）

```bash
# 先安装 Git（如果还没有）
sudo apt install git -y  # Ubuntu/Debian
# 或
sudo yum install git -y  # CentOS

# 克隆项目（替换成你的仓库地址）
sudo git clone https://github.com/your-username/kaer.git ctok

# 进入项目目录
cd ctok

# 查看项目文件
ls -la
```

### 方式2：手动上传文件

如果没有 Git 仓库，需要先将文件上传到服务器：

**使用 SCP 上传（在本地电脑操作）：**

```bash
# Windows PowerShell 或 macOS/Linux 终端
# 在项目目录下执行
scp -r ./* root@123.45.67.89:/var/www/ctok/
```

**或使用 FTP 工具：**
- 推荐工具：FileZilla、WinSCP
- 上传整个项目文件夹到 `/var/www/ctok/`

**然后在服务器上：**

```bash
# 切换到项目目录
cd /var/www/ctok

# 查看文件是否都在
ls -la
```

---

## 第六步：安装项目依赖

### 1. 确认在项目目录

```bash
# 查看当前路径
pwd
# 应该显示：/var/www/ctok

# 查看是否有 package.json
ls -l package.json
```

### 2. 安装 npm 依赖

```bash
# 安装依赖（这一步可能需要几分钟）
npm install
```

> 💡 **提示**：如果速度很慢，可以使用国内镜像：
> ```bash
> npm install --registry=https://registry.npmmirror.com
> ```

### ✅ 成功标志

看到类似输出：
```
added 123 packages in 45s
```

### 3. 查看安装结果

```bash
# 查看 node_modules 是否创建
ls -la | grep node_modules
```

---

## 第七步：构建项目

### 1. 构建生产版本

```bash
# 运行构建命令
npm run build
```

这一步会：
- 读取所有 Markdown 文件
- 生成静态 HTML 文件
- 优化 CSS 和 JavaScript
- 输出到 `.vitepress/dist` 目录

### 2. 等待构建完成

看到类似输出说明成功：
```
✓ building client + server bundles...
✓ rendering pages...
build complete in 15.32s.
```

### 3. 验证构建结果

```bash
# 查看构建输出目录
ls -la .vitepress/dist/

# 查看输出文件数量
ls -la .vitepress/dist/ | wc -l
```

应该看到很多文件（HTML、CSS、JS、图片等）

---

## 第八步：安装 PM2（进程管理器）

### 1. 全局安装 PM2

```bash
sudo npm install -g pm2
```

### 2. 验证安装

```bash
pm2 --version
```

应该看到版本号，例如：`5.3.0`

---

## 第九步：启动网站服务

### 1. 使用 PM2 启动服务（80端口）

```bash
# 启动服务
sudo pm2 start server.js --name ctok

# 查看服务状态
pm2 status
```

### ✅ 成功标志

看到类似输出：
```
┌─────┬────────┬─────────────┬─────────┬─────────┬──────────┐
│ id  │ name   │ mode        │ ↺       │ status  │ cpu      │
├─────┼────────┼─────────────┼─────────┼─────────┼──────────┤
│ 0   │ ctok   │ fork        │ 0       │ online  │ 0%       │
└─────┴────────┴─────────────┴─────────┴─────────┴──────────┘
```

**重点看 status 列，应该是 `online`**

### 2. 查看服务日志

```bash
# 查看实时日志
pm2 logs ctok

# 按 Ctrl+C 退出日志查看
```

应该看到：
```
🚀 Ctok VitePress Server Started!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 Server running at:
   • Local:   http://localhost:80
   • Network: http://0.0.0.0:80
```

---

## 第十步：配置开机自启动

### 1. 设置 PM2 开机启动

```bash
# 生成开机启动脚本
sudo pm2 startup

# 保存当前运行的应用
sudo pm2 save
```

### 2. 验证配置

```bash
# 查看已保存的应用
pm2 list
```

---

## 第十一步：配置防火墙

### Ubuntu/Debian (使用 UFW)

```bash
# 检查防火墙状态
sudo ufw status

# 如果防火墙未启用，先允许必要端口
sudo ufw allow 22/tcp    # SSH（重要！）
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS（可选）

# 启用防火墙
sudo ufw enable

# 再次检查状态
sudo ufw status
```

### CentOS/RHEL (使用 firewalld)

```bash
# 检查防火墙状态
sudo firewall-cmd --state

# 允许 HTTP 和 HTTPS
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https

# 重载防火墙配置
sudo firewall-cmd --reload

# 查看已开放的端口
sudo firewall-cmd --list-all
```

---

## 第十二步：测试网站

### 1. 在服务器上测试

```bash
# 测试本地访问
curl http://localhost

# 或
curl -I http://localhost
```

应该看到：
```
HTTP/1.1 200 OK
Content-Type: text/html
...
```

### 2. 在浏览器测试

在你的电脑浏览器中访问：

```
http://你的服务器IP
```

例如：`http://123.45.67.89`

### ✅ 成功标志

- 浏览器能打开网站
- 看到你的 VitePress 网站内容
- 可以点击导航菜单
- 图片正常显示

---

## 第十三步：常用维护命令

### PM2 命令

```bash
# 查看所有应用状态
pm2 status

# 查看特定应用日志
pm2 logs ctok

# 重启应用
pm2 restart ctok

# 停止应用
pm2 stop ctok

# 删除应用
pm2 delete ctok

# 查看详细信息
pm2 show ctok

# 监控面板
pm2 monit
```

### 服务器管理命令

```bash
# 查看当前目录
pwd

# 列出文件
ls -la

# 进入目录
cd /var/www/ctok

# 查看磁盘空间
df -h

# 查看内存使用
free -h

# 查看 CPU 使用
top
# 按 q 退出

# 查看端口占用
sudo lsof -i :80

# 查看系统日志
tail -f /var/log/syslog  # Ubuntu
# 或
tail -f /var/log/messages  # CentOS
```

---

## 第十四步：更新网站（重新部署）

### 1. 进入项目目录

```bash
cd /var/www/ctok
```

### 2. 拉取最新代码（如果使用 Git）

```bash
sudo git pull origin main
```

### 3. 重新构建

```bash
npm run build
```

### 4. 重启服务

```bash
pm2 restart ctok
```

### 5. 查看状态

```bash
pm2 logs ctok
```

---

## 🆘 常见问题排查

### 问题1：无法连接到服务器

**检查清单：**
```bash
# 检查服务是否运行
pm2 status

# 检查端口是否监听
sudo lsof -i :80

# 检查防火墙
sudo ufw status  # Ubuntu
sudo firewall-cmd --list-all  # CentOS

# 查看服务日志
pm2 logs ctok
```

### 问题2：网站显示 502/503 错误

```bash
# 重启服务
pm2 restart ctok

# 查看详细日志
pm2 logs ctok --lines 100

# 检查构建文件是否存在
ls -la .vitepress/dist/
```

### 问题3：权限问题

```bash
# 修改项目文件权限
sudo chown -R $USER:$USER /var/www/ctok

# 或给当前用户权限
sudo chown -R $(whoami):$(whoami) /var/www/ctok
```

### 问题4：端口被占用

```bash
# 查看占用 80 端口的进程
sudo lsof -i :80

# 杀死占用进程（注意替换 PID）
sudo kill -9 <PID>

# 或停止 Apache（如果安装了）
sudo systemctl stop apache2
```

### 问题5：构建失败

```bash
# 清理缓存
rm -rf node_modules package-lock.json
npm install
npm run build

# 或增加内存
export NODE_OPTIONS="--max_old_space_size=4096"
npm run build
```

---

## 📝 完整操作流程速查表

```bash
# === 1. 登录服务器 ===
ssh root@your-server-ip

# === 2. 安装 Node.js ===
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt install -y nodejs

# === 3. 进入项目目录 ===
cd /var/www
sudo mkdir -p ctok
cd ctok

# === 4. 获取代码（选择一种方式）===
# Git方式：
sudo git clone https://github.com/your-repo/kaer.git .
# 或手动上传文件

# === 5. 安装依赖 ===
npm install

# === 6. 构建项目 ===
npm run build

# === 7. 安装 PM2 ===
sudo npm install -g pm2

# === 8. 启动服务 ===
sudo pm2 start server.js --name ctok

# === 9. 设置开机启动 ===
sudo pm2 startup
sudo pm2 save

# === 10. 配置防火墙 ===
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw enable

# === 11. 查看状态 ===
pm2 status
pm2 logs ctok

# === 完成！访问 http://your-server-ip ===
```

---

## 🎯 部署检查清单

部署完成后，逐一检查：

- [ ] 能够 SSH 登录服务器
- [ ] Node.js 安装成功（v18+）
- [ ] 项目代码在 `/var/www/ctok`
- [ ] `npm install` 成功
- [ ] `npm run build` 成功
- [ ] `.vitepress/dist` 目录存在且有文件
- [ ] PM2 安装成功
- [ ] 服务状态为 `online`
- [ ] 端口 80 未被占用
- [ ] 防火墙允许 80 端口
- [ ] 本地 `curl http://localhost` 返回 200
- [ ] 浏览器能访问 `http://服务器IP`
- [ ] 网站页面正常显示
- [ ] 导航菜单可用
- [ ] 图片正常加载
- [ ] PM2 开机自启动已配置

---

## 🎓 新手提示

### 命令行基础

- `Tab` 键：自动补全命令和路径
- `↑` 键：查看上一条命令
- `Ctrl + C`：中断当前命令
- `Ctrl + L` 或 `clear`：清空屏幕
- `pwd`：显示当前目录
- `cd`：切换目录
- `ls`：列出文件
- `cat`：查看文件内容

### Vim 编辑器基础

如果需要编辑文件：
```bash
# 打开文件
vim filename

# 按 i 进入编辑模式
# 编辑内容
# 按 Esc 退出编辑模式
# 输入 :wq 保存并退出
# 或输入 :q! 不保存退出
```

### Nano 编辑器（更简单）

```bash
# 打开文件
nano filename

# 直接编辑
# Ctrl + O 保存
# Ctrl + X 退出
```

---

## 📞 获取帮助

如果遇到问题：

1. **查看日志**：`pm2 logs ctok`
2. **查看状态**：`pm2 status`
3. **重启服务**：`pm2 restart ctok`
4. **检查文档**：[DEPLOY_NODEJS.md](./DEPLOY_NODEJS.md)

---

## 🎉 恭喜！

如果您完成了所有步骤，您的网站现在应该已经成功部署并运行在服务器上了！

**下一步：**
- 配置域名解析
- 配置 HTTPS（使用 Let's Encrypt）
- 设置监控和告警
- 定期备份

祝您使用愉快！ 🚀

