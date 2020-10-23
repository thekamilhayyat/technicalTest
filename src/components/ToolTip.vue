<template>
  <div
    data-aos="fade-up"
    data-aos-duration="2000"
    class="toolTip">
    <v-tooltip
      class="mt-10"
      bottom
      left
      :open-on-hover="false"
      :open-on-click="true">
      <template #activator="{ on }">
        <v-btn
          small
          class="tooltipBtn"
          @click="on.click">
          Button
        </v-btn>
      </template>
      <div class="tooltipBox">
        <span class="point"></span>
        <div class="d-flex justify-start  topArea">
          <v-icon
            :size="16"
            color="#FAAD14">
            mdi-alert-circle
          </v-icon>
          <p class="_title">
            ToolTip for guided tour
          </p>
        </div>
        <div class="d-flex justify-end align-start buttons">
          <v-btn class="btnN">
            No
          </v-btn>
          <v-btn class="btnY">
            Yes
          </v-btn>
        </div>
      </div>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    test: function () {
      console.log("helloo")
    }
  }
}
</script>
<style lang="scss" scoped>
.toolTip{
  margin-top: 50px;
  padding-bottom: 130px;
}
.v-tooltip__content  {
  margin-top: 8px;
  background: #ffffff !important;
  left: 13.5% !important;
}
.tooltipBtn{
    box-shadow: none;
    border-radius: 2px !important;
    text-transform: capitalize;
    font-size: 14px !important;
    font-weight: 400;
    font-family: Noto Sans JP;
    color: #ffffff !important;
    background: #00474F !important;
    padding: 0 7px !important;
}
.tooltipBox{
  box-shadow: 0 3px 9px -4px rgba(0, 0, 0, 0.08), 0 6px 16px 0 rgba(0, 0, 0, 0.06), 0 8px 25px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  .point{
    position: absolute;
    top: -5%;
    right: 10%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 5px 6px 5px;
  border-color: transparent transparent #ffffff transparent;
  }
  padding: 16px 20px;
  .topArea{
    ._title{
      padding-left: 9px !important;
    font-size: 14px !important;
    font-weight: 400;
    font-family: Noto Sans JP !important;
    color: rgba(0, 0, 0, 0.65);
    }
  }
  .buttons{
    padding-top: 16px;
    .btnN{
      background: transparent !important;
      box-shadow: none;
      border-radius: 2px !important;
      text-transform: capitalize;
      font-size: 14px !important;
      font-weight: 400;
      margin-right: 8px ;
      height:24px;
      width: 35px;
      min-width: 35px;
      color: rgba(0, 0, 0, 0.65);
      border: 1px solid rgba(0, 0, 0, 0.15);
    }
      .btnY{
        background: #00474F !important;
      box-shadow: none;
      border-radius: 2px !important;
      text-transform: capitalize;
      font-size: 14px !important;
      font-weight: 400;
      height:24px;
      width: 41px;
      min-width: 41px;
      color: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.15);
    }

  }
}
</style>
