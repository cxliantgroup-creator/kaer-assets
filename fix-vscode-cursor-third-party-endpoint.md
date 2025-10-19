# 解决 Cursor 和 VSCode 无法使用第三方连接点的问题

![Cursor 和 VSCode 第三方连接点登录问题](https://ctok.ai/images/vscode-cursor-need-login-problem.png)

0. [Claude Code Install](/claude-code-setup-ctok) - Claude Code CLI 安装和环境变量配置完整指南
1. 创建 ~/.claude/config.json 如果已经存在，直接编辑。
2. 添加下面内容：(XXX可以不变，也可以改成你服务的名字或者你的key)

```json
{ 
    "primaryApiKey":"xxx"
}
```

3. 重启 VSCode 和 Cursor 即可

## 以下为测试方案，如上一步已经成功可跳过。

### 使用 Claude Code CLI（推荐）

Claude Code CLI 是最灵活的方案，完全支持自定义 API 端点。

#### 第一步：安装 Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
claude --version
```

#### 第二步：配置环境变量

**macOS / Linux：**

编辑 `~/.zshrc` 或 `~/.bashrc`：

```bash
# 添加以下配置
export ANTHROPIC_AUTH_TOKEN="你的认证令牌"
export ANTHROPIC_BASE_URL="第三方连接点URL"
```

刷新配置：

```bash
source ~/.zshrc  # 或 source ~/.bashrc
```

**Windows：**

使用 PowerShell（管理员权限）：

```powershell
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', '你的认证令牌', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', '第三方连接点URL', 'User')
```

:::tip 环境变量说明
- `ANTHROPIC_AUTH_TOKEN`：你的 API 认证令牌（格式：`cr_...`）
- `ANTHROPIC_BASE_URL`：第三方连接点的完整 URL
:::

#### 第三步：验证配置

```bash
cd ~/your-project
claude 你好
```

如果配置正确，Claude 应该能够正常响应。

### 日志和调试

启用详细日志以便排查问题：

```bash
# 启用 Claude Code CLI 详细日志
export DEBUG=claude:*
claude 你好

# 或使用 --verbose 标志
claude --verbose 你好
```

## 相关资源

- [Claude Code Install](/claude-code-setup-ctok) - CLI 安装完整指南
- [Cursor 集成 Claude Code](/cursor-claude-code-integration) - Cursor 使用教程
- [Opcode 使用指南](/opcode-guide) - 桌面客户端使用
- [Claude Code 完整使用指南](/claude-code-complete-guide) - 全面功能介绍
- [Windows 环境变量设置](/claude-code-windows-env-setup) - Windows 配置详解

## 总结

解决 VSCode 和 Cursor 无法使用第三方连接点的问题，关键在于：

1. ✅ **优先使用 Claude Code CLI**，它提供最完整的自定义端点支持
2. ✅ **正确配置环境变量**，包括 `ANTHROPIC_AUTH_TOKEN` 和 `ANTHROPIC_BASE_URL`

如果你在配置过程中遇到问题，欢迎查看我们的其他教程或联系技术支持。

---

**需要帮助？** 加入 [Claude Code 拼车社群](/claude-code-group)，获取专业技术支持！

