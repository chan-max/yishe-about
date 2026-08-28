<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface OnlinePortal {
  title: string
  subtitle: string
  url: string
  tag: string
  tagColor: string
  icon: string
  desc: string
  badge?: string
}

interface DownloadItem {
  title: string
  platform: string
  version: string
  desc: string
  icon: string
  actions: Array<{
    label: string
    url: string
    icon: string
    primary?: boolean
  }>
}

const onlinePortals: OnlinePortal[] = [
  {
    title: '衣设设计工具',
    subtitle: 'tool.1s.design',
    url: 'http://tool.1s.design',
    tag: 'AI 画布引擎',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    icon: 'ph:paint-brush-broad-bold',
    desc: '基于浏览器的高性能 Canvas AI 贴纸与印花排版设计器，支持多模态 Agent 智能生成与 300 DPI 印刷级导出。',
    badge: '极速设计',
  },
  {
    title: '衣设定制商城',
    subtitle: '1s.design',
    url: 'https://1s.design',
    tag: 'POD 独立站矩阵',
    tagColor: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
    icon: 'ph:shopping-bag-open-bold',
    desc: '面向全球消费者的多品类个性化定制商城，涵盖服装、马克杯、装饰画、鼠标垫、钥匙扣等垂直出海品牌。',
    badge: '官方商城',
  },
  {
    title: '衣设管理后台系统',
    subtitle: 'admin.1s.design',
    url: 'http://admin.1s.design',
    tag: 'SaaS 运营中台',
    tagColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    icon: 'ph:chart-polar-bold',
    desc: '全渠道多租户柔性供应链中台，提供商品矩阵管理、工单智能调度、素材资产库与全网渠道分发。',
  },
  {
    title: '衣设后端服务',
    subtitle: 'api.1s.design',
    url: 'http://api.1s.design',
    tag: 'AI 算力中心',
    tagColor: 'bg-sky-500/15 text-sky-400 border-sky-500/30',
    icon: 'ph:cpu-bold',
    desc: 'NestJS 高并发微服务集群与 Agent 算力中枢，提供模型调度、矢量渲染、对象存储与 MCP 协议扩展。',
  },
  {
    title: '衣设品牌官网',
    subtitle: 'about.1s.design',
    url: 'http://about.1s.design',
    tag: '品牌与愿景',
    tagColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    icon: 'ph:sparkle-bold',
    desc: '探索衣设全生态宇宙，深入了解“艺术来源于生活，又回归生活”的 POD 创意设计与柔性智造哲学。',
  },
]

const downloadItems: DownloadItem[] = [
  {
    title: '衣设桌面客户端',
    platform: 'Windows / macOS',
    version: 'Latest Release',
    desc: '基于 Electron 与原生硬件加速构建的跨平台桌面生产力终端，支持离线 AI 推理、批量多线程合成与超清营销视频秒级渲染。',
    icon: 'ph:desktop-tower-bold',
    actions: [
      {
        label: 'Windows 安装包 (.exe)',
        url: 'https://gh-proxy.org/https://github.com/1s-design/yishe-client/releases/latest/download/yishe-client.exe',
        icon: 'mdi:microsoft-windows',
        primary: true,
      },
      {
        label: 'macOS 安装包 (.dmg)',
        url: 'https://gh-proxy.org/https://github.com/1s-design/yishe-client/releases/latest/download/yishe-client.dmg',
        icon: 'mdi:apple',
      },
    ],
  },
  {
    title: '衣设扩展系统',
    platform: 'Chrome / Edge 浏览器扩展',
    version: 'Latest Release',
    desc: '打通全网爆款灵感采集、智能图层解析与电商平台快速打样，支持 Chrome、Edge 等现代 Chromium 浏览器环境。',
    icon: 'ph:puzzle-piece-bold',
    actions: [
      {
        label: '下载 Chrome 扩展包 (.zip)',
        url: 'https://gh-proxy.org/https://github.com/1s-design/yishe-extensions/releases/latest/download/yishe-extensions.zip',
        icon: 'mdi:google-chrome',
        primary: true,
      },
    ],
  },
]
</script>

<template>
  <section class="wrapper wrapper--ticks border-t py-14 sm:py-20 px-5 sm:px-10">
    <!-- 头部介绍 -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
          <Icon icon="ph:globe-hemisphere-east-bold" class="w-3.5 h-3.5" />
          <span>全生态线上访问与软件矩阵</span>
        </div>
        <h2 class="text-white text-2xl sm:text-3xl font-bold tracking-tight">
          衣设产品线上入口与客户端下载
        </h2>
        <p class="text-white/60 text-sm sm:text-base max-w-2xl leading-relaxed">
          打通在线设计、独立站商城、供应链中台与桌面生产力终端，开启下一代 AI 柔性智造全流程。
        </p>
      </div>
      <div class="text-xs text-white/40 font-mono">
        Official Ecosystem URLs
      </div>
    </div>

    <!-- 1. 在线系统矩阵卡片 -->
    <div class="space-y-4 mb-14">
      <div class="flex items-center gap-2 text-xs font-bold text-white/80 uppercase tracking-wider">
        <Icon icon="ph:cloud-check-bold" class="w-4 h-4 text-emerald-400" />
        <span>在线系统体验中心</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="portal in onlinePortals"
          :key="portal.title"
          :href="portal.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <Icon :icon="portal.icon" class="w-5 h-5" />
              </div>
              <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border" :class="portal.tagColor">
                {{ portal.tag }}
              </span>
            </div>

            <div>
              <div class="flex items-center gap-2">
                <h4 class="text-white font-bold text-base group-hover:text-emerald-400 transition-colors">
                  {{ portal.title }}
                </h4>
                <span v-if="portal.badge" class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500 text-black">
                  {{ portal.badge }}
                </span>
              </div>
              <div class="text-xs font-mono text-emerald-400/90 mt-0.5">
                {{ portal.subtitle }}
              </div>
            </div>

            <p class="text-xs text-white/60 leading-relaxed line-clamp-3">
              {{ portal.desc }}
            </p>
          </div>

          <div class="pt-5 mt-5 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/80 group-hover:text-emerald-400 transition-colors">
            <span>立即进入访问</span>
            <Icon icon="ph:arrow-up-right-bold" class="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </div>

    <!-- 2. 客户端与扩展系统下载卡片 -->
    <div class="space-y-4">
      <div class="flex items-center gap-2 text-xs font-bold text-white/80 uppercase tracking-wider">
        <Icon icon="ph:download-simple-bold" class="w-4 h-4 text-indigo-400" />
        <span>生产力客户端与插件下载 (GitHub Proxy 极速下载)</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="item in downloadItems"
          :key="item.title"
          class="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Icon :icon="item.icon" class="w-6 h-6" />
              </div>
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono">
                {{ item.platform }}
              </span>
            </div>

            <div>
              <h4 class="text-white font-bold text-lg">
                {{ item.title }}
              </h4>
              <div class="text-xs text-white/40 mt-1">
                官方正版 · 自动检测最新版本发布
              </div>
            </div>

            <p class="text-xs sm:text-sm text-white/70 leading-relaxed">
              {{ item.desc }}
            </p>
          </div>

          <div class="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
            <a
              v-for="action in item.actions"
              :key="action.label"
              :href="action.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 shadow-md"
              :class="action.primary ? 'bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-indigo-500/25' : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'"
            >
              <Icon :icon="action.icon" class="w-4 h-4" />
              <span>{{ action.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
