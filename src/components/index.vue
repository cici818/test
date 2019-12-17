<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="#/" class="router-link-active">首页</a> &gt;
        <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="wrap-box">
          <div class="left-220" style="margin: 0px;">
            <div class="banner-nav">
              <ul>
                <!-- catelist -->
                <li v-for="(item,i) in catelist" :key="i">
                  <h3>
                    <i class="iconfont icon-arrow-right"></i>
                    <span>{{item.title}}</span>
                    <p>
                      <span v-for="(it,index) in item.subcates" :key="index">{{it.title}}&nbsp;</span>
                    </p>
                  </h3>
                  <div class="item-box">
                    <dl>
                      <dt>
                        <a href="/goods/40.html">手机数码</a>
                      </dt>
                      <dd>
                        <a href="/goods/43.html">手机通讯</a>
                        <a href="/goods/43.html">摄影摄像</a>
                        <a href="/goods/43.html">存储设备</a>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--幻灯片-->
          <div class="left-705">
            <div class="banner-img">
              <div id="focus-box" class="focus-box">
                <!-- <ul class="slides"> -->

<!-- div生成 -->
                  <el-carousel height="341px">
                    <el-carousel-item v-for="(item,index) in sliderlist" :key="index">
                      <a href="/goods.html">
                      <img style="width: 100%;height:100%;" :src="item.img_url" draggable="false" />
                    </a>
                    </el-carousel-item>
                  </el-carousel>



                  <!-- sliderlist -->
                  <!-- <li
                    v-for="(item,index) in sliderlist"
                    :key="index"
                    class
                    style="width: 705px;height:341px; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1; background:red "
                  >
                    <a href="/goods.html">
                      <img style="width: 100%;height:100%;" :src="item.img_url" draggable="false" />
                    </a>
                  </li> -->
                <!-- </ul> -->
                <ol class="flex-control-nav flex-control-paging">
                  <li>
                    <a class>1</a>
                  </li>
                  <li>
                    <a class="flex-active">2</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <!--/幻灯片-->
          <div class="left-220">
            <ul class="side-img-list">
              <!-- toplist -->
              <li v-for="(item,i) in toplist" :key="i">
                <div class="img-box">
                  <label>{{i+1}}</label>
                  <img :src="item.img_url" />
                </div>
                <div class="txt-box">
                  <router-link :to="'/goodsinfo/'+item.category_id" >{{item.title}}</router-link>
                 
                  <span>{{item.add_time}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-for="(item,index) in chanpinfenlei" :key="index">
      <div class="main-tit">
        <h2>{{item.catetitle}}</h2>
        <p>
          <a
            v-for="(it,en) in item.level2catelist"
            :key="en"
            href="/goods/43.html"
          >{{it.subcatetitle}}</a>
          <!-- <a href="/goods/43.html">摄影摄像</a> -->
          <a href="/goods/40.html">
            更多
            <i>+</i>
          </a>
        </p>
      </div>
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <ul class="img-list">
            <li v-for="(it,i) in item.datas" :key="i">
              <router-link :to="'/goodsinfo/'+it.artID" class>
                <div class="img-box">
                  <img :src="it.img_url" />
                </div>
                <div class="info">
                  <h3>{{it.artTitle}}</h3>
                  <p class="price">
                    <b>{{it.sell_price}}</b>元
                  </p>
                  <p>
                    <strong>库存 {{it.stock_quantity}}</strong>
                    <span>
                      市场价：
                      <s>{{it.market_price}}</s>
                    </span>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      catelist: [],
      sliderlist: [],
      toplist: [],
      chanpinfenlei: []
    };
  },
  created() {
    // 获取上部分轮播图
    axios
      .get("http://134.175.59.248:8899/site/goods/gettopdata/goods")
      .then(data => {
        this.catelist = data.data.message.catelist;
        this.sliderlist = data.data.message.sliderlist;
        this.toplist = data.data.message.toplist;
        window.console.log(this.toplist);
      });

    // 商品首页按照分类分组获取数据
    axios
      .get("http://134.175.59.248:8899/site/goods/getgoodsgroup")
      .then(data => {
        window.console.log(data);
        this.chanpinfenlei = data.data.message;
      });
  },
  methods: {}
};
</script>