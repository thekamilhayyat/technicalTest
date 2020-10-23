<template>
  <div
    data-aos="fade-down"
    data-aos-duration="2000"
    class="linear">
    <div class="d-flex justify-start align-start">
      <!-- v-model="skillValue" -->
      <v-progress-linear
        :value="skillValue"
        class="linearBar"
        :color="getColor(skillValue)"
        height="8">
      </v-progress-linear>
      <div class="conditionalValues">
        <v-icon
          v-if="skillValue >50"
          :color="skillValue == 100 ? 'success' : 'error'"
          size="14">
          {{ `mdi-${dynamicIcons}` }}
        </v-icon>
        <p
          v-else
          class="skillValue">
          {{ skillValue }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    skillValue: {
      type: Number,
      default: 50
    }
  },
  computed: {
    dynamicIcons () {
      if (this.skillValue == 100) {
        return "check-circle"
      } else {
        return "close-circle"
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
.linear{
  margin-left: 100px;
  padding-top: 50px;
}
.v-progress-linear{
border-radius: 8px !important;
margin-top: 8px;
background: rgba(0, 0, 0, 0.04);
width: 320px ;
}
.conditionalValues{
  padding-left: 7px;
  .skillValue{
    color: #000000;
    opacity: 45%;
    font-size: 14px;
    font-family: Noto Sans JP;
  }
}
</style>
