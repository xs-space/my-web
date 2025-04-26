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
    <sidebar-item v-for="route in routes" :key="route.path" :item="route" />
  </el-menu>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/stores/app"
import varaibles from "@/style/variables.module.scss"
import { routes } from "@/router"

const { sidebar } = useAppStore()
const route = useRoute()
const defaultActive = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped></style>
