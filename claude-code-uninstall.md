# 如何卸载 Claude Code？

适用于：npm 全局或本地安装的 @anthropic-ai/claude-code 包

---

## 🧭 第一步：检查安装位置

---

## 检查是否在本地项目中安装

```bash
npm ls @anthropic-ai/claude-code
```

检查是否被全局安装

```bash
npm ls -g @anthropic-ai/claude-code
```

## 🧹 第二步：执行卸载操作

---

卸载本地安装的包

```bash
npm uninstall @anthropic-ai/claude-code
```

卸载全局安装的包

```bash
npm uninstall -g @anthropic-ai/claude-code
```

## 📁 第三步：清理残留文件夹

---

查看 node_modules 中是否还有空目录

```bash
ls -la ~/node_modules/@anthropic-ai
```

删除本地残留目录（如存在）

```bash
rm -rf ~/node_modules/@anthropic-ai
```

查看全局模块目录

```bash
npm root -g
```

示例结果：`/opt/homebrew/lib/node_modules`

删除全局残留目录（如存在）

```bash
sudo rm -rf /opt/homebrew/lib/node_modules/@anthropic-ai
```

## 🧼 第四步：清理 npm 缓存（可选）

---

```bash
npm cache clean --force
```

## 🔍 第五步：检查是否还有引用

---

查找用户目录下是否仍有配置引用该包

```bash
grep -r "@anthropic-ai/claude-code" ~
```

查找整个系统是否有残留目录（可选，较慢）

```bash
sudo find / -name "claude-code" 2>/dev/null
```

## ✅ 清理完成后确认

---

- 本地依赖无残留
- 全局依赖无残留
- node_modules/@anthropic-ai 目录已删除
- npm 缓存已清理
- grep 与 find 查无引用

🎉 你的系统现在已经彻底清除了 @anthropic-ai/claude-code

