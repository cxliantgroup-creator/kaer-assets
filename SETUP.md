# 网站设置指南

## 已完成的工作

✅ VitePress 项目已初始化
✅ 基础配置已完成
✅ 首页已创建并还原自原网站
✅ 多个示例页面已创建
✅ 自定义主题和样式已配置
✅ 中英双语支持已设置
✅ 依赖已安装

## 当前项目结构

```
kaer/
├── .vitepress/
│   ├── config.js           # 网站配置（已配置完成）
│   └── theme/
│       ├── index.js        # 主题配置
│       └── custom.css      # 自定义样式
├── public/
│   └── images/             # 图片资源目录
│       └── README.md       # 图片说明
├── en/                     # 英文页面
│   ├── index.md
│   └── claude-code-group.md
├── index.md                # 中文首页（主页）
├── claude-code-group.md    # 拼车社群页面
├── claude-code-setup-ctok.md  # 安装指南
├── claude-code-best-practices.md  # 最佳实践
├── claude-code-34-tips.md  # 34条技巧
├── claude-code-carpool-guide.md  # 拼车指南
├── claude-code-windows-env-setup.md  # Windows环境设置
├── claude-code-complete-guide.md  # 完整指南
├── ai-resources.md         # AI资源页面
├── package.json            # 项目配置
├── README.md               # 项目说明
└── SETUP.md                # 本文件
```

## 立即开始

### 1. 启动开发服务器

```bash
cd /Users/lichenxi/Documents/workspace/kaer
npm run dev
```

开发服务器将在 http://localhost:5173 启动

### 2. 添加图片资源

需要添加以下图片到 `public/images/` 目录：

1. **ctok-logo.png** - 网站 Logo
2. **claude-code-banner-new2.png** - 首页横幅图片

您可以：
- 从原网站 https://ctok.ai 下载
- 或使用自己的图片替代

### 3. 查看网站

打开浏览器访问：http://localhost:5173

已实现的页面：
- ✅ 首页: http://localhost:5173/
- ✅ 拼车社群: http://localhost:5173/claude-code-group
- ✅ 安装指南: http://localhost:5173/claude-code-setup-ctok
- ✅ 最佳实践: http://localhost:5173/claude-code-best-practices
- ✅ 34条技巧: http://localhost:5173/claude-code-34-tips
- ✅ English: http://localhost:5173/en/

## 首页内容对比

### 原网站内容已还原：

✅ Hero 区域
- 标题: "Ctok Claude Code 拼车社群"
- 副标题: "拼车服务、教程文章、实用技巧"
- 行动按钮: "阅读全部" 和 "拼车社群"
- 横幅图片

✅ Features 区域（4个特色卡片）
- Claude Code 安装
- 最佳实践
- 实用技巧
- 拼车最佳实践

✅ 内容区域
- 欢迎信息
- 🚀 快速开始（安装步骤、系统支持）
- 📚 精选文章（最佳实践指南、高级使用技巧）
- 🚗 拼车服务（服务特色、价格优势）
- 📞 拼车社群（联系方式、社群服务）

✅ 导航栏
- Logo
- 首页、拼车社群链接
- 搜索功能
- 语言切换（中/英）
- 主题切换（深色/浅色）

## 下一步建议

### 必须完成：

1. **添加图片资源**
   - 获取 Logo 和横幅图片
   - 放入 `public/images/` 目录

### 可选完成：

2. **创建更多页面**
   - 根据原网站的其他页面继续添加
   - 参考 `.vitepress/config.js` 中的 sidebar 配置

3. **自定义样式**
   - 调整 `.vitepress/theme/custom.css`
   - 匹配原网站的颜色和字体

4. **添加功能**
   - Google Analytics（已在配置中）
   - 其他第三方集成

## 构建和部署

### 构建生产版本

```bash
npm run build
```

输出目录：`.vitepress/dist`

### 预览生产版本

```bash
npm run preview
```

### 部署选项

1. **Vercel** （推荐）
   - 构建命令: `npm run build`
   - 输出目录: `.vitepress/dist`

2. **Netlify**
   - 构建命令: `npm run build`
   - 发布目录: `.vitepress/dist`

3. **GitHub Pages**
   - 使用 GitHub Actions 自动部署
   - 需要配置 `base` 路径

## 修改和扩展

### 添加新页面

1. 在项目根目录创建 `.md` 文件
2. 编写 Markdown 内容
3. （可选）在 `.vitepress/config.js` 添加到 sidebar

### 修改配置

编辑 `.vitepress/config.js` 来修改：
- 网站标题和描述
- 导航栏
- 侧边栏
- SEO 设置
- 其他配置

### 修改样式

编辑 `.vitepress/theme/custom.css` 来自定义：
- 颜色主题
- 字体
- 布局
- 动画效果

## 常见问题

### Q: 开发服务器无法启动？

A: 检查：
- Node.js 版本（需要 16+）
- 是否运行了 `npm install`
- 端口 5173 是否被占用

### Q: 图片不显示？

A: 确保：
- 图片在 `public/images/` 目录
- 路径以 `/images/` 开头
- 文件名正确（区分大小写）

### Q: 如何修改颜色？

A: 编辑 `.vitepress/theme/custom.css` 中的 CSS 变量：
```css
:root {
  --vp-c-brand-1: #646cff;  /* 主色调 */
  --vp-c-brand-2: #747bff;  /* 次色调 */
}
```

## 需要帮助？

- 📖 VitePress 文档: https://vitepress.dev/
- 💬 项目 README: ./README.md
- 📧 Email: support@ctok.ai

---

祝您使用顺利！🎉

