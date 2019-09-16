<template>
  <a v-if="isExternalLink == true || !isMainProject" :href="href">{{title}}</a>
  <router-link v-else :to="href">{{title}}</router-link>
</template>

<script>
export default {
  name: "link-component",
  props: ['isExternalLink', 'href', 'title'],
  data() {
    return {
      isMainProject : false, // 标识当前是否主工程，根据此标识判断链接类型（外链a标签还是route-link）
    };
  },
};
</script>

<style scoped lang="less">
  
</style>
