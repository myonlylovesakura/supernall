import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'views/home/home'
import cart from 'views/cart/cart'
import category from 'views/category/category'
import profile from 'views/profile/profile'
import detail from 'views/detail/Detail'


// 1、安装router
Vue.use(VueRouter)

// 2、创建router

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: home,
  },
  {
    path: '/cart',
    component: cart,
  },
  {
    path: '/category',
    component: category,
  },
  {
    path: '/profile',
    component: profile,
  },
  {
    path: '/detail',
    component: detail,
  },
]
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

// 3、导出模块
export default router