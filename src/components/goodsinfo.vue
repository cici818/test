<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <img :src="goodsinfo.img_url" alt />
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <!-- <div class="el-input el-input--small">  -->
                        <!-- element,计数器 -->
                        <el-input-number
                          v-model="num"
                          :min="1"
                          :max="10"
                          label="描述文字"
                        ></el-input-number>

                        <!-- </div> -->
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a
                      href="javascript:;"
                      @click="selected='shangpinxiangqing'"
                      :class="{selected:selected=='shangpinxiangqing'}"
                    >商品介绍</a>
                  </li>
                  <li>
                    <a
                      href="javascript:;"
                      @click="selected='shangpinpinglun'"
                      :class="{selected:selected=='shangpinpinglun'}"
                    >商品评论</a>
                  </li>
                </ul>
              </div>
              <div
                class="tab-content entry"
                style="display: block;"
                v-show="selected=='shangpinxiangqing'"
                v-html="goodsinfo.content"
              ></div>

              <div class="tab-content" v-show="selected=='shangpinpinglun'" style="display: block;">
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                          v-model.trim="txtContent"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="getcontent"
                        />
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li>
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>匿名用户</span>
                          <span>2017/10/23 14:58:59</span>
                        </div>
                        <p>testtesttest</p>
                      </div>
                    </li>
                    <!-- <li>
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>匿名用户</span>
                                                    <span>2017/10/23 14:59:36</span>
                                                </div>
                                                <p>很清晰调动单很清晰调动单</p>
                                            </div>
                    </li>-->
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <el-pagination
                     @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage"
                      :page-sizes="[10, 20, 30, 40]"
                      :page-size="10"
                      layout="sizes, prev, pager, next"
                      :total="150"
                    ></el-pagination>
                    <!-- <div id="pagination" class="digg">
                      <span class="disabled">« 上一页</span>
                      <span class="current">1</span>
                      <span class="disabled">下一页 »</span>
                    </div>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(item,index) in hotgoodslist" :key="index">
                    <div class="img-box">
                      <router-link :to="'/goodsinfo/'+item.id">
                        <img :src="item.img_url" />
                      </router-link>
                    </div>
                    <div class="txt-box">
                      <router-link :to="'/goodsinfo/'+item.id">{{item.title}}</router-link>
                      <span>{{item.add_time}}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "goodsinfo",
  data() {
    return {
      goodsinfo: {},
      hotgoodslist: [],
      imglist: [],
      selected: "shangpinxiangqing",
      num: 1,
      txtContent: "",
      currentPage: 2,
       
    };
  },

  created() {
    this.getInfo();
  },
  watch: {
    "$route.params.id"() {
      this.getInfo();
    }
  },
  computed: {},
  methods: {
    getInfo() {
      axios
        .get(
          `http://134.175.59.248:8899/site/goods/getgoodsinfo/${this.$route.params.id}`
        )
        .then(data => {
          this.goodsinfo = data.data.message.goodsinfo;
          this.hotgoodslist = data.data.message.hotgoodslist;
          this.imglist = data.data.message.imglist;
          this.num = 1;
        });
    },
    getcontent() {
      // 获取评论
      if (this.txtContent.length !== 0) {
        axios
          .post(
            `http://134.175.59.248:8899/site/validate/comment/post/goods/${this.$route.params.id}`,
            { commenttxt: this.txtContent }
          )
          .then(data => {
            this.$message({
              message: "恭喜你，发表成功",
              type: "success"
            });
            window.console.log(data);
          });
      } else {
        this.$message.error("内容有敏感字,请重新评论");
      }
    },
 
    handleSizeChange(val) {
       window.console.log(`每页 ${val} 条`);
      },
   handleCurrentChange(val) {
     axios.get
        window.console.log(`当前页: ${val}`);
      }

  }
};
</script>