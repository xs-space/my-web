<template>
  <el-button type="primary">按钮</el-button>
  <HelloWorld msg="hi"></HelloWorld>
  <el-button @click="handle"></el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus"

const a = ref(0)
console.log(a.value)
const handle = () => {
  ElMessage("This is a message")
}
</script>
