# NPM 中国加速配置指南

---

由于网络环境原因，国内开发者使用 NPM 官方源下载包时经常遇到速度慢或连接失败的问题。本指南提供完整的 NPM 中国加速配置方案。

## 📋 目录导览

1. [快速配置](#快速配置)
2. [推荐镜像源](#推荐镜像源)
3. [配置方法](#配置方法)
4. [多镜像管理](#多镜像管理)
5. [企业内网配置](#企业内网配置)
6. [常见问题](#常见问题)

## 🚀 快速配置

### 方法一：淘宝镜像（推荐）

```bash
# 设置淘宝镜像
npm config set registry https://registry.npmmirror.com

# 验证配置
npm config get registry
```

### 方法二：使用 cnpm

```bash
# 安装 cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com

# 使用 cnpm 替代 npm
cnpm install package-name
```

## 🔗 推荐镜像源

| 镜像源 | 地址 | 维护方 | 推荐度 |
|--------|------|--------|--------|
| **淘宝镜像** | `https://registry.npmmirror.com` | 阿里云 | ⭐⭐⭐⭐⭐ |
| 腾讯云镜像 | `https://mirrors.cloud.tencent.com/npm/` | 腾讯云 | ⭐⭐⭐⭐ |
| 华为云镜像 | `https://mirrors.huaweicloud.com/repository/npm/` | 华为云 | ⭐⭐⭐⭐ |
| 网易镜像 | `https://mirrors.163.com/npm/` | 网易 | ⭐⭐⭐ |

## ⚙️ 配置方法

### 全局配置

```bash
# 查看当前配置
npm config list

# 设置镜像源
npm config set registry https://registry.npmmirror.com

# 恢复官方源
npm config set registry https://registry.npmjs.org

# 删除镜像配置
npm config delete registry
```

### 项目级配置

在项目根目录创建 `.npmrc` 文件：

```ini
# .npmrc
registry=https://registry.npmmirror.com
```

### 临时使用

```bash
# 临时指定镜像源
npm install --registry https://registry.npmmirror.com

# 安装单个包时指定镜像源
npm install package-name --registry https://registry.npmmirror.com
```

## 🔄 多镜像管理

### 使用 nrm 工具

```bash
# 安装 nrm
npm install -g nrm

# 查看可用镜像源
nrm ls

# 切换到淘宝镜像
nrm use taobao

# 添加自定义镜像源
nrm add custom https://custom.registry.com

# 测试镜像源速度
nrm test
```

### 手动管理多镜像

```bash
# 保存当前配置
npm config get registry > current-registry.txt

# 切换镜像脚本
#!/bin/bash
# switch-npm-registry.sh

case $1 in
  "taobao")
    npm config set registry https://registry.npmmirror.com
    echo "已切换到淘宝镜像"
    ;;
  "official")
    npm config set registry https://registry.npmjs.org
    echo "已切换到官方源"
    ;;
esac
```

## 🏢 企业内网配置

### 配置企业私有源

```bash
# 设置企业私有源
npm config set registry https://npm.company.com

# 配置认证信息
npm config set //npm.company.com/:_authToken <token>
```

### 混合源配置

在项目 `.npmrc` 中配置：

```ini
# 默认使用淘宝镜像
registry=https://registry.npmmirror.com

# 特定包使用企业私有源
@company:registry=https://npm.company.com
```

### 代理配置

```bash
# 设置 HTTP 代理
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

# 删除代理配置
npm config delete proxy
npm config delete https-proxy
```

## 📦 包管理器对比

### NPM vs CNPM vs PNPM vs YARN

| 特性 | NPM | CNPM | PNPM | YARN |
|------|-----|------|------|------|
| 速度 | 中 | 快 | 最快 | 快 |
| 磁盘占用 | 高 | 高 | 低 | 中 |
| 兼容性 | 最好 | 好 | 好 | 好 |
| 镜像源 | 官方 | 淘宝 | 可配置 | 可配置 |

### PNPM 镜像配置

```bash
# 设置镜像源
pnpm config set registry https://registry.npmmirror.com

# 查看配置
pnpm config get registry
```

### YARN 镜像配置

```bash
# 设置镜像源
yarn config set registry https://registry.npmmirror.com

# 查看配置
yarn config get registry
```

## 🔧 高级配置

### 缓存管理

```bash
# 查看缓存目录
npm config get cache

# 清理缓存
npm cache clean --force

# 设置缓存目录
npm config set cache /path/to/cache
```

### 超时设置

```bash
# 设置超时时间（毫秒）
npm config set fetch-timeout 60000

# 设置重试次数
npm config set fetch-retry-mintimeout 20000
npm config set fetch-retry-maxtimeout 120000
```

### SSL 配置

```bash
# 禁用 SSL 验证（不推荐）
npm config set strict-ssl false

# 配置证书
npm config set cafile /path/to/ca-certificate.crt
```

## ❓ 常见问题

### 1. 镜像源设置后仍然很慢

**原因分析：**
- 镜像源本身问题
- 网络环境限制
- 包体积过大

**解决方案：**

```bash
# 测试不同镜像源速度
nrm test

# 切换到最快的镜像源
nrm use fastest

# 增加超时时间
npm config set fetch-timeout 120000
```

### 2. 某些包无法下载

**原因分析：**
- 镜像源同步延迟
- 包不存在于镜像源

**解决方案：**

```bash
# 临时使用官方源
npm install package-name --registry https://registry.npmjs.org

# 或配置混合源
echo "@scope:registry=https://registry.npmjs.org" >> .npmrc
```

### 3. 企业网络下配置问题

**原因分析：**
- 防火墙限制
- 需要代理配置

**解决方案：**

```bash
# 配置代理
npm config set proxy http://proxy.company.com:8080

# 如果代理需要认证
npm config set proxy http://username:password@proxy.company.com:8080
```

### 4. 权限问题

**原因分析：**
- 全局包安装权限不足
- npm 目录权限问题

**解决方案：**

```bash
# macOS/Linux：修改 npm 全局目录权限
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

# 或使用 nvm 管理 Node.js 版本
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

## 📋 配置检查清单

- [ ] 设置了合适的镜像源
- [ ] 配置了项目级 `.npmrc` 文件
- [ ] 安装了镜像源管理工具（nrm）
- [ ] 配置了企业内网代理（如需要）
- [ ] 测试了包安装速度
- [ ] 备份了配置文件

## 🚀 推荐工作流

1. **项目初始化时：** 创建 `.npmrc` 文件设置镜像源
2. **团队协作时：** 统一镜像源配置，避免依赖版本不一致
3. **CI/CD 环境：** 使用稳定的镜像源，设置合理的超时时间
4. **开发调试时：** 使用 nrm 快速切换镜像源进行对比测试

## 🔗 相关资源

- [NPM 官方文档](https://docs.npmjs.com/)
- [淘宝 NPM 镜像](https://npmmirror.com/)
- [NRM 工具](https://github.com/Pana/nrm)
- [企业级 NPM 管理](https://docs.npmjs.com/cli/v8/using-npm/registry)

---

通过合理配置 NPM 镜像源，可以显著提升国内开发环境下的包管理效率。建议根据实际网络环境选择最适合的镜像源，并做好配置备份。

