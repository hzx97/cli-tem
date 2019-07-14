<template>
  <el-container style="height:100vh">
    <el-main>
 
        <el-row>
          <el-col
            :lg=" {span: 10, offset: 10}"
            :md=" {span: 12, offset: 6}"
            :sm=" {span: 16, offset: 4}"
          >
            <el-card>
              <el-image style="height: 36px;" :src="url" fit="scale-down"></el-image>
              <p>Hello! 欢迎登录大数据实验室</p>
              <el-form v-model="model">
                <el-form-item>
                  <el-input v-model="model.userName"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input type="password" v-model="model.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-row :gutter="20">
                    <el-col :span="18">
                      <el-input type="password" v-model="model.cap"></el-input>
                    </el-col>
                    <el-col :span="4">
                      <el-image style="height: 36px;" :src="url" fit="scale-down"></el-image>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="loginHandle" style="width:100%;">登录</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
    
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      model: {},
      url: require("@/assets/logo.png")
    };
  },
  methods: {
    async loginHandle() {
      try {
        await this.$store.dispatch("user/login", this.model);
        this.$router.push({ path: "/" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" >

.el-main {
  background: url(../assets/logo.png)  no-repeat;
  background-size: cover;
  color: #333;
  text-align: center;
  .el-card {
    margin-top: 140px;
  }
  
}
</style>

