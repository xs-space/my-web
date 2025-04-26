<template>
  <div class="navbar">
    <hamburger
      @toggleCollapse="handleCollapse"
      :collapse="collapse"
    ></hamburger>
  </div>
</template>

<script lang="ts" setup>
const collapse = ref(true)
const handleCollapse = () => {
  collapse.value = !collapse.value
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply h-[var(--navbar-height)];
}
</style>
