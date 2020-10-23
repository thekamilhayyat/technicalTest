import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "@/scss/main.scss"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "@mdi/font/css/materialdesignicons.css"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..
AOS.init()

import validationRules from "./plugins/validation-rules"
Vue.use(validationRules)

import VuePageTransition from "vue-page-transition"
Vue.use(VuePageTransition)

import vuetifyToastEngine from "./plugins/toast/toast"
Vue.use(vuetifyToastEngine)

import * as $lodash from "lodash"

import loadAxiosPlugin from "./plugins/axios.plugin"

import loaderPlugin from "./plugins/loaders"
Vue.use(loaderPlugin)

Vue.config.productionTip = false
fetch("./" + process.env.BASE_URL + "/config.json")
  .then((data) => {
    return data.json()
  })
  .then((config) => {
    Vue.prototype.$config = config
    Vue.prototype.$lodash = $lodash
    loadAxiosPlugin(config)
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App)
    }).$mount("#app")
  })
  .catch((e) => {
    document.write("Unable to load config! Contact Webmaster")
    console.error(e)
  })
