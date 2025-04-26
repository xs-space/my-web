import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "normalize.css/normalize.css"
import "./style/index.scss"
import { createPinia } from "pinia"
import element from "./plugins/element"
import "uno.css"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(element)
app.mount("#app")
