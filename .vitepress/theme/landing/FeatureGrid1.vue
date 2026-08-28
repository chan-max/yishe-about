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
          1s · 极速 AI 画布与创意设计引擎
        </h5>
        <p class="sm:max-w-[28rem] text-pretty">
          基于 LangGraph 与自研图形引擎的 AI Agent，集成 150+ 创意工具，支持一键文生图、智能高清矢量化、自动排版与 3D 虚拟打样，毫秒级流式响应。
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
        <h5 class="text-white">design-server · 分布式算力与可视化工作流</h5>
        <p class="max-w-[26rem] text-pretty">
          自研 100+ 节点类型的可视化 AI 工作流引擎，调度分布式 GPU 渲染集群，实现复杂图形渲染、智能批量扣图与超高清模型推理。
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
      <h5 class="text-white">yishe-admin · 全渠道多租户电商中台</h5>
      <p class="sm:max-w-[28rem] text-pretty">
        原生集成 Temu、Amazon、TikTok Shop、Shopify、拼多多、1688 等 17+ 全球头部电商平台，一键多平台铺货、订单聚合与柔性供应链秒级派单。
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
        <h5 class="text-white">十亿级多模态向量引擎与以图搜图</h5>
        <p class="max-w-[25rem] text-pretty">
          集成 Qdrant 向量搜索引擎与自研多模态特征提取模型，支持十亿级素材库的秒级以图搜图、风格溯源与 AI 原创版权合规风控。
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
