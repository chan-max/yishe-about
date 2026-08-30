<script setup>
// these components live in @voidzero-dev/vitepress-theme
import { computed } from 'vue'
import Hero from './Hero.vue'
import ViteFeatureGrid1 from './FeatureGrid1.vue'
import ViteFeatureGrid2 from './FeatureGrid2.vue'
import ViteFrameworks from './Frameworks.vue'
import ViteCommunity from './Community.vue'
import EcosystemPortals from './EcosystemPortals.vue'
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

  <!-- 过渡：核心特性 -->
  <div class="gradient-divider" />

  <HeadingSection
    heading="全链路 AI 重塑创意设计生态"
    subheading="从灵感迸发、智能创作、虚拟打样到全球供应链秒级履约"
  />

  <!-- 第一组特性 + 图片背景 -->
  <div class="bg-image-section">
    <div class="glow-orb glow-orb-1" />
    <div class="bg-image" style="background-image: url('/yishe-bg-1.jpg'); opacity: 0.1" />
    <ViteFeatureGrid1 />
  </div>

  <div class="gradient-divider" />

  <!-- 产品入口 + 下载中心 -->
  <EcosystemPortals />

  <div class="gradient-divider" />

  <!-- 过渡：子系统 -->
  <HeadingSection
    heading="六大核心子系统 · 环环相扣"
    subheading="端云一体 · 工具互联 · 数据互通 · 全链路闭环"
  />

  <!-- 第二组特性 + 图片背景 -->
  <div class="bg-image-section">
    <div class="glow-orb glow-orb-2" />
    <div class="bg-image" style="background-image: url('/yishe-bg-2.jpg'); opacity: 0.1" />
    <ViteFeatureGrid2 />
  </div>

  <div class="gradient-divider" />

  <!-- 过渡：多端协同 -->
  <HeadingSection
    heading="多端无缝协同 · 随时随地创作"
    subheading="Web 在线设计 · 桌面生产力 · PS 插件 · 浏览器扩展 · 全球独立站"
  />

  <!-- 技术栈 -->
  <ViteFrameworks />

  <!-- 社区声音 -->
  <div class="bg-image-section">
    <div class="glow-orb glow-orb-3" />
    <div class="bg-image" style="background-image: url('/yishe-bg-1.jpg'); opacity: 0.06" />
    <ViteCommunity />
  </div>

  <Spacer />

  <!-- Footer CTA -->
  <Footer
    heading="加入衣设生态 · 释放无限创意"
    subheading="从一串灵感到全球上架 —— 让每一个创意都能秒级变为现实"
    button-text="立即开启创作 →"
    button-link="http://tool.1s.design"
  />
</template>
