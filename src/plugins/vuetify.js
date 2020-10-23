import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#006D75",
        error: "#FF4D4F",
        success: "#52C41A",
        white: "#ffffff",
        grey: "#000000"

      }
    }
  }
})
