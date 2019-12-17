import Vue from 'vue'
import App from './App.vue'
// 引进element的js和css文件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false
// 静态css包,全局
import "./assets/statics/site/css/style.css"

import index from "./components/index.vue"
import cart from "./components/cart.vue"
import goodsinfo from './components/goodsinfo.vue'
import userInfo from './components/userInfo.vue'
import dingdanliebiao from './components/dingdanliebiao.vue'
import gerenzhongxin from './components/gerenzhongxin.vue'
import jiaoyidingdan from './components/jiaoyidingdan.vue'


import VueRouter from "vue-router"
Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/index',
    component: index
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/goodsinfo/:id',
    component: goodsinfo
  },
  {
    path: '/userInfo',
    component: userInfo,
    children: [{
      path: 'dingdanliebiao',
      component: dingdanliebiao
    },
    {
      path: 'gerenzhongxin',
      component: gerenzhongxin
    },
    {
      path: 'jiaoyidingdan',
      component: jiaoyidingdan
    },
    ]
  },
]

const router = new VueRouter({
  routes,
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
