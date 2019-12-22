<template>
  <div id="policy">
    <policy-title-bar></policy-title-bar>
    <policy-nav-bar></policy-nav-bar>
    <policy-content1-bar></policy-content1-bar>
    <policy-content2-bar></policy-content2-bar>
    <div id="policyCenter">
      <img id="center_bg" src="../../assets/img/policy/center_bg.jpg">
      <img id="character2" src="../../assets/img/policy/policyCharacter2.png">
    </div>
    <policy-content3-bar></policy-content3-bar>
    <div id="policyFoot">

    </div>
  </div>
</template>

<script>
  import PolicyTitleBar from "../../components/content/policy/PolicyTitleBar";
  import PolicyNavBar from "../../components/content/policy/PolicyNavBar";
  import PolicyContent1Bar from "../../components/content/policy/PolicyContent1Bar";
  import PolicyContent2Bar from "../../components/content/policy/PolicyContent2Bar";
  import PolicyContent3Bar from "../../components/content/policy/PolicyContent3Bar";
  export default {
    name: "Policy",
    components: {PolicyContent3Bar, PolicyContent2Bar, PolicyContent1Bar, PolicyNavBar, PolicyTitleBar}
  }
</script>

<style scoped>
  #policy {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #policyCenter {
    position: absolute;
    top: 167%;
    width: 90%;
    height: 15%;
    left: 5%;
    box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
    /*border: 1px solid black;*/
  }
  #policyCenter #center_bg {
    position: relative;
    width: 100%;
    height: 100%;
  }
  #policyCenter #character2 {
    position: absolute;
    width: 20%;
    top: 20%;
    left: 40%;
    height: 60%;
  }
  #policyFoot {
    position: absolute;
    top: 245%;
    width: 100%;
    height: 15%;
    /*border: 1px solid black;*/
  }
</style>