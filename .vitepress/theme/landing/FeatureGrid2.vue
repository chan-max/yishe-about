<script setup lang="ts">
interface Feature {
  title: string
  tagline: string
  desc: string
  highlights: string[]
  bgImage?: string
}

const features: Feature[] = [
  {
    title: 'yishe-shop 独立站矩阵',
    tagline: 'Scale',
    desc: '一套架构驱动 9 大垂直品类出海独立站，SSR 秒级首屏、极致 SEO，让品牌直达全球消费者。',
    highlights: ['9 大垂直品类', 'SSR 极速加载', '全球 CDN'],
  },
  {
    title: 'yishe-client 桌面终端',
    tagline: 'Power',
    desc: 'Electron + 原生硬件加速，断网也能离线 AI 推理，批量视频渲染、图片合成一气呵成。',
    highlights: ['离线 AI 推理', '批量视频渲染', 'Windows / macOS'],
    bgImage: '/yishe-bg-1.jpg',
  },
  {
    title: 'yishe-extensions 扩展系统',
    tagline: 'Connect',
    desc: '打通 Photoshop 工业级设计链路 + 浏览器生态扩展，爆款采集、智能打样无缝衔接。',
    highlights: ['PS 图层解析', '爆款灵感采集', 'Chrome / Edge'],
  },
  {
    title: '端云协同 · MCP 协议',
    tagline: 'Unify',
    desc: '全面支持 Model Context Protocol，本地 Transformers.js 离线推理与云端工具链统一调度。',
    highlights: ['MCP 协议', '断网可用', '工具链调度'],
    bgImage: '/yishe-bg-2.jpg',
  },
]
</script>

<template>
  <section class="wrapper wrapper--ticks border-t">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-stroke dark:divide-nickel">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="feature-card-glow group relative p-6 sm:p-8 lg:p-10 flex flex-col gap-5 overflow-hidden min-h-[280px]"
      >
        <!-- 背景图卡片 -->
        <div
          v-if="feature.bgImage"
          class="absolute inset-0 bg-cover bg-center opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-700 pointer-events-none"
          :style="{ backgroundImage: `url(${feature.bgImage})` }"
        />

        <!-- 悬浮渐变 -->
        <div class="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <!-- 角落装饰光点 -->
        <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"
          style="background: #6900ff"
        />

        <!-- Tagline -->
        <div class="relative">
          <span class="text-[10px] font-mono text-[#6900ff]/70 tracking-[0.15em] uppercase border border-[#6900ff]/20 px-2 py-0.5 rounded">
            {{ feature.tagline }}
          </span>
        </div>

        <!-- 标题 -->
        <h5 class="relative text-white text-lg leading-snug">
          {{ feature.title }}
        </h5>

        <!-- 描述 -->
        <p class="relative text-white/55 text-sm leading-relaxed">
          {{ feature.desc }}
        </p>

        <!-- 亮点标签 -->
        <div class="relative flex flex-wrap gap-1.5 pt-2 mt-auto">
          <span
            v-for="h in feature.highlights"
            :key="h"
            class="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/60"
          >
            {{ h }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
