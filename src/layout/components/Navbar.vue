<template>
  <div class="navbar">
    <hamburger
      @toggleCollapse="toggleSidebar"
      :collapse="sidebar.opend"
    ></hamburger>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app"

const { toggleSidebar, sidebar } = useAppStore()
</script>

<style lang="scss" scoped>
.navbar {
  @apply h-[var(--navbar-height)];
}
</style>
