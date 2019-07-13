<template>
  <div>
    <el-card>
      <el-form v-model="model">
        <el-form-item label="用户名">
          <el-input v-model="model.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginHandle">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async loginHandle() {
      try {
        await this.$store.dispatch("user/login", this.model);
        this.$router.push({ path: "/" });
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>

<style>
</style>
