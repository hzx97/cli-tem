<template>
  <div class="pb-30 my-data pt-20">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="all">
        <div class="my-data-inner d-flex flex-column jc-between" v-if="activeName=='all'">
          <all-card v-for="i in 1" :key="i"></all-card>

           <div class="d-flex jc-end ai-center w-100 pagination mt-10 mb-10">
          <!-- pageNo: 1
          pageSize: 8
          totalPage: 2
          totalSize: 9-->
          <el-pagination
            background
            @current-change="listPageChangeHandle"
            layout="prev, pager, next,total"
            :total="+dataPage.totalSize || 0"
            :current-page="+dataPage.pageNo || 0"
            :page-size="+dataPage.pageSize || 0"
            small
          ></el-pagination>
        </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的创建" name="wode">
        <div  class="my-data-inner d-flex flex-column jc-between" v-if="activeName=='wode'">wode</div>
      </el-tab-pane>
      <el-tab-pane label="他人创建" name="taren">
        <div  class="my-data-inner d-flex flex-column jc-between" v-if="activeName=='taren'">taren</div>
      </el-tab-pane>
      <el-tab-pane label="申请记录" name="apply">
        <div  class="my-data-inner d-flex flex-column jc-between pt-30" v-if="activeName=='apply'">
          <apply-table></apply-table>
           <div class="d-flex jc-end ai-center w-100 pagination mt-10 mb-10">
          <!-- pageNo: 1
          pageSize: 8
          totalPage: 2
          totalSize: 9-->
          <el-pagination
            background
            @current-change="listPageChangeHandle"
            layout="prev, pager, next,total"
            :total="+dataPage.totalSize || 0"
            :current-page="+dataPage.pageNo || 0"
            :page-size="+dataPage.pageSize || 0"
            small
          ></el-pagination>
        </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import AllCard from "./components/AllCard";
import ApplyTable from './components/ApplyTable'
export default {
  components: {
    AllCard,
    ApplyTable
  },
  data() {
    return {
      activeName: "all",
         dataPage: {
        totalSize: 1,
        pageNo: 1,
        totalPage: 1,
        pageSize: 8
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
     listPageChangeHandle(){

    }
  }
};
</script>

<style lang="less" scoped>
.my-data {
  /deep/ .el-tabs__header {
    margin: 0 0 0;
  }
  /deep/ .el-tabs__nav {
    text-align: center;
    .el-tabs__item {
      width: 140px;
      font-size: 0.1042rem;
    }
    .el-tabs__active-bar {
      background-color: #005aaa;
    }
  }
  .my-data-inner {
    min-height: 500px;
  }
}
</style>