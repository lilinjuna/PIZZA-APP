<template>
  <div id="app">
    <div class="container">
      <appHeader></appHeader>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <div class="container">
      <div class="row">
          <div class="col-sm-12 col-md-4">
            <router-view name="orderingGuide"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="delivery"></router-view>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-view name="history"></router-view>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Header";

export default {
  name: "app",
  components: {
    appHeader
  }
};
</script>

<style >
</style>
