<template>
    <div>
      <h1>layout</h1>
      <h1>{{appNameWithVersion}}22</h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name:'Layout',
  computed:{
    ...mapGetters(['appNameWithVersion'])
  }

}
</script>

<style>

</style>
