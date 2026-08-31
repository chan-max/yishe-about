import path from 'node:path'
import type { HeadConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
// import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
import { graphvizMarkdownPlugin } from 'vitepress-plugin-graphviz'
// import llmstxt from 'vitepress-plugin-llms'
import { markdownItImageSize } from 'markdown-it-image-size'
import { extendConfig } from '@voidzero-dev/vitepress-theme/config'
import type { FooterLink } from '@voidzero-dev/vitepress-theme'
import packageJson from '../package.json' with { type: 'json' }
import { buildEnd } from './buildEnd.config.ts'

const viteVersion = packageJson.version
const viteMajorVersion = +viteVersion.split('.')[0]

const ogDescription = '衣设 1s.design - 下一代 AI 驱动的 POD 创意设计与柔性智造全链路生态'
const ogImage = 'https://1s.design/og-image.jpg'
const ogTitle = '衣设 1s.design'
const ogUrl = 'https://1s.design'

// netlify envs
const commitRef = process.env.COMMIT_REF?.slice(0, 8) || 'v2.0.0'

const versionLinks = (() => {
  const links: FooterLink[] = []
  return links
})()

const config = defineConfig({
  title: '衣设 1s.design',
  description: '下一代 AI 驱动的 POD 创意设计与柔性智造全链路生态',
  lang: 'zh-CN',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://1s.design',
  },
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    ],
    [
      'link',
      { rel: 'alternate', type: 'application/rss+xml', href: '/blog.rss' }
    ],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { property: 'og:site_name', content: '衣设 1s.design' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
  ],

  locales: {
    root: { label: '简体中文' },
    en: { label: 'English', link: 'https://1s.design' },
  },

  themeConfig: {
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    variant: 'vite',
    banner: {
      id: 'yishe-admin-register',
      text: '衣设 SaaS 软件平台现已开放注册 — 全渠道电商运营，一站式智能制造',
      url: 'http://admin.1s.design',
    },

    editLink: {
      pattern: 'https://github.com/chan-max/yishe-about/edit/main/:path',
      text: '为此页提供修改建议'
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chan-max' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索生态',
            buttonAriaLabel: '搜索生态'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '重置搜索',
            noResultsText: '没有结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      copyright: `© 2026 衣设 1s.design. All rights reserved.`,
      nav: [
        {
          title: '衣设生态矩阵',
          items: [
            { text: 'yishe-tool 创意画布', link: 'http://tool.1s.design' },
            { text: 'yishe-shop', link: 'https://1s.design' },
            { text: 'yishe-admin 运营中台', link: 'http://admin.1s.design' },
            { text: 'yishe-server 算力中枢', link: 'http://api.1s.design' },
            { text: '衣设品牌官网', link: 'http://about.1s.design' },
          ],
        },
        {
          title: '资源与下载',
          items: [
            { text: '桌面客户端下载', link: 'https://gh-proxy.org/https://github.com/1s-design/yishe-client/releases/latest/download/yishe-client.exe' },
            { text: 'Chrome 扩展下载', link: 'https://gh-proxy.org/https://github.com/1s-design/yishe-extensions/releases/latest/download/yishe-extensions.zip' },
          ],
        },
        {
          title: '关注与协同',
          items: [
            { text: 'GitHub 仓库', link: 'https://github.com/chan-max' },
            { text: '1s.design 官方商城', link: 'https://1s.design' },
          ],
        },
      ],
      social: [
        { icon: 'github', link: 'https://github.com/chan-max' },
      ],
    },

    nav: [
      {
        text: '生态矩阵',
        items: [
          { text: 'yishe-tool (tool.1s.design)', link: 'http://tool.1s.design' },
          { text: 'yishe-shop (1s.design)', link: 'https://1s.design' },
          { text: 'yishe-admin (admin.1s.design)', link: 'http://admin.1s.design' },
          { text: 'yishe-server (api.1s.design)', link: 'http://api.1s.design' },
        ]
      },
      { text: '立即体验', link: 'http://admin.1s.design' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            {
              text: '开始',
              link: '/guide/'
            },
            {
              text: '理念',
              link: '/guide/philosophy'
            },
            {
              text: '为什么选 Vite',
              link: '/guide/why'
            }
          ]
        },
        {
          text: '指引',
          items: [
            {
              text: '功能',
              link: '/guide/features'
            },
            {
              text: '命令行接口',
              link: '/guide/cli'
            },
            {
              text: '使用插件',
              link: '/guide/using-plugins'
            },
            {
              text: '依赖预构建',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: '静态资源处理',
              link: '/guide/assets'
            },
            {
              text: '构建生产版本',
              link: '/guide/build'
            },
            {
              text: '部署静态站点',
              link: '/guide/static-deploy'
            },
            {
              text: '环境变量与模式',
              link: '/guide/env-and-mode'
            },
            {
              text: '服务端渲染（SSR）',
              link: '/guide/ssr'
            },
            {
              text: '后端集成',
              link: '/guide/backend-integration'
            },
            {
              text: '故障排除',
              link: '/guide/troubleshooting'
            },
            {
              text: '性能',
              link: '/guide/performance'
            },
            {
              text: `从 v${viteMajorVersion - 1} 迁移`,
              link: '/guide/migration'
            },
            {
              text: '破坏性变更',
              link: '/changes/'
            }
          ]
        },
        {
          text: 'API',
          items: [
            {
              text: '插件 API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript'
            },
            {
              text: '配置参考',
              link: '/config/'
            }
          ]
        },
        {
          text: '环境 API',
          items: [
            {
              text: '介绍',
              link: '/guide/api-environment'
            },
            {
              text: '环境实例',
              link: '/guide/api-environment-instances'
            },
            {
              text: '插件',
              link: '/guide/api-environment-plugins'
            },
            {
              text: '框架',
              link: '/guide/api-environment-frameworks'
            },
            {
              text: '运行时',
              link: '/guide/api-environment-runtimes'
            }
          ]
        }
      ],
      '/config/': [
        {
          text: '配置',
          items: [
            {
              text: '配置 Vite',
              link: '/config/'
            },
            {
              text: '共享选项',
              link: '/config/shared-options'
            },
            {
              text: '服务器选项',
              link: '/config/server-options'
            },
            {
              text: '构建选项',
              link: '/config/build-options'
            },
            {
              text: '预览选项',
              link: '/config/preview-options'
            },
            {
              text: '依赖优化选项',
              link: '/config/dep-optimization-options'
            },
            {
              text: 'SSR 选项',
              link: '/config/ssr-options'
            },
            {
              text: 'Worker 选项',
              link: '/config/worker-options'
            }
          ]
        }
      ],
      '/changes/': [
        {
          text: '破坏性变更',
          link: '/changes/'
        },
        {
          text: '现在',
          items: []
        },
        {
          text: '未来',
          items: [
            {
              text: '钩子函数中的 this.environment',
              link: '/changes/this-environment-in-hooks'
            },
            {
              text: 'HMR hotUpdate 插件钩子',
              link: '/changes/hotupdate-hook'
            },
            {
              text: '迁移到基于环境的API',
              link: '/changes/per-environment-apis'
            },
            {
              text: '使用 ModuleRunner API 进行服务端渲染',
              link: '/changes/ssr-using-modulerunner'
            },
            {
              text: '构建过程中的共享插件',
              link: '/changes/shared-plugins-during-build'
            }
          ]
        },
        {
          text: '过去',
          items: []
        }
      ]
    }
  },
  transformHead(ctx) {
    const path = ctx.page.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')

    if (path !== '404') {
      const canonicalUrl = path ? `${ogUrl}/${path}` : ogUrl
      ctx.head.push(
        ['link', { rel: 'canonical', href: canonicalUrl }],
        ['meta', { property: 'og:title', content: ctx.pageData.title }],
      )
    }

    // For the landing page, move the google font links to the top for better performance
    if (path === '') {
      const googleFontLinks: HeadConfig[] = []
      for (let i = 0; i < ctx.head.length; i++) {
        const tag = ctx.head[i]
        if (
          tag[0] === 'link' &&
          (tag[1]?.href?.includes('fonts.googleapis.com') ||
            tag[1]?.href?.includes('fonts.gstatic.com'))
        ) {
          ctx.head.splice(i, 1)
          googleFontLinks.push(tag)
          i--
        }
      }
      ctx.head.unshift(...googleFontLinks)
    }
  },
  markdown: {
    // languages used for twoslash and jsdocs in twoslash
    languages: ['ts', 'js', 'json'],
    codeTransformers: [
      // transformerTwoslash({
      //   twoslashOptions: {
      //     compilerOptions: {
      //       moduleResolution: 100, // bundler
      //     },
      //   },
      // }),
      // add `style:*` support
      {
        root(hast) {
          const meta = this.options.meta?.__raw
            ?.split(' ')
            .find((m) => m.startsWith('style:'))
          if (meta) {
            const style = meta.slice('style:'.length)
            const rootPre = hast.children.find(
              (n): n is typeof n & { type: 'element'; tagName: 'pre' } =>
                n.type === 'element' && n.tagName === 'pre',
            )
            if (rootPre) {
              rootPre.properties.style += '; ' + style
            }
          }
        },
      },
    ],
    async config(md) {
      md.use(groupIconMdPlugin, {
        titleBar: {
          includeSnippet: true
        }
      })
      md.use(markdownItImageSize, {
        publicDir: path.resolve(import.meta.dirname, '../public')
      })
      await graphvizMarkdownPlugin(md)
    },
  },
  vite: {
    resolve: {
      alias: {
        '@components/oss/TopBanner.vue': path.resolve(
          import.meta.dirname,
          'theme/components/TopBanner.vue',
        ),
        '@components/oss/TrustedBy.vue': path.resolve(
          import.meta.dirname,
          'theme/components/TrustedBy.vue',
        ),
      },
    },
    plugins: [
      // @ts-ignore
      groupIconVitePlugin({
        customIcon: {
          firebase: 'vscode-icons:file-type-firebase',
          '.gitlab-ci.yml': 'vscode-icons:file-type-gitlab',
        },
      }),
    ],
    optimizeDeps: {
      include: ['@shikijs/vitepress-twoslash/client'],
    },
    define: {
      __VITE_VERSION__: JSON.stringify(viteVersion)
    }
  },
  buildEnd
})

export default extendConfig(config)
