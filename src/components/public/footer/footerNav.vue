<template>
  <div id="footer">
    <p>© 版权所有：中国建设银行京ICP备13030780 京公网安备：110102000450<br>总行地址：中国北京西城区金融大街25号 邮编100033
    </p>
  </div>
</template>

<script>
export default {
  name: 'footer-component',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#footer {
  width: 100%;
  padding: 15px 0;
  background: #212330;
  text-align: center;
}
#footer p {
  color: white;
  line-height: 20px;
  font-size: 14px;
}
</style>
