<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <div class="header">
        <!--  上边包含收缩的导航条 -->
        <navbar></navbar>
        <div class="tags-view">导航条-2</div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  @apply flex w-full h-full;

  .sidebar-container {
    // 跨组件设置样式
    :deep(.sidebar-container-menu:not(.el-menu--collapse)) {
      @apply w-[var(--sidebar-width)];
    }
  }

  .main-container {
    @apply flex flex-col flex-1;

    .header {
      @apply h-[84px];

      .tags-view {
        @apply h-[var(--tagsview-height)] bg-blue;
      }
    }
  }

  .main {
    @apply bg-cyan;
    min-height: calc(100vh - var(--tagsview-height) - var(--navbar-height));
  }
}
</style>
