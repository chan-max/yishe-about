<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    delay?: number
    distance?: number
    once?: boolean
  }>(),
  {
    delay: 0,
    distance: 24,
    once: true,
  },
)

const element = ref<HTMLElement | null>(null)
const visible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!element.value) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || !('IntersectionObserver' in window)) {
    visible.value = true
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      visible.value = true
      if (props.once) observer?.unobserve(entry.target)
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    },
  )
  observer.observe(element.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div
    ref="element"
    class="scroll-reveal"
    :class="{ 'is-visible': visible }"
    :style="{
      '--reveal-delay': `${props.delay}ms`,
      '--reveal-distance': `${props.distance}px`,
    }"
  >
    <slot />
  </div>
</template>
