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
    title: 'yishe-tool 创意画布',
    tagline: 'Design',
    desc: '基于 LangGraph AI Agent 与自研图形引擎，150+ 创意工具一站式覆盖文生图、矢量化、智能排版与 3D 虚拟打样。',
    highlights: ['毫秒级响应', '300DPI 印刷级导出', '多模态 Agent'],
    bgImage: '/yishe-bg-1.jpg',
  },
  {
    title: 'yishe-server 算力中枢',
    tagline: 'Compute',
    desc: 'NestJS 高并发微服务集群，自研 100+ 节点可视化 AI 工作流，调度分布式 GPU 渲染矩阵。',
    highlights: ['GPU 集群调度', '批量智能扣图', 'MCP 协议扩展'],
  },
  {
    title: 'yishe-admin 运营中台',
    tagline: 'Automate',
    desc: '全渠道多租户 SaaS 柔性供应链中台，原生集成 17+ 全球电商平台，从订单到履约全自动流转。',
    highlights: ['一键多平台铺货', '智能工单调度', '供应链秒级派单'],
    bgImage: '/yishe-bg-2.jpg',
  },
  {
    title: '十亿级向量引擎',
    tagline: 'Discover',
    desc: 'Qdrant 向量搜索引擎 + 自研多模态特征提取，十亿级素材库秒级检索、风格溯源与版权合规。',
    highlights: ['以图搜图', '风格溯源', '十亿级秒级响应'],
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
