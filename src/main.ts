import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "normalize.css/normalize.css"
import "./style/index.scss"
import { createPinia } from "pinia"
import element from "./plugins/element"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import "uno.css"

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate) //安装持久化插件
app.use(router)
app.use(pinia)
app.use(element)
app.mount("#app")
