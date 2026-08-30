<script setup>
</script>

<template>
  <div class="nav-logo flex items-center gap-2.5">
    <img
      src="/favicon.png"
      alt="衣设"
      class="w-7 h-7 rounded-lg shrink-0"
    />
    <span class="nav-logo-text">衣设</span>
  </div>
</template>

<style scoped>
.nav-logo {
  display: inline-flex !important;
  flex-direction: row !important;
  align-items: center !important;
  gap: 0.625rem;
}

.nav-logo-text {
  color: #fff !important;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.01em;
  line-height: 1;
  white-space: nowrap;
}

.nav-logo:hover {
  opacity: 0.85;
}
</style>
