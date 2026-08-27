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
  { label: '设计', code: 'AI 智能设计助手', prefix: '' },
  { label: '电商', code: '多平台一键发布', prefix: '' },
  { label: '独立站', code: '9 品牌站点矩阵', prefix: '' },
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
          AI 驱动的设计工作流 <br /> 让创意更快落地
        </p>
        <p class="text-white/50 text-sm max-w-[27rem] text-pretty">
          艺术来源于生活，又回归生活
        </p>
        <div class="flex items-center gap-5 mt-8">
          <a
            href="https://1s.design"
            target="_blank"
            rel="noopener noreferrer"
            class="button button--primary inline-block w-fit"
          >
            访问主站
          </a>
          <a
            href="https://github.com/chan-max"
            target="_blank"
            rel="noopener noreferrer"
            class="button inline-block w-fit"
          >
            GitHub
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
