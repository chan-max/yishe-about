<script setup>
const techStack = [
  { name: 'LangGraph', desc: 'AI Agent 编排' },
  { name: 'NestJS', desc: '高并发微服务' },
  { name: 'Electron', desc: '跨平台桌面' },
  { name: 'Nuxt', desc: 'SSR 独立站' },
  { name: 'Qdrant', desc: '向量搜索引擎' },
  { name: 'Transformers.js', desc: '端侧 AI 推理' },
]
</script>

<template>
  <section class="wrapper wrapper--ticks border-t py-16 sm:py-24 px-5 sm:px-10 bg-image-section">
    <div class="bg-image" style="background-image: url('/yishe-bg-2.jpg')" />

    <div class="max-w-4xl mx-auto text-center mb-14 relative">
      <span class="inline-block text-[10px] font-mono text-[#6900ff] tracking-[0.2em] uppercase mb-4">Technology Stack</span>
      <h3 class="text-white mb-4">现代化全栈技术底座</h3>
      <p class="text-white/50 max-w-2xl mx-auto leading-relaxed text-sm">
        从 AI 算力编排到跨平台桌面，从向量搜索到全球独立站集群 —— 每一层都为创意与智造而生
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto relative">
      <div
        v-for="tech in techStack"
        :key="tech.name"
        class="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#6900ff]/25 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
      >
        <div class="w-10 h-10 rounded-xl bg-[#6900ff]/10 border border-[#6900ff]/20 flex items-center justify-center text-[#6900ff] font-bold text-xs group-hover:scale-110 transition-transform">
          {{ tech.name.substring(0, 2) }}
        </div>
        <div class="text-center">
          <div class="text-xs font-medium text-white/80 group-hover:text-white transition-colors">{{ tech.name }}</div>
          <div class="text-[10px] text-white/30 mt-0.5">{{ tech.desc }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
