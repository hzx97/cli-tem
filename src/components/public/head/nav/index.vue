<template>
  <div :class="{'nav-box-opacity': isOpacityActive}">
    <div class="nav">
      <ul>
        <li>
          <div class="navs">
            <Link :href="home"
                  title="首页" />
            <!-- <p>HOME</p> -->
          </div>
        </li>
        <li>
          <div class="navs">
            <Link :href="subject"
                  title="创新课题"
                  :isExternalLink="true" />
            <!-- <a href="/ktgl/subject">创新课题</a> -->
            <!-- <p>SUBJECT</p> -->
          </div>
        </li>
        <li class="toshow parentone">
          <div class="navs">
            <a href="#">资源服务</a>
            <!-- <P>RESOURCE</P> -->
          </div>
          <div class="mark one" v-if="isResourceShow">
            <div class="w_h">
              <div id="tit">
                <span class="select">
                  <em>基础设施服务</em>
                  <em>INFRASTRUCTURE SERVICES</em>
                </span>
                <span>
                  <em>数据资源服务</em>
                  <em> DATA RESOURCE SERVICES</em></span>
                <span>
                  <em>基础资源服务</em>
                  <em> BASICE RESOURCE SERVICES</em>
                </span>
                <span>
                  <em>应用资源服务</em>
                  <em> APPLICATION RESOURCE SERVICES</em>
                </span>
              </div>
              <ul id="con">
                <li class="show">
                  <div>
                    <p>计算</p>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productcvm.html">云服务器</a>
                    </span>
                    <span><a href="https://yun.ccb.com/product/detail/productccs.html">容器服务</a></span>
                    <p style="padding-top:30px;">存储</p>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productcbs.html">云硬盘</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productcos.html">对象存储</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productcfs.html">文件存储</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productsan.html">集中式SAN存储</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productdbbackup.html">数据库备份(集团内)</a>
                    </span>
                  </div>
                  <div>
                    <p>网络</p>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productcdn.html">CDN服务 </a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productpc.html">对等连接</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productnat.html">NAT网关</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productvpn.html">VPN连接</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productdc.html">专线接入</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productTanXinGongWang.html">弹性公网IP</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productvpc.html">虚拟私有网络</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productelb.html">弹性负载均衡</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productdns.html">域名解析（集团内）</a>
                    </span>
                  </div>
                  <div>
                    <p>数据库</p>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productmysql.html">云数据库 MySQL版</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productredis.html">云数据库 Redis版</a>
                    </span>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productoracle.html">云数据库 Oracle版(集团内)</a>
                    </span>
                  </div>
                  <div>
                    <p>
                      平台应用
                    </p>
                    <span>
                      <a href="https://yun.ccb.com/product/detail/productcwls.html">WebLogic云服务(集团内)</a>
                    </span>
                  </div>
                </li>
                <li>
                  <div>
                    <p>数据资源</p>
                    <span v-for="(item, key) of dataResource"
                          :key="key">
                      <Link :href="dataResourceDomain + item.link"
                            :title="item.title"
                            :isExternalLink="item.isExternalLink" />
                    </span>
                  </div>
                </li>
                <li class="spc">
                  <div id="threemark"
                      style="width:22%">
                    <p>大数据</p>
                    <ul>
                      <li>
                        <span v-for="(item, key) of bigData"
                              :key="key">
                          <Link :href="dataResourceDomain + item.link"
                                :title="item.title"
                                :isExternalLink="item.isExternalLink" />
                          <h6 style="width:20%">{{item.desc}}</h6>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div id="threemark"
                      style="width:22%">
                    <p>人工智能</p>
                    <ul>
                      <li>
                        <span>
                          特征数据
                          <h6 style="width:20%">为您提供智能场景建模所需的特征数据引入和管理。</h6>
                        </span>
                        <span>模型研发
                          <h6 style="width:20%">集成多种机器学习和深度学习框架，为您提供开放的人工智能建模环境，支持多种编程语言的在线开发编译工具。</h6>
                        </span>
                        <span>训练任务
                          <h6 style="width:20%">您可以提交模型训练任务，查看当前在执行训练任务执行情况和进度，也可以回顾历史任务训练情况。</h6>
                        </span>
                        <span>模型中心
                          <h6 style="width:20%">模型中心提供了创新服务云平台上模型的统一管理视图，您可以便捷地查看、管理和发布模型。 </h6>
                        </span>
                        <span>标注工具
                          <h6 style="width:20%">为您提供可视化的、多人协作的标注工具，您可以便捷地对数据进行各种特定任务的标注。 </h6>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div id="threemark"
                      style="width:22%">
                    <p>区块链</p>
                    <ul>
                      <li>
                        <span>
                          区块链部署与管理
                          <h6 style="width:20%">提供区块链环境的资源供给和快速交付，支持云环境下的容器化部署区块链节点，无需关注底层的技术组件和繁琐操作，可一键创建您的区块链环境。 </h6>
                        </span>
                        <span>
                          区块链开发工具集
                          <h6 style="width:20%">提供在线的智能合约开发编译环境，提供标准的智能合约镜像和模板库，可使用形式化验证工具和自动化漏洞扫描漏洞对智能合约进行安全检测。 </h6>
                        </span>
                        <span>
                          区块链应用发布中心
                          <h6 style="width:20%">为用户提供一站式的区块链应用发布服务，支持区块链应用创建、更新、上架、下架等功能，委用户打造个性化的区块链应用发布中心。 </h6>
                        </span>
                        <span>
                          公共基础链服务
                          <h6 style="width:20%">一条面向平台用户开放的公共区块链，用户可以基于公共基础链开发个性化的智能合约，自定义发布区块链应用。</h6>
                        </span>
                        <span>
                          移动端密钥管理
                          <h6 style="width:20%">为用户提供移动端的密钥管理APP，支持密钥颁发和托管，支持扫码签名，可向第三方应用分享应用，为用户打造移动端的应用管理中心。 </h6>
                        </span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div>
                    <p>数据模型</p>
                    <span v-for="(item, key) of dataModel"
                          :key="key">
                      <Link :href="item.link"
                            :title="item.title"
                            :isExternalLink="item.isExternalLink" />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="mark two" v-else>
            <div class="w_h">
              <div id="tit">
                <span>
                  <a>敬请期待</a>
                  <em></em>
                </span>
              </div>
            </div>
          </div>
          <font></font>
        </li>
        <!-- <li class="toshow parentlast"> -->
        <li class="toshow parenttwo">
          <div class="navs">
            <!-- <Link :href="training"
                  title="实训服务"
                  :isExternalLink="true" /> -->
            <a style="cursor: pointer;">实训服务</a>
            <!-- <p>TRAINING</p> -->
          </div>
          <div class="mark two">
            <div class="w_h">
              <div id="tit">
                <span>
                  <a>敬请期待</a>
                  <em></em>
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="toshow parenttwo">
          <div class="navs">
            <a href="#">人才管理</a>
            <!-- <p>TALENT</p> -->
          </div>
          <!-- <div class="mark two" v-if="isTalentsShow"> -->
          <div class="mark two" v-if="isTalentsShow">
            <div class="w_h">
              <div id="tit">
                <span v-for="(item, key) of talent"
                      :key="key">
                  <Link :href="item.link"
                        :title="item.title"
                        :isExternalLink="item.isExternalLink" />
                  <em></em>
                </span>
              </div>
            </div>
          </div>
          <div class="mark two" v-else>
            <div class="w_h">
              <div id="tit">
                <span>
                  <a>敬请期待</a>
                  <em></em>
                </span>
              </div>
            </div>
          </div>
          <font></font>
        </li>
        <li class="toshow parenttwo">
          <div class="navs">
            <Link :href="achievement"
                  title="成果风采" />
            <!-- <a>成果风采</a> -->
            <!-- <P>ACHIEVEMENT</P> -->
          </div>
          <!-- <div class="mark two">
            <div class="w_h">
              <div id="tit">
                <span>
                  <a>敬请期待</a>
                  <em></em>
                </span>
              </div>
            </div>
          </div> -->
        </li>
        <li class="toshow parentthree">
          <div class="navs">
            <a href="#">社区服务</a>
            <!-- <P>COMMUNITY</P> -->
          </div>
          <div class="mark three">
            <div class="menus">
              <div class="bar">
                <span v-for="(item, key) of communityServices"
                      :key="key"
                      :class='item.className'>
                  <Link :href="item.link"
                        :title="item.title"
                        :isExternalLink="item.isExternalLink" />
                  <em></em>
                </span>
              </div>
            </div>
            <!-- <div class="w_h">
            <div class="w_h">
              <div id="tit">
                <span v-for="(item, key) of communityServices"
                      :key="key"
                      :class='item.className'>
                  <Link :href="item.link"
                        :title="item.title"
                        :isExternalLink="item.isExternalLink" />
                  <em></em>
                </span>
              </div>
            </div> -->
          </div>
          <font></font>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Link from '../link'
