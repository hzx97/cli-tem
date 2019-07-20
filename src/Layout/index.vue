<template>
  <div>
    <h1>头部</h1>
    <el-button @click="logout">退出登录</el-button>
    <nav>
      <ul>
        <router-link
          :to="i.path"
          tag="li"
          v-for="(i,index) in homeRouter[0].children"
          :key="index"
        >{{i.name}}</router-link>
      </ul>
    </nav>
   
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  computed: {
    ...mapGetters(["routes"]),
    homeRouter() {
      return this.routes.filter(item => {
        if (item.name === "main") {
          return true;
        }
      });
    }
  },
  methods:{
    async logout(){
     await this.$store.dispatch('user/logout')
     this.$router.push('/login')
    }
  }
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
