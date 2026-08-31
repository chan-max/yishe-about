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
        <h1 class="text-white text-pretty max-w-[28rem] hero-title">
          衣设<span> · 个性化定制社区</span>
        </h1>

        <p class="text-white/70 md:text-lg max-w-[30rem] text-pretty leading-relaxed hero-copy">
          从一串灵感到一件专属商品，从一张草图到全域推广。衣设坚持<span>设计优先免费、社区共创、POD 按需生产</span>，用 AI 与自动化让每个人都能创作、分享并实现自己的独特设计。
        </p>

        <p class="text-white/40 text-sm max-w-[28rem] text-pretty font-mono">
          Create at the speed of thought. Manufacture at the scale of AI.
        </p>

        <div class="flex items-center gap-4 mt-4 flex-wrap">
          <a
            href="http://admin.1s.design"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-primary-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all hover:scale-105"
          >
            开启创作 →
          </a>
          <a
            href="https://1s.design"
            target="_blank"
            rel="noopener noreferrer"
            class="hero-secondary-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white/80 font-medium border hover:text-white transition-all"
          >
            浏览商城
          </a>
        </div>
      </div>

      <CodeGroup
        :tabs="ecosystemNodes"
        class="ecosystem-code-group hidden md:block w-full -mb-[16px] relative z-10"
        style="
          --vp-code-tab-bg: rgba(128, 139, 166, 0.08);
          --vp-code-block-bg: rgba(0, 0, 0, 0.3);
          --vp-code-tab-divider: rgba(154, 164, 190, 0.18);
          border: 1px solid rgba(154, 164, 190, 0.18);
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

<style scoped>
.hero-title span {
  background: linear-gradient(110deg, #c8baff 0%, #a8a0d8 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-copy span {
  color: #c7c0ed;
  font-weight: 600;
  text-shadow: 0 0 14px rgba(128, 104, 220, 0.12);
}

.hero-primary-btn {
  border: 1px solid rgba(183, 143, 255, 0.55);
  background: rgba(105, 0, 255, 0.72);
  box-shadow: 0 8px 28px rgba(105, 0, 255, 0.16);
}

.hero-primary-btn:hover {
  box-shadow: 0 10px 34px rgba(126, 98, 220, 0.26);
}

.hero-secondary-btn {
  border-color: rgba(153, 164, 190, 0.3);
  background: rgba(128, 139, 166, 0.08);
}

.hero-secondary-btn:hover {
  border-color: rgba(193, 184, 245, 0.62);
  background: rgba(105, 0, 255, 0.12);
}

.ecosystem-code-group :deep(.vp-code-group) {
  --vp-code-tab-bg: rgba(128, 139, 166, 0.1) !important;
  --vp-code-block-bg: rgba(5, 13, 18, 0.72) !important;
  --vp-code-tab-divider: rgba(154, 164, 190, 0.18) !important;
  --vp-code-tab-text-color: rgba(224, 229, 242, 0.58) !important;
  --vp-code-tab-hover-text-color: #d0c8f5 !important;
  --vp-code-tab-active-text-color: #f2efff !important;
  --vp-code-tab-active-bar-color: #a88aff !important;
  border: 1px solid rgba(154, 164, 190, 0.2);
  border-radius: 12px;
  background: rgba(12, 14, 21, 0.72);
  overflow: hidden;
}

.ecosystem-code-group :deep(.tabs label:nth-of-type(1)::after),
.ecosystem-code-group :deep(.tabs label:nth-of-type(4)::after) {
  background-color: rgba(168, 138, 255, 0.9);
}

.ecosystem-code-group :deep(.language-bash code) {
  color: #c8c1eb !important;
}
</style>
