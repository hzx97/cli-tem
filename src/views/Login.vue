<template>
 <div>
    <button @click="loginHandle">登录</button>
    <img :src="items.img" alt="">
 </div>
</template>

<script>
import {login} from '@/api/user'
export default {
  data(){
    return {
      username:'huangsir',
      items:{}
    }
  },
  methods:{
    async loginHandle(){
     const {data} = await  login(this.username)
     console.log(data)
     this.items = data
    }
  }
}
</script>

<style>

</style>