export default {
  name: 'nav-component',
  components: {
    Link
  },
  data () {
    return {
      dataModel: [ // 数据模型
        { title: '零售客户风险限额模型', link: '/' },
        { title: '信贷违约风险预测模型', link: '/' },
        { title: '交易反欺诈评分模型', link: '/' },
        { title: '信用卡营销模型', link: '/' },
        { title: '保险大数据营销模型', link: '/' },
        { title: '产品收益预测模型', link: '/' },
      ],
      home: '/', // 首页
      subject: '/ktgl/subject', // 课题管理
      training: '/', // 实训服务外链
      talent: [
        { title: "专家资源", link: '/' },
        { title: "实习生资源", link: '/' },
      ],
      achievement: '/achievement', // 成果风采
      communityServices: [ // 社区活动
        { title: '论坛', link: '/community/web/bbs/', className: '', isExternalLink: true },
        // { title: '下载', link: '', className: '' },
        // { title: '竞赛', link: '', className: 'spc' },
        // { title: '活动', link: '', className: 'spcc' },
      ],
      dataResourceDomain: '', // 数据资源链接域
      dataResource: [ // 数据资源
        { title: '金融数据', link: '/', isExternalLink: true },
        { title: '税务数据', link: '/', isExternalLink: true },
        { title: '司法数据', link: '/', isExternalLink: true },
        { title: '交通数据', link: '/', isExternalLink: true },
        { title: '房产数据', link: '/', isExternalLink: true },
        { title: '公共事业', link: '/', isExternalLink: true },
        { title: '宏观数据', link: '/', isExternalLink: true },
        { title: '其他数据', link: '/', isExternalLink: true },
      ],
      bigData: [
        { title: '数据挖掘', link: '/', isExternalLink: true, desc: '基于建行大数据云平台，提供机器学习和深度学习能力，丰富的大数据方法工具，一站式云态算力、算法、算料、平台' },
        { title: '数据可视化', link: '/', isExternalLink: true, desc: '基于云端的可视化商业智能分析服务，提供敏捷、高效、协作的企业级分析能力，支持丰富的可视化组件及主题模板，快速实现大数据智能分析' },
      ],
      isTalentsShow: false,
      isResourceShow: false,
      isOpacityActive: false,
    }
  },
  computed: {

  },
  methods: {
    jump() {
      $(document).ready(function () {
        $('.toshow').mouseover(function () {
          $(this).find('.mark').show();
        })
        $('.mark').mouseout(function () {
          $(this).hide();
        })
        $('.toshow').mouseout(function () {
          $(this).find('.mark').hide();
        })
      });
    },
    tab() {
      $('.one #tit>span').mouseover(function () {
        var i = $(this).index();
        $(this).addClass('select').siblings().removeClass('select');
        $('#con>li').eq(i).show().siblings().hide();
      });
    },
    tab2() {
      $('.two #tit>span').mouseover(function () {
        var i = $(this).index();
        // $(this).addClass('selects').siblings().removeClass('selects');
        $('.two #con>li').eq(i).show().siblings().hide();
      });
    },
    tab3() {
      $('.three #tit>span').mouseover(function () {
        var i = $(this).index();
        // $(this).addClass('selectes').siblings().removeClass('selectes');
        $('.three #con>li').eq(i).show().siblings().hide();
      });
    },
    tabs() {
      $('.bgmark #tit>span').mouseover(function () {
        var i = $(this).index();
        $(this).addClass('bgselect').siblings().removeClass('bgselect');
        $('.bgmark #con>li').eq(i).show().siblings().hide();
      });
    },
    last() {
      $('.last #tit>span').mouseover(function () {
        var i = $(this).index();
        $('.last #con>li').eq(i).show().siblings().hide();
      });
    },
    scrollEvent() {
      if (window.scrollY > 5) {
        this.isOpacityActive = true;
      } else {
        this.isOpacityActive = false;
      }
    }
  },
  created () {
  },
  mounted () {
    this.jump();
    this.tab();
    this.tab2();
    this.tab3();
    this.last()
    
    window.addEventListener('scroll', this.scrollEvent)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollEvent)
  }
}

</script>
<style scoped lang="less">
  @themeColor: rgb(0, 102, 179);
  @import url("./index");
  .menus {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    height: 100%;
    .bar {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 1200px;
      height: 100%;
      a {
        color: #fff;
        font-size: 16px;
        margin: 0 20px;
      }
      a:hover{
        color:#1dd9e2;
      }
    }
  }
  .nav-box-opacity {
    opacity: 0.8;
  }
</style>
