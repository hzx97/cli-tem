<template>
  <div class="d-flex data-set-card w-100 mt-30">
    <div class="bg ml-16 mt-24"></div>
    <div class="d-flex flex-column mx-18 my-24 jc-between flex-1">
      <div class="title">
           <span
          class="title-main fs-30 text-005 lh-32"
        >国际货币基金组织数据国际货币基金组织数据国际货币基金组织数据国际货币基金组织数据国际货币基金组织数据国际货币基金组织数据</span>
        
        
      </div>
      <p
        class="fs-18 text-333 lh-20 bg-info"
      >国际货币基金组织公布的有关国际金融，债务利率，外汇储备，商品价格和投资的数据国际货币基金组织公布的有关国际金融，债务利率，外汇储备，商品价格和投资的数据国际货国际货币基金组织公布的有关国际金融，债务利率，外汇储备，商品价格和投资的数据国际货币基金组织公布的有关国际金融，债务利率，外汇储备，商品价格和投资的数据国际货币基金组织公布的有关国际金融，债务利率，外汇储备，商品价格和投资的数据币基金组织公布的有关国际金融，债务利率，外汇储备，商品价格和投资的数据</p>
      <p class="fs-18 lh-18 text-333">
        <i class="iconfont icon-shijian fs-18   text-8a8"></i>
        <span class="ml-12">2018-10-28</span>

         <i class="iconfont icon-yonghu2 fs-18 ml-30   text-8a8"></i>
        <span class="ml-12">adminadmin</span>

            <i class="iconfont icon-zuixiaohua fs-18 ml-30   text-8a8"></i>
        <span class="ml-12">456mb</span>

            <i class="iconfont icon-redu fs-18 ml-30  text-8a8"></i>
        <span class="ml-12">3242342</span>
      </p>
    </div>
    <div class="card-right-tag bg-95c h-100 text-center d-flex ai-center">
      <span class="fs-16 text-fff">官方</span>
    </div>
  </div>
</template>

<script>
export default {
    name:'allCard'
}
</script>


<style lang="less" scoped>
.data-set-card {
  
  background: rgba(255, 255, 255, 1);
  height: 0.9375rem;
  .bg {
    width: 0.6875rem;
    height: 0.6875rem;
    background-color: pink;
  }
  &:hover {
    box-shadow: 0px 10px 15px 1px rgba(0, 0, 0, 0.11);
    border-top: 1px solid #005AAA;
  }
  .card-right-tag {
    width: 0.1563rem;
  }
  .bg-info {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .title {
      height: 0.16rem;
       overflow: hidden;
    .title-main {
       
        display: inline-block;
    
      text-overflow: ellipsis;
      white-space: no-wrap;
    }
  }
}
</style>