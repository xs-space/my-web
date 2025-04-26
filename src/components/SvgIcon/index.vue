<template>
  <IconifyIcon
    :class="svgClass"
    :icon="iconName"
    v-if="!isExt"
    v-bind="$attrs"
  ></IconifyIcon>
  <div
    v-else
    :style="styleExternalIcon"
    :class="svgClass"
    bg-current
    v-bind="$attrs"
  ></div>
</template>

<script lang="ts" setup>
import { Icon as IconifyIcon } from "@iconify/vue"
import { isExternal } from "@/utils/validate"

const { iconName, customClass } = defineProps({
  iconName: {
    type: String,
    default: ""
  },
  customClass: {
    type: String,
    default: ""
  }
})

const isExt = computed(() => isExternal(iconName))
// class = "customClass + icon"
// 组合成的类名
const svgClass = computed(() => (customClass ? `icon ${customClass}` : "icon"))
// 通过mask 渲染svg 图标 兼容性不好，可以通过请求svg的方式来渲染
const styleExternalIcon = computed(() => ({
  mask: `url(${iconName}) no-repeat 50% 50%`,
  "-webkit-mask": `url(${iconName}) no-repeat 50% 50%`,
  "mask-size": "cover"
}))
</script>
