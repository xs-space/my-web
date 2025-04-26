<template>
  <el-button type="primary">按钮</el-button>

  <svg-icon
    icon-name="ant-design:apple-filled"
    custom-class="text-blue-100"
    @click="handle"
  ></svg-icon>

  <svg-icon
    icon-name="token-branded:1art"
    custom-class="text-red"
    @click="handle"
  ></svg-icon>

  <svg-icon
    icon-name="https://zishui.oss-cn-beijing.aliyuncs.com/BugFilled.svg"
    custom-class="text-blue-100"
    @click="handle"
  ></svg-icon>
</template>

<script lang="ts" setup>
const { proxy } = getCurrentInstance()!

const handle = () => {
  proxy?.$message("This is a message")
}
</script>
