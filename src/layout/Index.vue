<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      侧边导航
      <!-- <sidebar></sidebar> -->
    </div>
    <div class="main-container">
      <div class="header">
        <!--  上边包含收缩的导航条 -->
        <navbar>导航条-1</navbar>
        <div class="tags-view">导航条-2</div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-wrapper {
  @apply text-red;
}
</style>
