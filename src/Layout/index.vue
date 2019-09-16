<template>
  <div class="layout">
    <main-header />
    <main-nav />

    <div class="serve">
      <button class="pos-btn text-center">创建数据</button>
    </div>

    <div class="px-294">
        <tab-nav></tab-nav>
      <router-view></router-view>
    </div>
  <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from "@/components/public/head/header";
import MainNav from "@/components/public/head/nav";
import MainFooter from '@/components/public/footer/footerNav';
import TabNav from './components/TabNav'
export default {
  name: "Layout",
  components: {
    MainHeader,
    MainNav,
    MainFooter,
    TabNav
  }
};
</script>

<style lang="less" scoped>
.layout {
  .serve {
    position: relative;
    padding-top: 60px;
    height: 290px;
    background-image: url(../assets/images/main/nav.png);
    background-repeat: no-repeat;
    background-position: 50%;
   background-size: 100% 100%;
    .pos-btn {
      position: absolute;
      bottom: 60px;
      left: 50%;
      margin-left: -72px;
      cursor: pointer;
      color: #fff;
      border: none;
      border-radius: 0.026rem;
      background: #318df0;

      font-size: 16px;
      line-height: 35px;
      width: 144px;
      height: 35px;
    }
  }
}
</style>
