# Claude Code 在Windows中设置环境变量有几种方法：

## 方法1：PowerShell命令（推荐）

```powershell
$env:ANTHROPIC_BASE_URL = "你的 url"
$env:ANTHROPIC_AUTH_TOKEN = "你的 key"
```

## 方法2：命令提示符（CMD）

```cmd
set ANTHROPIC_BASE_URL=你的url
set ANTHROPIC_AUTH_TOKEN=你的 key
```

## 方法3：永久设置（通过setx命令）

```cmd
setx ANTHROPIC_BASE_URL "你的 url"
setx ANTHROPIC_AUTH_TOKEN "你的 key"
```

## 方法4：图形化界面设置

1. 右键"此电脑" → "属性"
2. 点击"高级系统设置"
3. 点击"环境变量"
4. 在"用户变量"或"系统变量"中点击"新建"
5. 分别添加两个变量

## 验证设置

设置完成后，可以通过以下命令验证：

**PowerShell：**

```powershell
echo $env:ANTHROPIC_BASE_URL
echo $env:ANTHROPIC_AUTH_TOKEN
```

**CMD：**

```cmd
echo %ANTHROPIC_BASE_URL%
echo %ANTHROPIC_AUTH_TOKEN%
```

**注意：**

- 方法1和2只在当前会话有效
- 方法3和4会永久保存
- 使用setx后需要重新打开命令行窗口才能生效
