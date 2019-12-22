<template>
  <div id="policyContent3">
    <div id="criticism1">
      <table cellspacing="0" cellpadding="0" border="0">
        <tr style="height: 33.3%">
          <td style="width: 100%;border-bottom: 1px dashed rgb(190,190,190)"></td>
        </tr>
        <tr style="height: 33.3%;">
          <td style="width: 100%;border-bottom: 1px dashed rgb(190,190,190)"></td>
        </tr>
        <tr style="height: 33.3%">
          <td style="width: 100%;"></td>
        </tr>
      </table>
    </div>
    <div id="criticism2">
      <table cellspacing="0" cellpadding="0" border="0">
        <tr style="height: 33.3%">
          <td style="width: 100%;border-bottom: 1px dashed rgb(190,190,190)"></td>
        </tr>
        <tr style="height: 33.3%;">
          <td style="width: 100%;border-bottom: 1px dashed rgb(190,190,190)"></td>
        </tr>
        <tr style="height: 33.3%">
          <td style="width: 100%;"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PolicyContent3Bar"
  }
</script>

<style scoped>
  #policyContent3 {
    position: absolute;
    top: 184%;
    width: 90%;
    left: 5%;
    height: 60%;
    background-color: white;
    box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
  }
  #criticism1 {
    position: absolute;
    top: 3%;
    width: 48%;
    height: 95%;
    left: 1%;
    border: 1px solid rgb(220,220,220);
  }
  #criticism2 {
    position: absolute;
    top: 3%;
    width: 48%;
    height: 95%;
    right: 1%;
    border: 1px solid rgb(220,220,220);
  }
  #criticism1 table {
    position: absolute;
    width: 95%;
    height: 90%;
    top: 5%;
    left: 2.5%;
  }
  #criticism2 table {
    position: absolute;
    width: 95%;
    height: 90%;
    top: 5%;
    left: 2.5%;
  }
</style>