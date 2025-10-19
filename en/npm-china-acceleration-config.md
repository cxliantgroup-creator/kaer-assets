# NPM China Acceleration Configuration Guide

---

Due to network environment reasons, domestic developers often encounter slow speeds or connection failures when using the official NPM source to download packages. This guide provides complete NPM China acceleration configuration solutions.

## 📋 Table of Contents

1. [Quick Configuration](#quick-configuration)
2. [Recommended Mirror Sources](#recommended-mirror-sources)
3. [Configuration Methods](#configuration-methods)
4. [Multi-Mirror Management](#multi-mirror-management)
5. [Enterprise Intranet Configuration](#enterprise-intranet-configuration)
6. [Common Issues](#common-issues)

## 🚀 Quick Configuration

### Method 1: Taobao Mirror (Recommended)

```bash
# Set Taobao mirror
npm config set registry https://registry.npmmirror.com

# Verify configuration
npm config get registry
```

### Method 2: Using cnpm

```bash
# Install cnpm
npm install -g cnpm --registry=https://registry.npmmirror.com

# Use cnpm instead of npm
cnpm install package-name
```

## 🔗 Recommended Mirror Sources

| Mirror Source | URL | Maintainer | Rating |
|---------------|-----|------------|--------|
| **Taobao Mirror** | `https://registry.npmmirror.com` | Alibaba Cloud | ⭐⭐⭐⭐⭐ |
| Tencent Cloud Mirror | `https://mirrors.cloud.tencent.com/npm/` | Tencent Cloud | ⭐⭐⭐⭐ |
| Huawei Cloud Mirror | `https://mirrors.huaweicloud.com/repository/npm/` | Huawei Cloud | ⭐⭐⭐⭐ |
| NetEase Mirror | `https://mirrors.163.com/npm/` | NetEase | ⭐⭐⭐ |

## ⚙️ Configuration Methods

### Global Configuration

```bash
# View current configuration
npm config list

# Set mirror source
npm config set registry https://registry.npmmirror.com

# Restore official source
npm config set registry https://registry.npmjs.org

# Delete mirror configuration
npm config delete registry
```

### Project-Level Configuration

Create `.npmrc` file in project root:

```ini
# .npmrc
registry=https://registry.npmmirror.com
```

### Temporary Use

```bash
# Temporarily specify mirror source
npm install --registry https://registry.npmmirror.com

# Specify mirror source when installing a single package
npm install package-name --registry https://registry.npmmirror.com
```

## 🔄 Multi-Mirror Management

### Using nrm Tool

```bash
# Install nrm
npm install -g nrm

# View available mirror sources
nrm ls

# Switch to Taobao mirror
nrm use taobao

# Add custom mirror source
nrm add custom https://custom.registry.com

# Test mirror source speed
nrm test
```

### Manual Multi-Mirror Management

```bash
# Save current configuration
npm config get registry > current-registry.txt

# Mirror switching script
#!/bin/bash
# switch-npm-registry.sh

case $1 in
  "taobao")
    npm config set registry https://registry.npmmirror.com
    echo "Switched to Taobao mirror"
    ;;
  "official")
    npm config set registry https://registry.npmjs.org
    echo "Switched to official source"
    ;;
esac
```

## 🏢 Enterprise Intranet Configuration

### Configure Enterprise Private Source

```bash
# Set enterprise private source
npm config set registry https://npm.company.com

# Configure authentication
npm config set //npm.company.com/:_authToken <token>
```

### Mixed Source Configuration

Configure in project `.npmrc`:

```ini
# Use Taobao mirror by default
registry=https://registry.npmmirror.com

# Use enterprise private source for specific packages
@company:registry=https://npm.company.com
```

### Proxy Configuration

```bash
# Set HTTP proxy
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

# Delete proxy configuration
npm config delete proxy
npm config delete https-proxy
```

## 📦 Package Manager Comparison

### NPM vs CNPM vs PNPM vs YARN

| Feature | NPM | CNPM | PNPM | YARN |
|---------|-----|------|------|------|
| Speed | Medium | Fast | Fastest | Fast |
| Disk Usage | High | High | Low | Medium |
| Compatibility | Best | Good | Good | Good |
| Mirror Source | Official | Taobao | Configurable | Configurable |

### PNPM Mirror Configuration

```bash
# Set mirror source
pnpm config set registry https://registry.npmmirror.com

# View configuration
pnpm config get registry
```

### YARN Mirror Configuration

```bash
# Set mirror source
yarn config set registry https://registry.npmmirror.com

# View configuration
yarn config get registry
```

## 🔧 Advanced Configuration

### Cache Management

```bash
# View cache directory
npm config get cache

# Clean cache
npm cache clean --force

# Set cache directory
npm config set cache /path/to/cache
```

### Timeout Settings

```bash
# Set timeout (milliseconds)
npm config set fetch-timeout 60000

# Set retry times
npm config set fetch-retry-mintimeout 20000
npm config set fetch-retry-maxtimeout 120000
```

### SSL Configuration

```bash
# Disable SSL verification (not recommended)
npm config set strict-ssl false

# Configure certificate
npm config set cafile /path/to/ca-certificate.crt
```

## ❓ Common Issues

### 1. Still Slow After Setting Mirror Source

**Cause Analysis:**
- Mirror source issues
- Network environment limitations
- Package size too large

**Solutions:**

```bash
# Test different mirror source speeds
nrm test

# Switch to the fastest mirror source
nrm use fastest

# Increase timeout
npm config set fetch-timeout 120000
```

### 2. Unable to Download Some Packages

**Cause Analysis:**
- Mirror source synchronization delay
- Package doesn't exist in mirror source

**Solutions:**

```bash
# Temporarily use official source
npm install package-name --registry https://registry.npmjs.org

# Or configure mixed source
echo "@scope:registry=https://registry.npmjs.org" >> .npmrc
```

### 3. Enterprise Network Configuration Issues

**Cause Analysis:**
- Firewall restrictions
- Proxy configuration required

**Solutions:**

```bash
# Configure proxy
npm config set proxy http://proxy.company.com:8080

# If proxy requires authentication
npm config set proxy http://username:password@proxy.company.com:8080
```

### 4. Permission Issues

**Cause Analysis:**
- Insufficient permissions for global package installation
- npm directory permission issues

**Solutions:**

```bash
# macOS/Linux: Modify npm global directory permissions
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}

# Or use nvm to manage Node.js versions
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

## 📋 Configuration Checklist

- [ ] Set appropriate mirror source
- [ ] Configured project-level `.npmrc` file
- [ ] Installed mirror source management tool (nrm)
- [ ] Configured enterprise intranet proxy (if needed)
- [ ] Tested package installation speed
- [ ] Backed up configuration files

## 🚀 Recommended Workflow

1. **During project initialization:** Create `.npmrc` file to set mirror source
2. **During team collaboration:** Unify mirror source configuration to avoid dependency version inconsistencies
3. **In CI/CD environment:** Use stable mirror source, set reasonable timeout
4. **During development debugging:** Use nrm to quickly switch mirror sources for comparison testing

## 🔗 Related Resources

- [NPM Official Documentation](https://docs.npmjs.com/)
- [Taobao NPM Mirror](https://npmmirror.com/)
- [NRM Tool](https://github.com/Pana/nrm)
- [Enterprise NPM Management](https://docs.npmjs.com/cli/v8/using-npm/registry)

---

By properly configuring NPM mirror sources, you can significantly improve package management efficiency in domestic development environments. It's recommended to choose the most suitable mirror source based on your actual network environment and back up your configurations.

