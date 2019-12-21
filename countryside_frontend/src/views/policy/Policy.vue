<template>
  <div id="policy">
    <policy-title-bar></policy-title-bar>
  </div>
</template>

<script>
  import PolicyTitleBar from "../../components/content/policy/PolicyTitleBar";
  export default {
    name: "Policy",
    components: {PolicyTitleBar}
  }
</script>

<style scoped>
  #policy {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>