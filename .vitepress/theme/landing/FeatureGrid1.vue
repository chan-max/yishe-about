<script setup>
import RiveAnimation from '@components/shared/RiveAnimation.vue'
import viteAnimation from '@assets/vite/animations/563_x_420_rich_features.riv'
</script>

<template>
  <section
    class="wrapper wrapper--ticks border-t grid lg:grid-cols-2 divide-x divide-y divide-nickel"
  >
    <div class="flex flex-col gap-3 justify-between">
      <div class="p-5 sm:p-10 flex flex-col gap-3">
        <h5 class="text-balance sm:text-pretty text-white">
          AI 智能设计
        </h5>
        <p class="sm:max-w-[28rem] text-pretty">
          基于 LangGraph 的 AI Agent，集成 150+ 工具，支持文生图、智能排版、设计建议。
        </p>
      </div>
      <div class="relative p-10 sm:p-15 flex justify-center bg-[#370a7f]">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="@assets/vite/vite-featurepanel-1-background.jpg"
          alt=""
          inert
          loading="lazy"
        />
        <img
          class="z-1"
          src="@assets/vite/vite-featurepanel-1-terminal.svg"
          width="493"
          height="230"
          alt="Terminal"
          inert
          loading="lazy"
        />
      </div>
    </div>

    <div class="flex flex-col gap-3 justify-between border-r-0">
      <div class="p-5 sm:p-10 flex flex-col gap-3">
        <h5 class="text-white">可视化工作流</h5>
        <p class="max-w-[26rem] text-pretty">
          自研 100+ 节点类型的工作流引擎，可视化拖拽配置自动化流程。
        </p>
      </div>
      <div class="flex justify-end">
        <img
          src="@assets/vite/vite-featurepanel-2-terminal.png"
          width="1126"
          height="734"
          class="md:max-w-[80%]"
          inert
          loading="lazy"
          alt="lightning fast hot module replacement"
        />
      </div>
    </div>

    <div class="p-5 sm:p-10 pb-0 sm:pb-0 flex flex-col gap-3 lg:border-b-0">
      <h5 class="text-white">多平台电商集成</h5>
      <p class="sm:max-w-[28rem] text-pretty">
        支持 Temu、Amazon、拼多多、1688 等 17+ 平台，一键发布商品。
      </p>
      <RiveAnimation
        :desktop-src="viteAnimation"
        :mobile-src="viteAnimation"
        :desktop-width="563"
        :desktop-height="300"
        :mobile-width="563"
        :mobile-height="420"
        canvas-class="w-full"
      />
    </div>

    <div class="flex flex-col gap-3 justify-between border-r-0 border-b-0">
      <div class="p-5 sm:p-10 flex flex-col gap-3">
        <h5 class="text-white">向量检索</h5>
        <p class="max-w-[25rem] text-pretty">
          集成 Qdrant 向量搜索引擎，支持百万级素材的以图搜图。
        </p>
      </div>
      <div class="relative p-10 sm:p-15 flex justify-center bg-[#370a7f]">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="@assets/vite/vite-featurepanel-4-background.jpg"
          alt=""
          inert
          loading="lazy"
        />
        <img
          class="z-1"
          src="@assets/vite/vite-featurepanel-4-terminal.svg"
          width="436"
          height="209"
          inert
          loading="lazy"
          alt="optimized build"
        />
      </div>
    </div>
  </section>
</template>
