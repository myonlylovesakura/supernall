import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 解决移动端点击延迟问题
import fastClick from 'fastclick'
// 使用懒加载
import lazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 安装toast插件
Vue.use(toast)
Vue.use(lazyLoad,{
  loading: require('./assets/img/common/placeholder.png')
})

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

