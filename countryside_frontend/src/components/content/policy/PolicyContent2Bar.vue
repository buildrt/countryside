<template>
  <div id="policyContent2">
    <div id="news1">
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
    <div id="news2">
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
    name: "PolicyContent2Bar",
  }
</script>

<style scoped>
  #policyContent2 {
    position: absolute;
    top: 115%;
    width: 90%;
    left: 5%;
    height: 50%;
    background-color: white;
    box-shadow: -8px 8px 8px rgba(0, 0, 0, 0.2);
  }
  #news1 {
    position: absolute;
    top: 3%;
    width: 48%;
    height: 95%;
    left: 1%;
    border: 1px solid rgb(220,220,220);
  }
  #news2 {
    position: absolute;
    top: 3%;
    width: 48%;
    height: 95%;
    right: 1%;
    border: 1px solid rgb(220,220,220);
  }
  #news1 table {
    position: absolute;
    width: 95%;
    height: 90%;
    top: 5%;
    left: 2.5%;
  }
  #news2 table {
    position: absolute;
    width: 95%;
    height: 90%;
    top: 5%;
    left: 2.5%;
  }
</style>