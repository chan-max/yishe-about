<script setup>
import CodeGroup from '@components/shared/CodeGroup.vue'
import HeroCanvas from './HeroCanvas.vue'

const ecosystemNodes = [
  { label: '创意画布', code: 'tool.1s.design — 150+ AI 工具 · 毫秒级响应 · 300DPI 印刷级输出' },
  { label: '智造商城', code: '1s.design — 9 大垂直品类 · 全球 POD 独立站矩阵' },
  { label: '运营中台', code: 'admin.1s.design — 17+ 平台一键铺货 · 智能工单调度' },
  { label: '算力中枢', code: 'api.1s.design — 分布式 GPU 集群 · 100+ 节点工作流' },
  { label: '桌面终端', code: 'yishe-client — 离线 AI 推理 · 批量视频渲染' },
  { label: '采集扩展', code: 'yishe-extensions — PS 插件 · 爆款采集 · 智能打样' },
]
</script>

<template>
  <div
    class="wrapper wrapper--ticks grid md:grid-cols-2 w-full border-nickel md:divide-x relative overflow-hidden bg-[#0a0a0a]"
  >
    <!-- 背景彩色光晕 -->
    <div class="hero-glow hero-glow-1 animate-pulse-glow" />
    <div class="hero-glow hero-glow-2 animate-pulse-glow" style="animation-delay: -2s" />

    <!-- 左侧：文案内容 -->
    <div
      class="flex flex-col p-10 justify-between gap-16 items-center md:items-start relative z-10"
    >
      <div
        class="flex flex-col gap-6 items-center md:items-start text-center md:text-left"
      >
        <h1 class="text-white text-pretty max-w-[28rem]">
          衣设<span class="text-[#6900ff]"> · 下一代 AI 创意设计生态</span>
        </h1>

        <p class="text-white/70 md:text-lg max-w-[30rem] text-pretty leading-relaxed">
          从一串灵感到一件印花商品，从一张草图到全域推广。衣设打通<span class="text-white font-medium">创意设计、智能软件、自动化智造</span>全链路，让每一个创意都能秒级变为现实。
        </p>

        <p class="text-white/40 text-sm max-w-[28rem] text-pretty font-mono">
          Create at the speed of thought. Manufacture at the scale of AI.
        </p>

        <div class="flex items-center gap-4 mt-4 flex-wrap">
          <a
            href="http://admin.1s.design"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-image-bg inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:scale-105"
          >
            开启创作 →
          </a>
          <a
            href="https://1s.design"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white/80 font-medium border border-white/15 hover:border-white/30 hover:text-white transition-all"
          >
            浏览商城
          </a>
        </div>
      </div>

      <CodeGroup
        :tabs="ecosystemNodes"
        class="hidden md:block w-full -mb-[16px] relative z-10"
        style="
          --vp-code-tab-bg: rgba(105, 0, 255, 0.08);
          --vp-code-block-bg: rgba(0, 0, 0, 0.3);
          --vp-code-tab-divider: rgba(105, 0, 255, 0.2);
          border: 1px solid rgba(105, 0, 255, 0.15);
          border-radius: 12px;
          background: rgba(10, 10, 10, 0.6);
        "
      />
    </div>

    <!-- 右侧：炫酷效果 -->
    <div class="flex flex-col relative">
      <HeroCanvas />
    </div>
  </div>
</template>
