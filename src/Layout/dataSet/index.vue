<template>
  <div class="data-set-wrap">
    <!-- 选择标签 -->
    <div class="tag-select w-100 bg-fbf mt-30 px-32 py-20">
      <tag-select ref="hangye" label="行业标签" :tags="tags1" @tagSelect="tagSelect1"></tag-select>
      <tag-select  ref="yingyong" @tagSelect="tagSelect2" label="应用标签" :tags="tags1"></tag-select>
      <tag-select  ref="shuju" @tagSelect="tagSelect3" label="数据标签" :tags="tags1"></tag-select>
    </div>
    <!-- 已选标签 -->
    <div class="tag-model w-100 bg-fbf mt-30" v-if="tags.hangye || tags.yingyong || tags.shuju">
      <tag-has-select @deleteTag="deleteTag" :tags="tags"></tag-has-select>
    </div>
    <!-- 热门过滤 -->
    <div class="tag-selected w-100 bg-fbf mt-30">3</div>
    <!-- 结果 -->
    <div class="data-set-items w-100 bg-fbf my-30">
      {{tags.hangye}}
      {{tags.yingyong}}
      {{tags.shuju}}
    </div>
  </div>
</template>

<script>
import TagSelect from "../components/TagSelect";
import TagHasSelect from "../components/TagHasSelect";
export default {
  name: "dataSet",
  components: {
    TagSelect,
    TagHasSelect
  },
  data() {
    return {
      tags: {
        hangye: "",
        yingyong: "",
        shuju: ""
      },

      tags1: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
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
      this.$refs[tagName].clearSelect()

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
    height: 70px;
  }

  .tag-selected {
    height: 70px;
  }

  .data-set-items {
    min-height: 500px;
  }
}
</style>