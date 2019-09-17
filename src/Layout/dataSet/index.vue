<template>
  <div class="data-set-wrap">
    <!-- 选择标签 -->
    <div class="tag-select w-100 bg-fbf mt-30 px-32 py-20">
      <tag-select ref="hangye" label="行业标签" :tags="tags1" @tagSelect="tagSelect1"></tag-select>
      <tag-select ref="yingyong" @tagSelect="tagSelect2" label="应用标签" :tags="tags1"></tag-select>
      <tag-select ref="shuju" @tagSelect="tagSelect3" label="数据标签" :tags="tags1"></tag-select>
    </div>
    <!-- 已选标签 -->
    <div
      class="tag-model w-100 bg-fbf mt-30 px-32"
      v-if="tags.hangye || tags.yingyong || tags.shuju"
    >
      <tag-has-select @deleteTag="deleteTag" :tags="tags"></tag-has-select>
    </div>
    <!-- 热门过滤 -->
    <div class="tag-selected w-100 bg-fbf mt-30 pr-32 py-16 d-flex">
     <div class="flex-1  lh-40">
          <span class="tag-selected-btn fs-16" @click="sort='type'" :class="sort=='type'?'active':''">综合</span>
      <span class="tag-selected-btn fs-16 " @click="sort='browseCount'" :class="sort=='browseCount'?'active':''">最热</span>
      <span class="tag-selected-btn fs-16" @click="sort='createDate'" :class="sort=='createDate'?'active':''">最新</span>
      <span class="tag-selected-info fs-16" >共999999条数据</span>
     </div>
        <div class="search mr-20 d-flex ai-center fs-14">
          <input
            type="text"
            class="ml-20 fs-16"
            v-model="dataSetQueryStr"
            placeholder="搜索数据集"
            @keypress.13="searchDataSet"
          />
          <i class="iconfont icon-sousuo text-000 searchUserBtn mr-4" @click="searchDataSet"></i>
        </div>
    </div>
    <!-- 结果 -->
    <div class="data-set-items w-100 my-30">
      <data-set-card v-for="i in 6" :key="i"></data-set-card>
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
  </div>
</template>

<script>
import TagSelect from "../components/TagSelect";
import TagHasSelect from "../components/TagHasSelect";
import DataSetCard from '../components/DataSetCard'
export default {
  name: "dataSet",
  components: {
    TagSelect,
    TagHasSelect,
    DataSetCard
  },
  data() {
    return {
      tags: {
        hangye: "",
        yingyong: "",
        shuju: ""
      },
      sort: "type",
      dataSetQueryStr:'',
      tags1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      //分页信息
      dataPage: {
        totalSize: 1,
        pageNo: 1,
        totalPage: 1,
        pageSize: 8
      },
    };
  },
  methods: {
    tagSelect1(tag) {
      this.tags.hangye = tag;
    },
    tagSelect2(tag) {
      this.tags.yingyong = tag;
    },
    tagSelect3(tag) {
      this.tags.shuju = tag;
    },
    deleteTag(tagName) {
      this["tags"][tagName] = "";
      this.$refs[tagName].clearSelect();
    },
    /**
     * 搜索数据集
     */
    searchDataSet(){

    },
    listPageChangeHandle(){

    }
  }
};
</script>

<style lang="less" scoped>
.data-set-wrap {
  .tag-select {
    min-height: 1.1rem;
  }

  .tag-model {
    // height: 70px;
  }

  .tag-selected {
     
    .tag-selected-btn {
      margin-left: 0.1667rem;
    //   display: inline-block;
      color: #333;
      cursor: pointer;
      
      &.active {
        color: #005aaa;
      }
    }
      .tag-selected-info {
      margin-left: 0.1667rem;
      display: inline-block;
      color: #333;

     
    }
     .search {
         width: 1.5625rem;
    height: 0.2083rem;
    
    border: 1px solid #E5E5E5;
    input {
      height: 0.1883rem;
      width: 1.3rem;
      border: none;
    }
    .searchUserBtn {
      cursor: pointer;
    }
  }
  }

  .data-set-items {
    min-height: 500px;
  }
}
</style>