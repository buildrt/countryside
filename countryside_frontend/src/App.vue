<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
  @import "assets/css/base.css";
  @import "common/font/font.css";
  #app {
    width: 100%;
    position: absolute;
    height: 100%;
  }
</style>
