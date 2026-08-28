<script setup>
import RiveAnimation from '@components/shared/RiveAnimation.vue'
import flexiblePluginAnimation from '@assets/vite/animations/640_x_300_flexible_plugin.riv'
</script>

<template>
  <section
    class="wrapper wrapper--ticks border-t grid lg:grid-cols-2 divide-x divide-y divide-nickel"
  >
    <div class="p-5 sm:p-10 flex flex-col gap-3">
      <h5 class="text-balance sm:text-pretty text-white">
        yishe-nuxt · 9 大垂直品类独立站矩阵
      </h5>
      <p class="sm:max-w-[28rem] text-pretty">
        一套自研现代化架构强力驱动服装、马克杯、装饰画、厨具、钥匙扣、鼠标垫等 9 大出海垂直品牌独立站，极致 SEO 与秒级首屏加载，赋能全球品牌出海。
      </p>
      <RiveAnimation
        :desktop-src="flexiblePluginAnimation"
        :desktop-width="640"
        :desktop-height="300"
        canvas-class="w-[calc(100%_+_2.5rem)] mt-5 -mx-5"
      />
    </div>

    <div class="flex flex-col gap-3 border-r-0 justify-between">
      <div class="p-5 sm:p-10 flex flex-col gap-3">
        <h5 class="text-white">yishe-client · 跨平台桌面生产力终端</h5>
        <p class="max-w-[26rem] text-pretty">
          基于 Electron 与底层原生硬件加速构建的桌面神器，内置浏览器自动化矩阵、批量图片多线程合成与超清营销视频秒级渲染。
        </p>
      </div>
      <div class="relative p-5 sm:p-10 flex justify-center bg-[#370a7f]">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="@assets/vite/vite-featurepanel-4-background.jpg"
          alt=""
          inert
          loading="lazy"
        />
        <img
          class="z-1"
          src="@assets/vite/vite-typed-api.svg"
          width="454"
          height="252"
          inert
          loading="lazy"
          alt="typed api"
        />
      </div>
    </div>

    <div class="p-5 sm:p-10 flex flex-col gap-3 lg:border-b-0">
      <h5 class="text-white">yishe-extensions · PS 工业插件与浏览器套件</h5>
      <p class="sm:max-w-[28rem] text-pretty mb-12 sm:mb-16">
        无缝打通 Adobe Photoshop 专业工业级设计链路，配合多浏览器生态扩展，实现一键全网爆款灵感采集、智能图层解析与多平台自动化快速打样。
      </p>
      <img
        src="@assets/vite/vite-ssr-support.png"
        width="1008"
        height="466"
        alt="SSR Support"
        loading="lazy"
        class="w-full px-5"
      />
    </div>

    <div class="flex flex-col gap-3 justify-between">
      <div class="p-5 sm:p-10 flex flex-col gap-3">
        <h5 class="text-white">端云协同 · 离线 AI 推理与 MCP 协议</h5>
        <p class="max-w-[25rem] text-pretty">
          全面支持 Model Context Protocol 协议与本地 Transformers.js 模型离线推理，断网环境下依然稳定实现高清抠图、矢量重构与工具链无缝调度。
        </p>
      </div>
      <div class="px-5 sm:px-10 flex justify-center">
        <img
          src="@assets/vite/vite-ci.svg"
          width="476"
          height="272"
          inert
          loading="lazy"
          alt="continuous ecosystem integration"
        />
      </div>
    </div>
  </section>
</template>
