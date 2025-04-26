<template>
  <el-menu
    class="sidebar-container-menu"
    router
    :default-active="defaultActive"
    :background-color="varaibles.menuBg"
    :text-color="varaibles.menuText"
    :active-text-color="varaibles.menuActiveText"
    :collapse="sidebar.opend"
  >
    <el-menu-item index="/dashboard">
      <template #title>侧边导航</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app"
import varaibles from "@/style/variables.module.scss"

const { sidebar } = useAppStore()
const route = useRoute()
const defaultActive = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped></style>
