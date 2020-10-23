import Vue from "vue"
import VueRouter from "vue-router"
import store from "./store/index"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "page-login",
    component: () => import("./views/templates/Home.vue"),
    meta: {
      layout: "full"
    }
  },

  {
    path: "/404",
    name: "page-not-found",
    component: () => import("./views/templates/404.vue"),
    meta: {
      layout: "full"
    }
  },
  {
    path: "*",
    name: "catch-all",
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (){
    return {
      x: 0,
      y: 0
    }
  },
  routes
})

router.afterEach((from, to) => {
  store.state.routeLoaded = true
  // document.getElementById("loading-bg").style.display = "none"
})

export default router
