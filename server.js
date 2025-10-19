/**
 * Ctok VitePress 简易静态服务器
 * 支持 80 端口快速部署
 */

import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 80;
const DIST_DIR = join(__dirname, '.vitepress/dist');

// MIME 类型映射
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

const server = createServer(async (req, res) => {
  try {
    // 处理 URL
    let filePath = req.url === '/' ? '/index.html' : req.url;
    
    // 移除查询参数
    filePath = filePath.split('?')[0];
    
    // 安全检查：防止目录遍历
    if (filePath.includes('..')) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }
    
    // 完整文件路径
    const fullPath = join(DIST_DIR, filePath);
    
    // 获取文件扩展名
    const ext = extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    try {
      // 读取文件
      const content = await readFile(fullPath);
      
      // 设置缓存头（根据文件类型）
      const headers = {
        'Content-Type': contentType,
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1; mode=block'
      };
      
      // 静态资源添加长期缓存
      if (['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.ttf'].includes(ext)) {
        headers['Cache-Control'] = 'public, max-age=31536000, immutable';
      } else {
        headers['Cache-Control'] = 'no-cache';
      }
      
      res.writeHead(200, headers);
      res.end(content);
      
      // 日志输出
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - 200`);
      
    } catch (err) {
      // 文件不存在，尝试返回 index.html（SPA 路由支持）
      if (err.code === 'ENOENT') {
        try {
          const indexPath = join(DIST_DIR, 'index.html');
          const indexContent = await readFile(indexPath);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(indexContent);
          console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - 200 (fallback to index.html)`);
        } catch {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - 404`);
        }
      } else {
        throw err;
      }
    }
    
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Error:`, error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('\n🚀 Ctok VitePress Server Started!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📡 Server running at:`);
  console.log(`   • Local:   http://localhost:${PORT}`);
  console.log(`   • Network: http://0.0.0.0:${PORT}`);
  console.log(`📁 Serving:  ${DIST_DIR}`);
  console.log(`⏰ Started:  ${new Date().toLocaleString()}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  console.log('💡 Press Ctrl+C to stop the server\n');
});

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n\n🛑 Shutting down server...');
  server.close(() => {
    console.log('✅ Server closed successfully');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n\n🛑 Received SIGTERM, shutting down...');
  server.close(() => {
    console.log('✅ Server closed successfully');
    process.exit(0);
  });
});

