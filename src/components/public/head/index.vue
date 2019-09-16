<template>
    <div class="header">
        <Header class="headerTop" />
        <Nav class="headerBottom" />
    </div>
</template>
<script>
import Header from './header'
import Nav from './nav'
export default {
  components: {
    Header,
    Nav
  },
  mounted(){
  }
}
</script>
<style lang="less">
.header{
    position: fixed;
    z-index: 999;
    width: 100%;
    top: 0;
}
</style>