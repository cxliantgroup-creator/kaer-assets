# 静态资源目录

请将以下图片文件放到此目录：

## 必需的图片文件

### 首页所需图片
1. **ctok-logo.png** - Ctok Logo 图片
2. **claude-code-banner-new2.png** - 首页横幅图片

### 拼车社群页面所需图片
3. **claude-code-group-15.jpg** - Ctok Claude Code 拼车15群二维码
4. **codex-group-4.jpg** - Ctok Codex 拼车4群二维码
5. **qrcode-cc-small.png** - 微信一客服二维码（支持 avif 和 webp 格式优化）
6. **wechat-qrcode-2.jpg** - 微信二客服二维码

### 拼车最佳实践页面所需图片
7. **ctok-claude-code-groups.png** - Ctok Claude Code 已发车群组截图

## 获取图片

您可以从原网站 https://ctok.ai 下载这些图片，或者：

- 使用您自己的 logo 和横幅图片
- 创建临时占位图片用于开发测试

## 图片规格建议

- **Logo**: 建议尺寸 200x200px，PNG 格式，透明背景
- **横幅图片**: 建议尺寸 1200x600px，PNG 或 JPG 格式
- **二维码图片**: 建议尺寸 300x300px 或更大，JPG/PNG 格式，保持清晰度

## 图片优化

对于微信二维码等重要图片，建议提供多种格式以优化加载：

```
qrcode-cc-small.avif   # 最新格式，体积最小
qrcode-cc-small.webp   # WebP 格式，兼容性好
qrcode-cc-small.png    # PNG 格式，通用兼容
```

VitePress 会自动选择浏览器支持的最佳格式。

