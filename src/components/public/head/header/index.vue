<template>
  <div id="header">
    <div class="header-box">
      <div class="left">
        <img height="32px" src="@/assets/images/ccb_logo.png" alt />
        <div></div>
        <span>金融科技创新服务云平台</span>
      </div>
      <div class="right">
        <div class="search">
          <input id="input" type="text" autocomplete="off" placeholder="请输入关键词搜索" @keyup.enter="searchEnterFun" v-model="inpVal"  />
          <i class="el-icon-search" @click="searchEnterFun"></i>  
        </div>
        <div class="action" v-if="isLogin && isTokenValid">
          <div class="register"><Link ref="customLink" :href="personalCenterOverview" title="个人中心" /></div>
          <div class="logout"  @click="logout"><span>退出</span></div>
        </div>
        <div class="action" v-else>
          <div class="register"><Link :href="loginLink" title="登录" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'
  import Link from '../link'
  import getLoginStatus from '@/utils/getLoginStatus'
  export default {
    name: "header-component",
    components: {
      Link
    },
    data() {
      return {
        isMainProject: false,
        inpVal:'',
        researchList: [{
            title: '风险管理',
            link: ''
          },
          {
            title: '惠普与零售',
            link: ''
          },
          {
            title: '住房金融',
            link: ''
          },
          {
            title: '金融科技大数据',
            link: ''
          },
          {
            title: '客户关系',
            link: ''
          },
          {
            title: '资管业务财富管理',
            link: ''
          },
          {
            title: '国际金融',
            link: ''
          },
          {
            title: '领导力',
            link: ''
          },
          {
            title: '员工成长',
            link: ''
          },
        ],
        loginLink: '/user/login',
        personalCenterOverview: '/personal-center/overview', // 个人中心概览
        registerLink: '/user/register'
      };
    },
    mounted() {},
    computed: {
      ...mapState('user', {
        isLogin: state => state.loginStatus,
      }),
      isTokenValid() {
        return getLoginStatus() === '0' ? true : false;
      }
    },
    methods: {
      ...mapMutations('user', [
        'changeLoginStatus',
        'updateUserInfo'
      ]),
      ...mapActions('user', [
        'logoutAction'
      ]),
      logout() {
        const _this = this
        this.$confirm('是否确定退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 调用退出登录接口/api/fti/auth/user/logout
          _this.logoutAction()
          localStorage.clear()
          // 将vuex中登录状态置为false(其它子项目可根据项目情况修改使用方式)
          this.changeLoginStatus({
            loginStatus: false
          })
          // 重定向到主页
          window.location.replace('/')
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
        })
      },
      searchEnterFun(e){
        if(this.inpVal && !this.inpVal.match(/^[ ]*$/)) {
          const keyword = this.inpVal
          if (e.type=="keyup") {
            var keyCode = window.event? e.keyCode: e.which;
            if(keyCode == 13){
              const keyword = this.inpVal
              this.inpVal=''
              if (this.isMainProject) {
                this.$router.push({path:'/search?keyword='+keyword});
              } else {
                window.location.replace('/search?keyword='+keyword)
              }
            }
          } else {
            const keyword = this.inpVal
            this.inpVal=''
            if (this.isMainProject) {
                this.$router.push({path:'/search?keyword='+keyword});
              } else {
                window.location.replace('/search?keyword='+keyword)
              }
          }
        }
      }
    },
    created() {
    }
  };

</script>

<style scoped lang="less">
  @themeColor: rgb(0, 102, 179);
  @import url("./index");
</style>
