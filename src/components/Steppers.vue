<template>
  <div
    data-aos="fade-up"
    data-aos-duration="2000"
    class="steppers">
    <div class="text-right pr-8">
      <v-btn
        tile
        icon
        text
        small
        @click="reset">
        <v-icon color="primary">
          mdi-restore
        </v-icon>
        <small class="text-capitalize">Refresh </small>
      </v-btn>
    </div>
    <div class="d-flex justify-start align-start">
      <div>
        <div
          class="step"
          :class="active1 ? 'br' : 'primary '"
          @click="step1">
          <v-icon
            v-if="active1"
            :size="18">
            mdi-check
          </v-icon>
          <span
            v-else
            :class="active1 ? '' : 'cw'">1</span>
        </div>
        <div class="vl"></div>
        <div
          class="step"
          :class="[active2 ? 'br' : '', inActive ? 'primary white--text' : '']"
          @click="step2()">
          <v-icon
            v-if="active2"
            :size="18">
            mdi-check
          </v-icon>
          <span
            v-else
            :class="inActive ? 'white--text' : 'text--disabled'">2</span>
        </div>
        <div class="vl"></div>
        <div
          class="step"
          :class="[active3 ? 'br' : '', inActive2 ? 'primary white--text' : '']"
          @click="step3()">
          <v-icon
            v-if="active3"
            :size="18">
            mdi-check
          </v-icon>
          <span
            v-else
            :class="inActive2 ? 'white--text' : 'text--disabled'">3</span>
        </div>
      </div>
      <div>
        <div class="content">
          <p
            :class="!active1 ? 'cfw' : ''"
            class="_title">
            Step 1
          </p>
          <p
            :class="!active1 ? 'cc' : ''"
            class="_subTitle">
            Information Level 1
          </p>
        </div>
        <div class="content cp">
          <p
            :class="inActive ? 'cfw' : ''"
            class="_title">
            Step 2
          </p>
          <p
            :class="inActive ? 'cc' : ''"
            class="_subTitle">
            Information Level 2
          </p>
        </div>
        <div class="content cp">
          <p
            :class="inActive2 ? 'cfw' : ''"
            class="_title">
            Step 3
          </p>
          <p
            :class="inActive2 ? 'cc' : ''"
            class="_subTitle">
            Information Level 3
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      active1: false,
      active2: false,
      active3: false,
      inActive: false,
      inActive2: false
    }
  },
  methods: {
    step1 (){
      if (!this.active3){
        this.active1 = true
        this.inActive = true
      }
    },
    step2 (){
      if (this.active1){
        this.active2 = true
        this.inActive = false
        if (!this.active3){
          this.inActive2 = true
        }
      }
    },
    step3 (){
      if (this.active2){
        this.active3 = true
        this.inActive2 = false
        this.inActive = false
      }
    },
    reset (){
      this.active1 = false,
      this.active2 = false,
      this.active3 = false,
      this.inActive = false,
      this.inActive2 = false
    }
  }
}
</script>

<style lang="scss" scoped>
.steppers{
  margin-left: 230px;
  margin-top: 30px;
  padding-bottom: 50px;
}
.vl {
  width: 1px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin: 8px 0 8px 15px;

}
.step{
  text-align: center;
  width: 32px;
  height: 32px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 100%;
  span{
    margin-top: 10px !important;
    font-family: Noto Sans JP;
    font-weight: 400;
    font-size: 14px;
    // color: rgba(0, 0, 0, 0.25);
  }
  .v-icon{color: #006D75;}
}
.content{
  // padding-top: 5px;
  padding-left: 8px;
  text-align: left;
._title{
  font-family: Noto Sans JP;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  font-size: 16px !important;
}
._subTitle{
  padding-top: 5px;
  font-family: Noto Sans JP;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px !important;
}
}
</style>
