<template>
    <ul class="w-100 d-flex text-center">
        <router-link to="/dataSet"  tag="li"><span>
                数据集
            </span></router-link>
        <router-link to="/dataLack"  tag="li">
        <span>
            实验数据湖
        </span>
        </router-link>
        <router-link to="/myData"  tag="li">
          <span>
           我的数据
        </span>
        </router-link>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
ul {
    li {
        display: flex;
        align-items: center;
        width: 33.333%;
        color: #333;
        line-height:0.125rem;
        height: 0.2604rem;
        background-color: #CEE8FE;
        font-size: 0.125rem;
        cursor: pointer;
        span {
            display: inline-block;
            width: 100%;
            border-left: 1px solid #fff;
            border-right: 1px solid #fff;
        }
        &.active {
            background-color: #005AAA;
            span {
                color : #fff;
                 border-left: 0;
            border-right:0;
            }
        }
    }
}
</style>