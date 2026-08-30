<script setup lang="ts">
interface TechCapability {
  category: string
  items: string[]
}

interface SystemHighlight {
  title: string
  desc: string
  stats: string[]
}

const techCapabilities: TechCapability[] = [
  {
    category: '全栈开发',
    items: ['Vue 3 / Nuxt 4', 'TypeScript', 'NestJS', 'Node.js', 'Electron', 'Python'],
  },
  {
    category: 'AI 能力',
    items: ['LangGraph Agent', 'MCP 协议', '向量搜索', 'RAG 知识库', '本地推理'],
  },
  {
    category: '自动化',
    items: ['RPA 流程', '数据爬虫', '批量处理', '社媒自动化', 'PS 自动化'],
  },
  {
    category: '工程部署',
    items: ['Docker', 'Redis', 'BullMQ', 'MySQL', '微服务架构'],
  },
]

const systemHighlights: SystemHighlight[] = [
  {
    title: 'AI Agent 双端架构',
    desc: 'LangGraph ReAct 循环 Agent，服务端 150+ 工具，客户端 79+ 本地能力，MCP 协议桥接云端与本地。',
    stats: ['150+ 工具', 'MCP 桥接'],
  },
  {
    title: '工作流引擎',
    desc: '自研 100+ 节点类型可视化工作流，电商采集→商品发布→素材处理→多平台分发全自动化链路。',
    stats: ['100+ 节点', '全链路自动化'],
  },
  {
    title: '向量搜索引擎',
    desc: 'Qdrant 向量搜索引擎，支持百万级贴纸/素材以图搜图，RAG 知识库增强。',
    stats: ['百万级素材', '秒级检索'],
  },
  {
    title: 'Fabric.js 画布引擎',
    desc: '自研 Canvas 画布引擎，40+ 操作类型，AI 设计助手，Three.js 3D 预览。',
    stats: ['40+ 操作', '3D 预览'],
  },
  {
    title: '多品牌站点集群',
    desc: 'Nuxt 4 SSR/SSG，SiteDefinition 配置化一套代码驱动 9 个品牌站点，SEO 全链路优化。',
    stats: ['9 站点', 'SEO 优化'],
  },
  {
    title: '桌面客户端',
    desc: 'Electron 35 + Playwright 浏览器自动化，Remotion 视频渲染，本地 MCP Server。',
    stats: ['离线可用', '自动更新'],
  },
]
</script>

<template>
  <div class="wrapper wrapper--ticks border-t pt-14 sm:pt-30 px-5 sm:px-10 bg-image-section">
    <div class="bg-image" style="background-image: url('/yishe-bg-3.jpg'); opacity: 0.08" />

    <!-- 标题区 -->
    <div class="relative flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-20 text-center sm:text-left">
      <div class="flex flex-col gap-3">
        <span class="text-[10px] font-mono text-[#6900ff] tracking-[0.2em] uppercase">Core Capabilities</span>
        <h3 class="text-white max-w-xl text-balance">系统核心技术能力</h3>
        <p class="max-w-md text-white/50 text-balance text-sm">
          全栈自研技术栈，覆盖 AI、自动化、多端协同与工程化部署
        </p>
      </div>
      <div class="flex gap-8 sm:gap-12 items-start justify-center sm:justify-start sm:pr-20">
        <div class="flex flex-col gap-2">
          <h2 class="gradient-text">6</h2>
          <p class="text-grey text-xs">子系统</p>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="gradient-text">150+</h2>
          <p class="text-grey text-xs">AI 工具</p>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="gradient-text">100+</h2>
          <p class="text-grey text-xs">工作流节点</p>
        </div>
      </div>
    </div>

    <!-- 技术栈标签 -->
    <div class="relative mt-10 mb-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="cap in techCapabilities"
          :key="cap.category"
          class="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
        >
          <h6 class="text-[10px] font-mono text-[#6900ff] tracking-wider uppercase mb-3">{{ cap.category }}</h6>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="item in cap.items"
              :key="item"
              class="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-white/65"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 系统亮点 -->
    <div class="relative">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(highlight, index) in systemHighlights"
          :key="index"
          class="group relative overflow-clip rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/10 hover:border-[#6900ff]/25 hover:bg-white/[0.06] transition-all duration-300"
        >
          <!-- 部分卡片有背景图 -->
          <div
            v-if="index === 0 || index === 2 || index === 4"
            class="absolute inset-0 bg-cover bg-center opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 pointer-events-none"
            :style="{ backgroundImage: `url(${index % 2 === 0 ? '/yishe-bg-1.jpg' : '/yishe-bg-2.jpg'})` }"
          />

          <div class="relative space-y-4">
            <h5 class="text-white text-lg">{{ highlight.title }}</h5>
            <p class="text-white/50 text-sm leading-relaxed">{{ highlight.desc }}</p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span
                v-for="stat in highlight.stats"
                :key="stat"
                class="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#6900ff]/10 border border-[#6900ff]/20 text-[#6900ff]"
              >
                {{ stat }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
