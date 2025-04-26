<template>
  <el-button @click="collapse = !collapse"></el-button>
  <el-menu
    class="sidebar-container-menu"
    router
    :default-active="defaultActive"
    :background-color="varaibles.menuBg"
    :text-color="varaibles.menuText"
    :active-text-color="varaibles.menuActiveText"
    :collapse="collapse"
  >
    <el-menu-item index="/dashboard">
      <template #title>侧边导航</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import varaibles from "@/style/variables.module.scss"

const collapse = ref(false)
const route = useRoute()
const defaultActive = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped></style>
