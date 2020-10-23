<template>
  <v-snackbar
    v-if="currentNotification"
    v-model="open"
    bottom
    :timeout="0"
    multi-line
    :color="currentNotification.type || 'error'"
    vertical>
    <div
      class="px-2">
      <div
        v-if="currentNotification.title"
        class="mb-2 uppercase font-weight-bold">
        {{ currentNotification.title }}
      </div>
      <div
        class="txt"
        style="margin-right: 10px;">
        {{ currentNotification.text }}
      </div>
    </div>
    <v-btn
      v-if="currentNotification.closeText"
      outlined
      @click.native="onClose">
      <v-icon>
        mdi-close
      </v-icon>
      {{ currentNotification.closeText }}
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      toId1: null,
      toId2: null,
      open: false,
      currentNotification: null
    }
  },
  watch: {
    "$store.state.notifications": {
      handler () {
        this.loadNotification()
      },
      deep: true
    }
  },
  mounted () {
    this.loadNotification()
  },
  methods: {

    loadNotification () {
      if (this.$store.state.notifications.length > 0 && this.currentNotification == null) {
        this.currentNotification = {
          ...this.$store.state.notifications[0]
        }
        this.$store.commit("notificationShown")

        this.open = true
        this.close()
      }
    },

    onClose () {
      this.open = false
      if (typeof this.currentNotification.callback == "function") {
        this.currentNotification.callback()
      }
      this.currentNotification = null
      clearTimeout(this.toId1)
      clearTimeout(this.toId2)
      setTimeout(() => {
        this.loadNotification()
      }, 100)
    },
    close () {
      if (!!this.currentNotification.timeout || !this.currentNotification.callback) {
        this.toId1 = setTimeout(() => {
          this.open = false
          this.currentNotification = null
          this.toId2 = setTimeout(() => {
            this.loadNotification()
          }, 100)
        }, this.currentNotification.timeout || 3000) // wait for close animation
      }
    }
  }
}
</script>
