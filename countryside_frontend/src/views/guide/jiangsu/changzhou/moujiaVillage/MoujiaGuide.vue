<template>
  <div id="moujiaGuide">
    <guide-bar>
      <img name="titleBac" slot="titleBac" src="../../../../../assets/img/home/slider2.jpg"/>
    </guide-bar>
  </div>
</template>

<script>
  import GuideBar from "../../../../../components/content/guide/GuideBar";
  export default {
    name: "MoujiaGuide",
    components: {GuideBar}
  }
</script>

<style scoped>
  #moujiaGuide {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>