<template>
  <div class="studio">
    <div class="hotCaseInner">
      <hot-case></hot-case>
    </div>
  </div>
</template>

<script>
import HotCase from '_c/HotCase'
export default {
  components:{
    HotCase
  }
}
</script>

<style lang="scss" scoped>
  .studio {
    width: 100%;
    border: 1px solid #000;
    text-align: center;
    height: 300px;
    
    .hotCaseInner {
      width: 70%;
       border: 1px solid #000;
      height: 100%;
      margin: 0 auto;
      position: relative;
    }
  }
</style>

