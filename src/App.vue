<template>
  <div>
    <v-app v-show="$store.state.routeLoaded">
      <v-main
        clipped>
        <v-container
          fluid
          class="bg">
          <vue-page-transition name="fade-in-up">
            <router-view
              :key="$route.fullPath" />
          </vue-page-transition>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">

</style>
