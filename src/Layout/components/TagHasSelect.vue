<template>
  <div class="d-flex pr-20 tag-has-select-inner">
    <div class="my-26">
      <span class="text-333 fw-7 fs-18 label">已选标签：</span>
    </div>
    <div>
      <span class="fs-16 tag-btn mt-20 ml-20" v-if="tags.hangye">
        {{tags.hangye}}
        <i class="iconfont icon-Rectangle ml-24 fs-16"  @click="deleteTag('hangye')"></i>
      </span>


      <span class="fs-16 tag-btn mt-20 ml-20"  v-if="tags.yingyong">
        {{tags.yingyong}}
        <i class="iconfont icon-Rectangle   fs-16  ml-24" @click="deleteTag('yingyong')"></i>
      </span>
      <span class="fs-16 tag-btn mt-20 ml-20"  v-if="tags.shuju">
        {{tags.shuju}}
        <i class="iconfont icon-Rectangle  fs-16  ml-24" @click="deleteTag('shuju')"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    tags: {
      type: Object,
      required: true,
    },
    
  },
  methods: {
    deleteTag(tagName) {
        this.$emit('deleteTag',tagName)
    }
  }
};
</script>

<style lang="less" scoped>
.tag-has-select-inner {
  .tag-btn {
    display: inline-block;
     padding: 0.022rem 0.022rem 0.022rem 0.22rem;
    background-color: #318df0;
    color: #fff;
    border: 1px solid #318df0;
    border-radius: 15px;
   i {
       cursor: pointer;
   }
  }
}
</style>