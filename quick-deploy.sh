#!/bin/bash

# ====================================
# Ctok VitePress 快速部署脚本
# 使用 Node.js + PM2
# ====================================

# 颜色输出
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

clear
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║  🚀 Ctok VitePress 快速部署工具      ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""

# 检查 Node.js
echo -e "${BLUE}[1/6] 检查 Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js 未安装${NC}"
    echo "请先安装 Node.js: https://nodejs.org/"
    exit 1
fi
NODE_VERSION=$(node --version)
echo -e "${GREEN}✓ Node.js $NODE_VERSION${NC}\n"

# 安装依赖
echo -e "${BLUE}[2/6] 安装依赖...${NC}"
npm install || {
    echo -e "${RED}✗ 依赖安装失败${NC}"
    exit 1
}
echo -e "${GREEN}✓ 依赖安装完成${NC}\n"

# 构建项目
echo -e "${BLUE}[3/6] 构建项目...${NC}"
npm run build || {
    echo -e "${RED}✗ 构建失败${NC}"
    exit 1
}
echo -e "${GREEN}✓ 构建完成${NC}\n"

# 检查/安装 PM2
echo -e "${BLUE}[4/6] 检查 PM2...${NC}"
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}⚠ PM2 未安装，正在安装...${NC}"
    sudo npm install -g pm2 || {
        echo -e "${RED}✗ PM2 安装失败${NC}"
        exit 1
    }
    echo -e "${GREEN}✓ PM2 安装完成${NC}\n"
else
    PM2_VERSION=$(pm2 --version)
    echo -e "${GREEN}✓ PM2 $PM2_VERSION${NC}\n"
fi

# 停止旧服务
echo -e "${BLUE}[5/6] 停止旧服务...${NC}"
pm2 stop ctok 2>/dev/null && echo -e "${GREEN}✓ 已停止旧服务${NC}" || echo -e "${YELLOW}⚠ 没有运行的服务${NC}"
pm2 delete ctok 2>/dev/null && echo -e "${GREEN}✓ 已删除旧服务${NC}" || true
echo ""

# 启动新服务
echo -e "${BLUE}[6/6] 启动服务...${NC}"
sudo pm2 start server.js --name ctok || {
    echo -e "${RED}✗ 服务启动失败${NC}"
    exit 1
}

# 设置开机自启
sudo pm2 startup &>/dev/null || true
sudo pm2 save &>/dev/null || true

echo -e "${GREEN}✓ 服务启动完成${NC}\n"

# 显示状态
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║         ✅ 部署成功完成！             ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""

echo -e "${BLUE}📊 服务状态：${NC}"
pm2 status
echo ""

echo -e "${GREEN}🌐 访问地址：${NC}"
echo -e "   • Local:   ${GREEN}http://localhost${NC}"
echo -e "   • Network: ${GREEN}http://$(hostname -I | awk '{print $1}')${NC}"
echo ""

echo -e "${BLUE}💡 常用命令：${NC}"
echo -e "   • 查看状态: ${YELLOW}pm2 status${NC}"
echo -e "   • 查看日志: ${YELLOW}pm2 logs ctok${NC}"
echo -e "   • 重启服务: ${YELLOW}pm2 restart ctok${NC}"
echo -e "   • 停止服务: ${YELLOW}pm2 stop ctok${NC}"
echo -e "   • 监控面板: ${YELLOW}pm2 monit${NC}"
echo ""

# 测试连接
echo -e "${BLUE}🔍 测试连接...${NC}"
sleep 2
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
    echo -e "${GREEN}✓ 服务响应正常${NC}\n"
else
    echo -e "${YELLOW}⚠ 服务可能未完全启动，请稍后访问${NC}\n"
fi

echo -e "${GREEN}部署完成！祝您使用愉快！ 🎉${NC}\n"

