<script setup>
// these components live in @voidzero-dev/vitepress-theme
import { computed } from 'vue'
import Hero from './Hero.vue'
import ViteFeatureGrid1 from './FeatureGrid1.vue'
import ViteFeatureGrid2 from './FeatureGrid2.vue'
import ViteFrameworks from './Frameworks.vue'
import ViteCommunity from './Community.vue'
import EcosystemPortals from './EcosystemPortals.vue'
import TrustedBy from '@components/oss/TrustedBy.vue'
import HeadingSection from '@components/oss/HeadingSection.vue'
import Sponsors from '@components/oss/Sponsors.vue'
import Spacer from '@components/shared/Spacer.vue'
import Footer from '@components/oss/Footer.vue'
import { useSponsor } from '../composables/sponsor'

const data = useSponsor()

const sponsors = computed(
  () => data.value?.filter((s) => s.tier !== 'Brought to you by') ?? [],
)
</script>

<template>
  <Hero />
  <TrustedBy
    :logos="['openai', 'shopify', 'stripe', 'linear', 'clickup', 'wiz']"
  />
  <HeadingSection
    heading="全链路 AI 重塑 POD 设计与柔性智造"
    subheading="从灵感迸发、向量智绘、虚拟打样到全球供应链秒级履约"
  />
  <ViteFeatureGrid1 />
  
  <!-- 产品线上入口与客户端/扩展下载中心 -->
  <EcosystemPortals />

  <HeadingSection
    heading="六大核心子系统协同矩阵"
    subheading="端云一体 · 工具互联 · 资源共享 · 全链路商业闭环"
  />
  <ViteFeatureGrid2 />
  <HeadingSection
    heading="全场景多端无缝协同"
    subheading="打通 Web 在线设计、桌面端生产力、专业 PS 插件与跨境独立站集群"
  />
  <ViteFrameworks />
  <ViteCommunity />
  <Spacer />
  <Footer
    heading="探索衣设 POD 智造宇宙"
    subheading="从灵感生成到全球分发，开启属于您的下一代 AI 柔性智造超级生态"
    button-text="立即进入 1s 在线设计"
    button-link="http://tool.1s.design"
  />
</template>
