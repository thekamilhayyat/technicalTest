import store from "../../store/index"

const defaultOptions = {
  type: "success",
  title: null,
  closeText: "Ok",
  timeout: 3000,
  callback: null
}

const toaster = {
  success (msgToShow, options) {
    this.open({
      ...defaultOptions,
      ...options,
      type: "success",
      text: msgToShow
    })
  },
  error (msgToShow, options) {
    this.open({
      ...defaultOptions,
      ...options,
      type: "error",
      text: msgToShow
    })
  },
  open (params) {
    if (!params.text) {return console.error("[toast] no text supplied")}

    const options = {
      ...defaultOptions,
      ...params
    }

    store.commit("addNotification", options)
  }
}

export default {
  install (Vue) {
    Vue.prototype.$toast = toaster
  }
}
