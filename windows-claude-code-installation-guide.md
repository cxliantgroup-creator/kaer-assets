# Windows 安装 Claude Code 的新姿势，保姆级教程

**原文链接：** [https://mp.weixin.qq.com/s/VUFLFQjlr6W7gEJaxfdTzA](https://mp.weixin.qq.com/s/VUFLFQjlr6W7gEJaxfdTzA)

原创 沉浸式趣谈 沉浸式趣谈 2025-08-01 16:00

大家好,我是 Immerse,一名独立开发者、内容创作者、AGI实践者。

- 关注公众号：[#沉浸式趣谈](https://ctok.ai/)，获取最新文章(更多内容只在公众号更新)
- 个人网站：[https://yaolifeng.com](https://yaolifeng.com) 也同步更新。
- 转载请在文章开头注明出处和版权信息。

我会在这里分享关于编程、独立开发、AI、出海、个人思考等内容。

如果本文对你有帮助,欢迎动动小手指一键三连(点赞、评论、转发),给我一些支持和鼓励,谢谢!

上篇文章[Windows 上安装使用 Claude Code 指南](https://mp.weixin.qq.com/s?__biz=MzkyOTI2MzE0MQ==&mid=2247488185&idx=1&sn=957a0ac990635539afe2ef420c0b759a&scene=21#wechat_redirect)聊到 Windows 安装 Claude Code 方式,必须安装 wsl,过程中会出现一个不可控的因素,劝退了很多人。

这几天发现了一种新方式,可以不用安装 wsl, 便捷快速使用。

> 可以不用安装 WSL 客户端, 直接在 Windows 里面的 Shell 操作就好

## 1. 安装 Node.js

访问 Node 官网[1] , 选择正确的芯片结构,直接下载

![安装 Node.js](https://ctok.ai/images/41b212542cc50911158a8ab840b0460e.png)

## 2. 安装 Claude Code 包

```bash
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
```

## 3. 设置系统环境变量

### 3.1 按 Win + R ,输入 sysdm.cpl ,点 确定

![3.1](https://ctok.ai/images/5ba5af3fffc9834ea885b91342b53ea7.png)

### 3.2 选择的 高级 菜单,点击下面的 环境变量

![3.2](https://ctok.ai/images/f0313b921217beb19a7f501cb0e15fd7.png)

### 3.3 选择 系统变量 类型的 新建

![3.3](https://ctok.ai/images/c8338e96104f21d68a0357e720232038.png)

### 3.4 创建两个环境变量: ANTHROPIC_AUTH_TOKEN 和 ANTHROPIC_BASE_URL

![3.4](https://ctok.ai/images/a9ca19e9817a5b27a65ef081cf4cf431.png)

### 3.5 确认创建好环境变量,关闭相关对话框

## 4. 电脑打开 CMD 或 Power Shell ,输入 claude 即可开始

```bash
claude
```

![Claude Code](https://ctok.ai/images/036d0d3aadf9da0583adf8072146d37e.png)

