const MyPlugin = {
  install (Vue) {
    const EventBus = new Vue({
      data () {
        return {
          loaders: []
        }
      },
      methods: {
        show (title = "Loading...") {
          this.loaders.push(title)
          this.hide(title)
        },
        hide (title = "Loading...") {
          if (this.loaders.findIndex((f) => f === title) >= 0) {
            this.loaders.splice(this.loaders.findIndex((f) => f === title), 1)
          }
        }
      }
    })
    Vue.prototype.$loading = EventBus
    Vue.prototype.showLoader = EventBus.show
    Vue.prototype.hideLoader = EventBus.hide
  }
}

export default MyPlugin
