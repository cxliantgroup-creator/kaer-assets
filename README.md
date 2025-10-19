# Ctok Claude Code拼车社群

这是使用 VitePress 构建的 Ctok Claude Code 拼车社群网站。

## 项目简介

本网站提供 Claude Code 相关的教程、技巧和拼车服务信息。包括：

- 📚 详细的安装和配置教程
- 💡 实用的使用技巧和最佳实践
- 🚗 拼车服务信息
- 🌐 中英双语支持

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

开发服务器将在 http://localhost:5173 启动。

### 3. 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `.vitepress/dist` 目录。

### 4. 预览生产版本

```bash
npm run preview
```

## 项目结构

```
kaer/
├── .vitepress/           # VitePress 配置目录
│   ├── config.js        # 网站配置文件
│   └── theme/           # 自定义主题
│       ├── index.js     # 主题入口
│       └── custom.css   # 自定义样式
├── public/              # 静态资源
│   └── images/          # 图片文件
├── index.md             # 首页
├── claude-code-group.md # 拼车社群页面
├── claude-code-setup-ctok.md  # 安装指南
├── claude-code-best-practices.md  # 最佳实践
├── claude-code-34-tips.md  # 34条技巧
└── README.md            # 项目说明
```

## 添加新页面

1. 在项目根目录创建新的 Markdown 文件
2. 编写内容
3. 在 `.vitepress/config.js` 的 `sidebar` 中添加链接（可选）

示例：

```markdown
# 页面标题

页面内容...
```

## 添加图片

1. 将图片放到 `public/images/` 目录
2. 在 Markdown 中引用：

```markdown
![图片描述](/images/your-image.png)
```

## 自定义样式

编辑 `.vitepress/theme/custom.css` 文件来自定义网站样式。

## 配置说明

主要配置文件：`.vitepress/config.js`

- `title`: 网站标题
- `description`: 网站描述
- `themeConfig.nav`: 导航栏配置
- `themeConfig.sidebar`: 侧边栏配置
- `locales`: 多语言配置

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态站点生成器
- [Vue 3](https://vuejs.org/) - 前端框架
- [Vite](https://vitejs.dev/) - 构建工具

## 部署

### 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 Vercel 中导入项目
3. 构建命令：`npm run build`
4. 输出目录：`.vitepress/dist`

### 部署到 Netlify

1. 将项目推送到 GitHub
2. 在 Netlify 中导入项目
3. 构建命令：`npm run build`
4. 发布目录：`.vitepress/dist`

### 部署到 GitHub Pages

1. 在 `.vitepress/config.js` 中设置 `base` 为您的仓库名
2. 运行 `npm run build`
3. 将 `.vitepress/dist` 目录内容推送到 `gh-pages` 分支

## 开发指南

### 文章编写规范

1. 使用清晰的标题层级
2. 添加合适的代码示例
3. 提供相关链接
4. 使用表情符号增强可读性（适度使用）

### 代码示例格式

\`\`\`语言名称
代码内容
\`\`\`

### 内部链接

使用相对路径：`[链接文本](/page-name)`

## 待添加的图片

请将以下图片添加到 `public/images/` 目录：

1. `ctok-logo.png` - 网站 Logo
2. `claude-code-banner-new2.png` - 首页横幅图片

您可以从原网站下载这些图片，或使用自己的图片替代。

## 许可证

MIT License

## 联系方式

- 官网：https://ctok.ai
- 邮箱：support@ctok.ai

## 贡献

欢迎提交 Issue 和 Pull Request！

---

© 2025 Ctok. All rights reserved.

