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
    title: 'yishe-tool 创意画布',
    subtitle: 'tool.1s.design',
    url: 'http://tool.1s.design',
    tag: 'AI 设计引擎',
    icon: 'ph:paint-brush-broad-bold',
    desc: '浏览器内的高性能 Canvas AI 设计器，150+ 智能工具、多模态 Agent 生成、300DPI 印刷级导出。',
    badge: '极速创作',
  },
  {
    title: 'yishe-shop',
    subtitle: '1s.design',
    url: 'https://1s.design',
    tag: 'POD 独立站',
    icon: 'ph:shopping-bag-open-bold',
    desc: '9 大垂直品类个性化定制商城，覆盖服装、马克杯、装饰画、鼠标垫等出海爆品。',
    badge: '官方商城',
  },
  {
    title: 'yishe-admin 运营中台',
    subtitle: 'admin.1s.design',
    url: 'https://admin.1s.design',
    tag: 'SaaS 中台',
    icon: 'ph:chart-polar-bold',
    desc: '全渠道多租户柔性供应链中台，商品管理、工单调度、素材资产与全网渠道分发一体化。',
  },
  {
    title: 'yishe-server 算力中枢',
    subtitle: 'api.1s.design',
    url: 'http://api.1s.design',
    tag: 'AI 算力',
    icon: 'ph:cpu-bold',
    desc: 'NestJS 高并发微服务集群，分布式 GPU 渲染调度、矢量引擎与 MCP 协议扩展。',
  },
  {
    title: '衣设品牌官网',
    subtitle: 'about.1s.design',
    url: 'http://about.1s.design',
    tag: '品牌与愿景',
    icon: 'ph:sparkle-bold',
    desc: '探索衣设全生态宇宙，了解 AI 驱动的 POD 创意设计与柔性智造哲学。',
  },
]

const downloadItems: DownloadItem[] = [
  {
    title: 'yishe-client 桌面客户端',
    platform: 'Windows / macOS',
    version: 'Latest Release',
    desc: '基于 Electron 与原生硬件加速的跨平台生产力终端，离线 AI 推理、批量视频渲染。',
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
    title: 'yishe-extensions 扩展系统',
    platform: 'Chrome / Edge',
    version: 'Latest Release',
    desc: '打通 Photoshop 工业级设计链路与浏览器生态，爆款采集、智能打样一气呵成。',
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
    <!-- 头部 -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div class="space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#6900ff]/10 border border-[#6900ff]/25 text-[#6900ff]">
          <Icon icon="ph:hexagon-bold" class="w-3.5 h-3.5" />
          <span>六大核心子系统 · 全生态矩阵</span>
        </div>
        <h2 class="text-white text-2xl sm:text-3xl font-bold tracking-tight">
          从创意源点到设计产品
        </h2>
        <p class="text-white/55 text-sm sm:text-base max-w-2xl leading-relaxed">
          在线设计、智能运营、端云协同与柔性制造，构成完整的设计产品基础设施
        </p>
      </div>
      <div class="text-[10px] font-mono text-white/30 tracking-wider">
        YISHE ECOSYSTEM v2.0
      </div>
    </div>

    <!-- 在线系统卡片 -->
    <div class="space-y-4 mb-14">
      <div class="flex items-center gap-2 text-xs font-bold text-white/70 uppercase tracking-wider">
        <Icon icon="ph:cloud-check-bold" class="w-4 h-4 text-[#6900ff]" />
        <span>在线系统 · 即刻体验</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="(portal, index) in onlinePortals"
          :key="portal.title"
          :href="portal.url"
          target="_blank"
          rel="noopener noreferrer"
          class="portal-card group relative flex flex-col justify-between p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#6900ff]/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
        >
          <!-- 部分卡片有背景图 -->
          <div
            v-if="index === 0 || index === 2"
            class="absolute inset-0 bg-cover bg-center opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none"
            :style="{ backgroundImage: `url(${index === 0 ? '/yishe-bg-1.jpg' : '/yishe-bg-2.jpg'})` }"
          />

          <div class="relative space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-white/60">
                {{ portal.tag }}
              </span>
              <span v-if="portal.badge" class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#6900ff] text-white">
                {{ portal.badge }}
              </span>
            </div>

            <div>
              <h4 class="text-white font-bold text-base group-hover:text-[#6900ff] transition-colors">
                {{ portal.title }}
              </h4>
              <div class="text-[11px] font-mono text-[#6900ff]/70 mt-1">
                {{ portal.subtitle }}
              </div>
            </div>

            <p class="text-xs text-white/50 leading-relaxed line-clamp-2">
              {{ portal.desc }}
            </p>
          </div>

          <div class="relative pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-medium text-white/50 group-hover:text-[#6900ff] transition-colors">
            <span>立即访问</span>
            <Icon icon="ph:arrow-up-right-bold" class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </div>

    <!-- 客户端下载 -->
    <div class="space-y-4">
      <div class="flex items-center gap-2 text-xs font-bold text-white/70 uppercase tracking-wider">
        <Icon icon="ph:download-simple-bold" class="w-4 h-4 text-[#6900ff]" />
        <span>桌面与扩展 · 本地极速</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div
          v-for="(item, index) in downloadItems"
          :key="item.title"
          class="download-card group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#6900ff]/30 transition-all duration-300 overflow-hidden relative"
        >
          <!-- 背景图 -->
          <div
            class="absolute inset-0 bg-cover bg-center opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none"
            :style="{ backgroundImage: `url(${index === 0 ? '/yishe-bg-2.jpg' : '/yishe-bg-1.jpg'})` }"
          />

          <div class="relative space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-white/60 font-mono">
                {{ item.platform }}
              </span>
            </div>

            <div>
              <h4 class="text-white font-bold text-base">{{ item.title }}</h4>
              <div class="text-[11px] text-white/35 mt-0.5 font-mono">{{ item.version }}</div>
            </div>

            <p class="text-xs sm:text-sm text-white/60 leading-relaxed">{{ item.desc }}</p>
          </div>

          <div class="pt-5 mt-5 border-t border-white/[0.08] flex flex-wrap items-center gap-2.5">
            <a
              v-for="action in item.actions"
              :key="action.label"
              :href="action.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200"
              :class="action.primary ? 'btn-image-bg text-white' : 'bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10'"
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
