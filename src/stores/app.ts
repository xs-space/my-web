export const useAppStore = defineStore("app", () => {
  const state = reactive({
    sidebar: {
      opend: true
    }
  })

  const sidebar = computed(() => state.sidebar)
  const toggleSidebar = () => {
    state.sidebar.opend = !state.sidebar.opend
  }

  return { sidebar, toggleSidebar }
})
