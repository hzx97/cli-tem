<template>
  <div class="d-flex pr-20 tag-select-inner" :class="flag?'open':'close'">
    <div class="mt-26">
      <span class="text-333 fw-7 fs-18 label" @click="changeFlag">{{label}}：</span>
    </div>
    <div class="flex-1">
       <span class="tag-btn fs-18  px-40 ml-20 lh-30 mt-20" @click="selectTag('')" :class="activeName==''?'active':''">不限</span>
      <!-- <span class="fs-16 tag-btn mt-20 ml-20 lh-30" @click="selectTag('')" :class="activeName==''?'active':''">不限</span> -->

      <span class="tag-btn fs-18  px-40 ml-20 lh-30 mt-20" v-for="(i,index) in tags" :key="index"
      :class="activeName==i?'active':''"
       @click="selectTag(i)"
      >{{i}}</span>
    </div>
    <div class="pt-10">
      <el-button @click="changeFlag" type="text" :class="flag?'open':'close'">
        <i class="iconfont icon-xiajiantous open-i" ></i>
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagSelect",
  props: {
    label: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      flag: false,
      activeName:''
    };
  },
  methods: {
    clearSelect(){
      this.activeName =''
    },
    changeFlag() {
      this.flag = !this.flag;
    },
    selectTag(tag){
       this.activeName = tag
       this.$emit('tagSelect',tag)
    }
  }
};
</script>

<style lang="less" scoped>
.tag-select-inner {
  .label {

    display: inline-block;
    width: 0.49208rem;
    cursor: pointer;
  }
  .tag-btn {
      border-radius: 15px;
      display: inline-block;
      border:1px solid rgba(210,210,210,1);
      background: #fff;
      color: #555;
      cursor: pointer;
      &.active{
         background: #318DF0;
         color: #fff;
         border:1px solid #318DF0;
      }
   
  }

  .open-i {
   
    transition: 0.5s;
   
  }
  .open {
      transform: rotate(180deg);
    }

    &.open{

    }
    &.close {
       height: 0.34rem;
       overflow: hidden;
    }
}
</style>