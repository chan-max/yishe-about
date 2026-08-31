<script setup>
// these components live in @voidzero-dev/vitepress-theme
import { computed } from 'vue'
import Hero from './Hero.vue'
import ViteFeatureGrid1 from './FeatureGrid1.vue'
import ViteFeatureGrid2 from './FeatureGrid2.vue'
import ViteFrameworks from './Frameworks.vue'
import ViteCommunity from './Community.vue'
import EcosystemPortals from './EcosystemPortals.vue'
import ScrollProgress from './ScrollProgress.vue'
import ScrollReveal from './ScrollReveal.vue'
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
  <div class="yishe-landing">
    <ScrollProgress />

    <ScrollReveal :distance="16">
      <Hero />
    </ScrollReveal>

    <!-- 过渡：核心特性 -->
    <div class="gradient-divider" />

  <ScrollReveal>
    <HeadingSection
      heading="全链路 AI 重塑创意设计生态"
      subheading="从灵感迸发、智能创作、虚拟打样到个性化设计产品落地"
    />
  </ScrollReveal>

  <!-- 第一组特性 + 图片背景 -->
  <div class="bg-image-section">
    <div class="glow-orb glow-orb-1" />
    <div class="bg-image" style="background-image: url('/yishe-bg-1.jpg'); opacity: 0.1" />
    <ScrollReveal :distance="30">
      <ViteFeatureGrid1 />
    </ScrollReveal>
  </div>

  <div class="gradient-divider" />

  <!-- 产品入口 + 下载中心 -->
  <ScrollReveal :distance="28">
    <EcosystemPortals />
  </ScrollReveal>

  <div class="gradient-divider" />

  <!-- 过渡：子系统 -->
  <ScrollReveal>
    <HeadingSection
      heading="六大核心子系统 · 环环相扣"
      subheading="端云一体 · 工具互联 · 数据互通 · 全链路闭环"
    />
  </ScrollReveal>

  <!-- 第二组特性 + 图片背景 -->
  <div class="bg-image-section">
    <div class="glow-orb glow-orb-2" />
    <div class="bg-image" style="background-image: url('/yishe-bg-2.jpg'); opacity: 0.1" />
    <ScrollReveal :distance="30">
      <ViteFeatureGrid2 />
    </ScrollReveal>
  </div>

  <div class="gradient-divider" />

  <!-- 过渡：多端协同 -->
  <ScrollReveal>
    <HeadingSection
      heading="多端无缝协同 · 随时随地创作"
      subheading="Web 在线设计 · 桌面生产力 · PS 插件 · 浏览器扩展 · 全球独立站"
    />
  </ScrollReveal>

  <!-- 技术栈 -->
  <ScrollReveal :distance="24">
    <ViteFrameworks />
  </ScrollReveal>

  <!-- 社区声音 -->
  <div class="bg-image-section">
    <div class="glow-orb glow-orb-3" />
    <div class="bg-image" style="background-image: url('/yishe-bg-1.jpg'); opacity: 0.06" />
    <ScrollReveal :distance="24">
      <ViteCommunity />
    </ScrollReveal>
  </div>

  <Spacer />

  <!-- Footer CTA -->
  <ScrollReveal :distance="20">
    <Footer
      heading="加入衣设生态 · 释放无限创意"
      subheading="让每一个创意都被理解、被实现，最终成为真正的设计产品"
      button-text="立即开启创作 →"
      button-link="http://tool.1s.design"
    />
  </ScrollReveal>
  </div>
</template>
