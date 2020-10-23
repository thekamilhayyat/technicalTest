<template>
  <div
    data-aos="fade-down"
    data-aos-duration="2000"
    class="py-10">
    <v-progress-circular
      :size="80"
      :width="4"
      :value="circleValue"
      :color="getColor(circleValue)">
      <v-icon
        v-if="circleValue > 50"
        :size="28">
        {{ `mdi-${dynamicIcons}` }}
      </v-icon>
      <p
        v-else
        class="circleValue">
        {{ circleValue }}%
      </p>
    </v-progress-circular>
  </div>
</template>

<script>
export default {
  props: {
    circleValue: {
      type: Number,
      default: 10
    }
  },
  computed: {
    dynamicIcons () {
      if (this.circleValue == 100) {
        return "check"
      } else {
        return "exclamation"
      }
    }
  },
  methods: {
    getColor (item) {
      if (item <= 50) {
        return "#13A8A8"
      } else if (item < 100) {
        return "#FF4D4F"
      } else if (item == 100) {
        return "#52C41A"
      }
      return "#000"
    }
  }
}
</script>

<style lang="scss" scoped>

.circleValue{
  font-family: Noto Sans JP;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px !important;
}
</style>
