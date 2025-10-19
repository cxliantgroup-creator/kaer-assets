import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Ctok | Claude Code拼车社群 - 专业教程与拼车服务',
  description: 'Claude Code拼车社群 - 专业的Claude Code安装教程、使用技巧、最佳实践和拼车服务平台。Max 20X版本拼车，成本分摊节省60%+，专业管理监控，安全合规共享，10+成功运营群组，全天技术支持，让AI编程更简单高效',
  
  // 忽略死链接检查（允许链接到尚未创建的页面）
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: 'https://ctok.ai/images/ctok-logo.png' }],
    ['link', { rel: 'shortcut icon', href: 'https://ctok.ai/images/ctok-logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://ctok.ai/images/ctok-logo.png' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'keywords', content: 'Claude Code,Claude Code拼车,AI编程工具,代码助手,人工智能编程,Claude Code教程,Claude Code安装,编程工具,Ctok,AI开发,Claude Code最佳实践' }],
    ['meta', { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' }],
    ['meta', { name: 'author', content: 'Ctok Team' }],
    ['meta', { name: 'publisher', content: 'Ctok' }],
    ['meta', { name: 'copyright', content: '© 2025 Ctok' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Ctok-Claude Code拼车社群' }],
    ['meta', { property: 'og:image', content: 'https://ctok.ai/images/claude-code-banner-new2.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@CtokAI' }],
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-BLLZG9DQ9N' }],
    ['script', {}, `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date),gtag("config","G-BLLZG9DQ9N");`],
  ],

  themeConfig: {
    siteTitle: 'Ctok Claude Code拼车',
    logo: {
      src: 'https://ctok.ai/images/ctok-logo.png',
      alt: 'Ctok Logo - Claude Code 拼车社群'
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '拼车社群', link: '/claude-code-group' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    sidebar: [
      {
        text: '🚗 拼车社群',
        items: [
          { text: 'Claude Code 拼车最佳实践', link: '/claude-code-carpool-guide' },
          { text: 'Claude Code 拼车社群', link: '/claude-code-group' }
        ]
      },
      {
        text: '⭐ 推荐',
        items: [
          { text: 'AI精选资源', link: '/ai-resources' }
        ]
      },
      {
        text: '🛠️ 安装&配置',
        items: [
          { text: 'Claude Code Install', link: '/claude-code-setup-ctok' },
          { text: 'Claude Code 在Windows中设置环境变量', link: '/claude-code-windows-env-setup' },
          { text: 'Windows 安装 Claude Code 的新姿势，保姆级教程', link: '/windows-claude-code-installation-guide' },
          { text: '如何卸载 Claude Code？', link: '/claude-code-uninstall' },
          { text: '如何修改 hosts 文件 - Windows 和 macOS 完整指南', link: '/how-to-modify-hosts-file' },
          { text: 'NPM 中国加速配置指南', link: '/npm-china-acceleration-config' },
          { text: '解决 Cursor 和 VSCode 无法使用第三方连接点的问题', link: '/fix-vscode-cursor-third-party-endpoint' }
        ]
      }
    ],

    socialLinks: []
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Ctok Carpool Community',
      description: 'Claude Code Community - Professional tutorials, best practices, practical tips and carpool services',
      themeConfig: {
        siteTitle: 'Ctok Carpool',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Carpool Community', link: '/en/claude-code-group' }
        ],
        sidebar: [
          {
            text: '🚗 Carpool Community',
            items: [
              { text: 'Claude Code Carpool Best Practices', link: '/en/claude-code-carpool-guide' },
              { text: 'Claude Code Carpool Community', link: '/en/claude-code-group' }
            ]
          },
          {
            text: '⭐ Recommended',
            items: [
              { text: 'AI Selected Resources', link: '/en/ai-resources' }
            ]
          },
          {
            text: '🛠️ Installation & Setup',
            items: [
              { text: 'Claude Code Install', link: '/en/claude-code-setup-ctok' },
              { text: 'Setting Environment Variables in Windows', link: '/en/claude-code-windows-env-setup' },
              { text: 'Windows Claude Code Installation Guide', link: '/en/windows-claude-code-installation-guide' },
              { text: 'How to Uninstall Claude Code?', link: '/en/claude-code-uninstall' },
              { text: 'How to Modify hosts File - Complete Guide', link: '/en/how-to-modify-hosts-file' },
              { text: 'NPM China Acceleration Configuration Guide', link: '/en/npm-china-acceleration-config' },
              { text: 'Fix Cursor and VSCode Third-Party Endpoint Issues', link: '/en/fix-vscode-cursor-third-party-endpoint' }
            ]
          }
        ]
      }
    }
  },

  cleanUrls: true
})

