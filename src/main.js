import Antd, { message } from "ant-design-vue"
import "ant-design-vue/dist/reset.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
message.config({
  top: "100px",
  duration: 3,
  maxCount: 3
})

const app = createApp(App)

app.use(Antd)
app.use(router)
app.use(message).provide("message", message)
// app.use(Router);
// app.use(store);
app.mount("#app")
