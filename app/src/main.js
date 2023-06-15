import Vue from "vue"
import { createPinia, PiniaVuePlugin } from "pinia"

import App from "./App.vue"
import router from "./router"
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import locale from "element-ui/lib/locale/lang/fr"

Vue.use(Element, { locale })
Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app")
