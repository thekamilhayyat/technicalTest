<template>
  <div>
    <v-container>
      <v-row
        align="center"
        justify="center">
        <v-col md="12">
          <h2
            data-aos="zoom-out"
            data-aos-duration="1800"
            class="text-center mainTtile">
            Technical Test
          </h2>
        </v-col>
        <v-col
          class="text-center  "
          cols="12"
          md="6">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            class="box">
            <!-- Progress-Linear -->
            <progress-linear :skill-value="50"></progress-linear>

            <!-- ToolTip -->
            <tool-tip></tool-tip>
          </div>
        </v-col>
        <v-col
          data-aos="zoom-in"
          data-aos-duration="1500"
          cols="12"
          md="6">
          <div class="box text-center">
            <!-- Progress-Circle -->
            <progress-circle :circle-value="50">
            </progress-circle>

            <!-- steeper -->
            <steppers></steppers>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProgressLinear from "@/components/ProgressLinear"
import ProgressCircle from "@/components/ProgressCircle"
import ToolTip from "@/components/ToolTip"
import Steppers from "@/components/Steppers"

export default {
  components: {
    ProgressLinear,
    ProgressCircle,
    ToolTip,
    Steppers
  }
}
</script>

<style lang="scss" scoped>

</style>
