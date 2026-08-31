<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)
let frame = 0

const updateProgress = () => {
  if (frame) return
  frame = requestAnimationFrame(() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    progress.value = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
    frame = 0
  })
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', updateProgress, { passive: true })
  window.addEventListener('resize', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <div class="scroll-progress__bar" :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>
