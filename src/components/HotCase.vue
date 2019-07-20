<template>
  <div class="hotCase">
    <div class="title">
      <transition-group name="fade" mode="out-in">
        <div v-for="i in ctx" :key="i.id" v-show="curIndex==i.id" class="titleInner">
          <div class="ctx">
            <p>{{i.title}} </p>
            <span>{{i.ctx}}</span>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="card">
      <transition-group name="fade-card" mode="out-in">
        <div
          class="cardInner"
          v-for="i in imgArr"
          :key="i.id"
          v-show="curIndex==i.id"
          :style="{backgroundImage:'url(' + require(`../assets/img/studio/${i.id}.png`) + ')'}"
        >{{curIndex}}----{{i.id}}</div>
      </transition-group>
      <transition-group name="fade-card-mid" mode="out-in">
        <div
          class="tag-1"
          v-for="j in imgArr"
          :key="j.id"
          v-show="curIndex==j.id"
        >name="fade-card-mid"</div>
      </transition-group>
      <transition-group name="fade-card-left">
        <div class="tag-2" v-for="k in imgArr" :key="k.id" v-show="curIndex==k.id"></div>
      </transition-group>
      <div class="tag-3"></div>
    </div>
    <ul class="control">
      <li v-for="i in 4" :key="i" @click="curIndex = i" :class="{'control-active':curIndex==i}"></li>
    </ul>
  </div>
</template>

<script>
import "velocity-animate/velocity.ui.min.js";
export default {
  data() {
    return {
      curIndex: "1",
      ctx: [
        {
          id: "1",
          title: "基于Python的信用卡评分模型",
          ctx:
            "数据准备及数据预处理、变量选择、模型构建、模型验证、模型评估、模型部署、模型监控。"
        },
        {
          id: "2",
          title: "国际大数据分析竞赛",
          ctx:
            "IEEE ISI 是安全信息学领域的旗舰会议，于2003年首次在美国亚利桑那州图森市召开。"
        },
        {
          id: "3",
          title: "基于Pytho分模型",
          ctx:
            "IEEE IS数据准备及数据预处理、变量选择、模型构建、模型验证、模型评估、模型部署、模型监控。首次在美国亚利桑那州图森市召开。"
        },
        {
          id: "4",
          title: "TOP高校创新科技大赛 ",
          ctx:
            "促进全国高校范围内人工智能师生团队共同探索前沿领域的技术突破及应用创新。"
        }
      ],
      imgArr: [
        { id: 1, path: require("../assets/img/studio/3.png") },
        { id: 2, path: require("../assets/img/studio/2.png") },
        { id: 3, path: require("../assets/img/studio/3.png") },
        { id: 4, path: require("../assets/img/studio/1.png") }
      ],
      backgroundImage: {
        backgroundImage: "url(" + require("../assets/img/studio/2.png") + ")"
      }
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.hotCase {
  padding: 20px;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  .title {
    max-width: 300px;

    .titleInner {
      max-width: 300px;
      position: relative;
   
      .ctx {
        width: 280px;
        position: absolute;
      top: 0;
      left: 0;

        p {
          font-size: 30px;
        }
      }
    }
  }
  .control {
    width: 50px;
    height: 200px;
    padding: 0;
    background: #fff;
    border-radius: 25px;
    li {
      width: 50px;
      height: 50px;
      list-style-type: none;
      background: #fff;
      border-radius: 50%;
      &.control-active {
        background: #005fff;
      }
    }
  }
  .card {
    max-width: 400px;
    height: 200px;
    padding: 20px;
    position: relative;
    .cardInner {
      width: 340px;
      height: 200px;
      position: absolute;
      border-radius: 12px;
      top: 0px;
      left: 40px;
      z-index: 9999;
      background-size: cover;
    }
    .tag-1 {
      opacity: 0.9;
      display: inline-block;
      width: 340px;
      height: 200px;
      transform: scaleY(0.9);
      border-radius: 12px;
      background-color: rgba(285, 285, 285, 0.9);
      position: absolute;
      top: 0px;
      left: 20px;
      z-index: 999;
    }
    .tag-2 {
      opacity: 0.5;
      display: inline-block;
      width: 340px;
      height: 200px;
      transform: scaleY(0.8);
      border-radius: 12px;
      background-color: rgba(285, 285, 285, 0.5);
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 99;
    }
    .tag-3 {
   
      display: inline-block;
      width: 340px;
      height: 200px;
      transform: scaleY(0.8);
      border-radius: 12px;
      background-color: rgba(285, 285, 285, 0.5);
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 9;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  //------卡片动画
  .fade-card-enter-active,
  .fade-card-leave-active {
    opacity: .3;
    transition: all 0.7s cubic-bezier(1, 0.5, 0.8, 1) ;
  }
  .fade-card-enter,
  .fade-card-leave-to {
    transform: scale(.9);
    opacity: 0;
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1) ;
  }
  //------mid
  .fade-card-mid-enter-active,
  .fade-card-mid-leave-active {
    opacity: 0.9;
    animation: flash 0.7s cubic-bezier(1, 0.5, 0.8, 1) 0.1s;
  }
  .fade-card-mid-enter,
  .fade-card-mid-leave-to {
    opacity: .9;
  }
  @keyframes flash {
    from {
      transform: translateX(0) scaleY(0.9);
    }
    to {
      transform: translateX(20px) scaleY(1);
      opacity: 0.9;
    }
  }

  //------
  //------left
  .fade-card-left-enter-active,
  .fade-card-left-leave-active {
    opacity: 0.5;
    animation: fla 0.4s cubic-bezier(1, 0.5, 0.8, 1) 0.5s;
  }
  .fade-card-left-enter,
  .fade-card-left-leave-to {
    opacity: 0.5;
  }
  @keyframes fla {
    from {
      opacity: 0.5;
      
    }
    to {
      transform: translateX(20px) scaleY(0.9);
      opacity: 0.4;
    }
  }

  //------
}
</style>



