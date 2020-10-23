import axios from "axios"

const payloadDefaults = {
  url: "",
  commit: "defKey",
  method: "get",
  body: null,
  respKey: null,
  onError: () => {}
}
export default {
  async doApi ({ commit }, params) {
    const payload = {
      ...payloadDefaults,
      ...params
    }
    try {
      let response = null
      switch (payload.method) {
      case "post":
        response = await axios.post(payload.url, payload.body)
        break
      case "delete":
        response = await axios.delete(payload.url)
        break
      case "patch":
        response = await axios.patch(payload.url, payload.body)
        break
      default:
        // assume it as get
        response = await axios.get(payload.url)
        break
      }
      if (payload.commit) {
        commit("mutate", {
          property: payload.commit,
          with: payload.respKey ? response.data[payload.respKey] : response.data
        })
      }
      return response.data
    } catch (error) {
      if (typeof payload.onError == "function") {payload.onError(error)}
      console.error(error)
      return null
    }
  }
}
