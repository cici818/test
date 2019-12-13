import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 静态css包,全局
import "./assets/statics/site/css/style.css"

import index from "./components/index.vue"
import cart from "./components/cart.vue"
import goodsinfo from './components/goodsinfo.vue'

import VueRouter from "vue-router"
Vue.use(VueRouter)

let routes =[
  {
    path:'/',
    component:index
  },
  {
    path:'/index',
    component:index
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path:'/goodsinfo/:id',
    component:goodsinfo
  },
]

const router = new VueRouter({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
