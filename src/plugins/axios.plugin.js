// @ts-check
import Axios from "axios"
import store from "../store/index"
import cap from "lodash/capitalize"
import get from "lodash/get"
import Vue from "vue"
export function getComponentName (url) {
  const parser = document.createElement("a")
  const searchObject = {
  }
  let queries = []
  let split = []
  let i = 0
  // Let the browser do the work
  parser.href = url
  // Convert query string to object
  queries = parser.search.replace(/^\?/, "").split("&")
  for (; i < queries.length; i++) {
    split = queries[i].split("=")
    searchObject[split[0]] = split[1]
  }

  return cap(parser.pathname.split("/").filter((r) => !!r)
    .join(" ") || "Data") + "..."
}
export default function (config) {
  Axios.interceptors.request.use((request) => {
    const pathName = getComponentName(request.url)
    if (get(request, "headers.skipLoader") != true) {
      Vue.prototype.$loading.show(`Processing ${pathName}`)

    }
    request.headers.Authorization = store.getters.authToken
    request.headers["Content-Type"] = "application/json; charset=utf-8"
    return request
  })

  Axios.interceptors.response.use((success) => {
    const pathName = getComponentName(success.config.url)
    Vue.prototype.$loading.hide(`Processing ${pathName}`)

    return Promise.resolve(success)
  }, (response) =>  {
    console.log(response.config.url)
    const pathName = getComponentName(response.config.url)
    Vue.prototype.$loading.hide(`Processing ${pathName}`)

    if (get(response, "response.status") == 401) {
      localStorage.removeItem("userToken")
      window.location = window.location
    }
    else {
      return Promise.reject(response)
    }
  })

  Axios.defaults.baseURL = `${config.API_BASE_URL}`
}
