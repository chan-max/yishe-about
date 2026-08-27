<script setup>
// these components live in @voidzero-dev/vitepress-theme
import { computed } from 'vue'
import Hero from './Hero.vue'
import ViteFeatureGrid1 from './FeatureGrid1.vue'
import ViteFeatureGrid2 from './FeatureGrid2.vue'
import ViteFrameworks from './Frameworks.vue'
import ViteCommunity from './Community.vue'
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
    heading="AI 重塑设计工作流"
    subheading="让创意更快落地，让设计更有价值"
  />
  <ViteFeatureGrid1 />
  <HeadingSection heading="完整的技术栈" />
  <ViteFeatureGrid2 />
  <HeadingSection heading="多端协同生态" />
  <ViteFrameworks />
  <ViteCommunity />
  <Spacer />
  <Footer
    heading="探索衣设"
    subheading="从设计到发布，一站式 AI 驱动平台"
    button-text="访问主站"
    button-link="https://1s.design"
  />
</template>
