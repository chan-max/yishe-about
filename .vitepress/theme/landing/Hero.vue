<script setup>
import RiveAnimation from '@components/shared/RiveAnimation.vue'
import CodeGroup from '@components/shared/CodeGroup.vue'

import viteAnimation from '@assets/vite/animations/641_x_629_vite_masthead.riv'

if (typeof document !== 'undefined') {
  const preloadLink = document.createElement('link')
  preloadLink.rel = 'preload'
  preloadLink.href = viteAnimation
  preloadLink.as = 'fetch'
  preloadLink.crossOrigin = 'anonymous'
  document.head.appendChild(preloadLink)
}

const installTabs = [
  { label: '衣设设计工具', code: 'http://tool.1s.design · 毫秒级极速 AI 画布与多模态智能排版引擎', prefix: '' },
  { label: '衣设定制商城', code: 'https://1s.design · 9 大垂直品类高性能出海独立站集群', prefix: '' },
  { label: '衣设管理后台', code: 'http://admin.1s.design · 全渠道多租户 SaaS 柔性供应链中台', prefix: '' },
  { label: '衣设后端服务', code: 'http://api.1s.design · 分布式 AI 渲染与 Agent 算力中枢', prefix: '' },
  { label: '衣设桌面客户端', code: 'Windows / macOS · 跨平台桌面生产力终端与端侧离线推理', prefix: '' },
  { label: '衣设扩展系统', code: 'Chrome Extension · 工业级插件与电商采集打样套件', prefix: '' },
]
</script>

<template>
  <div
    class="wrapper wrapper--ticks grid md:grid-cols-2 w-full border-nickel md:divide-x"
  >
    <div
      class="flex flex-col p-10 justify-between gap-20 items-center md:items-start"
    >
      <div
        class="flex flex-col gap-5 items-center md:items-start text-center md:text-left"
      >
        <h1 class="text-white text-pretty max-w-[25rem]">
          衣设 <span class="text-[var(--color-brand)]">1s.design</span>
        </h1>
        <p class="text-white/70 md:text-lg max-w-[27rem] text-pretty">
          下一代 AI 驱动的 POD 创意设计生态 <br /> 重新定义全球柔性智造全链路
        </p>
        <p class="text-white/50 text-sm max-w-[27rem] text-pretty">
          艺术来源于生活，又回归生活 · 创意即产品，设计即所得
        </p>
        <div class="flex items-center gap-4 mt-8 flex-wrap">
          <a
            href="http://tool.1s.design"
            target="_blank"
            rel="noopener noreferrer"
            class="button button--primary inline-block w-fit"
          >
            进入设计工具 (tool.1s.design)
          </a>
          <a
            href="https://1s.design"
            target="_blank"
            rel="noopener noreferrer"
            class="button inline-block w-fit"
          >
            访问定制商城 (1s.design)
          </a>
        </div>
      </div>
      <CodeGroup
        :tabs="installTabs"
        class="hidden md:block w-full -mb-[16px]"
        style="
          --vp-code-tab-bg: var(--color-slate);
          --vp-code-block-bg: var(--color-slate);
          --vp-code-tab-divider: #000;
        "
      />
    </div>
    <div class="flex flex-col sm:min-h-[30rem]">
      <div
        class="relative px-10 pb-10 md:pt-10 h-full flex flex-col justify-center overflow-clip"
      >
        <RiveAnimation
          :desktop-src="viteAnimation"
          :mobile-src="viteAnimation"
          :desktop-width="641"
          :desktop-height="629"
          :mobile-width="641"
          :mobile-height="629"
          canvas-class="w-full"
        />
      </div>
    </div>
  </div>
</template>
