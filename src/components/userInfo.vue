<template>
  <div class="el-row">
    <div class="el-col el-col-24">
      <div class="comp">
        <div class="tmpl routeanimate">
          <div class="section">
            <div class="location">
              <span>当前位置：</span>
              <a href="/index.html">首页</a> &gt;
              <a href="#/site/member/center" class>会员中心</a>&gt;
              <a href="#/site/member/orderlist" class="router-link-exact-active">我的订单</a>
            </div>
          </div>
          <div class="section clearfix">
            <div class="left-260">
              <div class="bg-wrap">
                <div class="avatar-box">
                  <a href="/user/center/avatar.html" class="img-box">
                    <i class="iconfont icon-user-full"></i>
                  </a>
                  <h3>ivanyb</h3>
                  <p>
                    <b>注册会员</b>
                  </p>
                </div>
                <div class="center-nav">
                  <ul>
                    <li>
                      <h2>
                        <i class="iconfont icon-order"></i>
                        <span>订单管理</span>
                      </h2>
                      <div class="list">
                        <p>
                          <router-link
                            to="/userInfo/dingdanliebiao"
                            class="router-link-exact-active"
                          >
                            <i class="iconfont icon-arrow-right"></i>交易订单
                          </router-link>

                          <router-link to="/userInfo/gerenzhongxin" >
                            <i class="iconfont icon-arrow-right"></i>会员中心
                          
                          </router-link>
                         
                           <router-link to="/userInfo/jiaoyidingdan" >
                            <i class="iconfont icon-arrow-right"></i>详情
                          
                          </router-link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <h2>
                        <i class="iconfont icon-user"></i>
                        <span>账户管理</span>
                      </h2>
                      <div class="list">
                        <p>
                          <a href="#/site/member/center" class>
                            <i class="iconfont icon-arrow-right"></i>账户资料
                          </a>
                        </p>
                        <p>
                          <a href="#/site/member/center" class>
                            <i clrouter-linkss="iconfont icon-router-linkrrow-right"></i>头像设置
                          </a>
                        </p>
                        <p>
                          <a href="#/site/member/center" class>
                            <i class="iconfont icon-arrow-right"></i>修改密码
                          </a>
                        </p>
                        <p>
                          <a href="javascript:void(0)">
                            <i class="iconfont icon-arrow-right"></i>退出登录
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="right-auto">
              <router-view></router-view>
              <!-- <div class="bg-wrap" style="min-height: 765px;">
                                        <div class="sub-tit">
                                            <ul>
                                                <li class="selected">
                                                    <a href="/user/order-list.html">交易订单</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="table-wrap">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" class="ftable">
                                                <tbody>
                                                    <tr>
                                                        <th width="16%" align="left">订单号</th>
                                                        <th width="10%">姓名</th>
                                                        <th width="12%">订单金额</th>
                                                        <th width="11%">下单时间</th>
                                                        <th width="10%">状态</th>
                                                        <th width="12%">操作</th>
                                                    </tr>
                                                    <tr>
                                                        <td>BD20171025213815752</td>
                                                        <td align="left">ivanyb1212</td>
                                                        <td align="left">
                                                            <strong style="color: red;">￥7220</strong>
                                                            <br> 在线支付
                                                        </td>
                                                        <td align="left">2017-10-25 21:38:15</td>
                                                        <td align="left">
                                                            待付款
                                                        </td>
                                                        <td align="left">
                                                            <a href="#/site/member/orderinfo/12" class="">查看订单</a>
                                                            <br>
                                                            <a href="#/site/goods/payment/12" class="">|去付款</a>
                                                            <br>
                                                            <a href="javascript:void(0)">|取消</a>
                                                            <br>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div class="page-foot">
                                                
                                            </div>
                                        </div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>