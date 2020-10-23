export default {
  mutate (state, payload) {
    state[payload.property] = payload.with
  },
  addNotification (state, payload) {
    if (!state.notifications) {
      state.notifications = []
    }
    state.notifications.push(payload)
  },
  notificationShown (state) {
    // if (state.notifications && state.notifications.length > 0) {
    state.notifications.shift()
    // }
  }
}
