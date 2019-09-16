<template>
  <div class="d-flex pr-20 tag-select-inner" :class="flag?'open':'close'">
    <div class="mt-26">
      <span class="text-333 fw-7 fs-18 label">{{label}}：</span>
    </div>
    <div>
      <span class="fs-16 tag-btn mt-20 ml-20" @click="selectTag('')" :class="activeName==''?'active':''">不限</span>

      <span class="fs-16 tag-btn mt-20 ml-20" v-for="(i,index) in tags" :key="index"
      :class="activeName==i?'active':''"
       @click="selectTag(i)"
      >{{i}}</span>
    </div>
    <div class="pt-6">
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
  }
  .tag-btn {
    display: inline-block;
    padding: 0.0417rem 0.2083rem;
    background-color: #ffffff;
    color: #555;
    border: 1px solid rgba(210, 210, 210, 1);
    border-radius: 15px;
    cursor: pointer;
    &.active {
         background-color: #318DF0;
    color: #fff;
    border: 1px solid #318DF0;
    }
  }
  .open-i {
   
    transition: 0.3s;
   
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