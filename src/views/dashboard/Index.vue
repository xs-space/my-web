<template>
  <el-button type="primary">按钮</el-button>
  <HelloWorld msg="hi"></HelloWorld>
  <el-button @click="handle"></el-button>
</template>

<script lang="ts" setup>
const { proxy } = getCurrentInstance()!

const a = ref(0)
console.log(a.value)
const handle = () => {
  proxy?.$message("This is a message")
}
</script>
