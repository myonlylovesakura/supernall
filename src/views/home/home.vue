<template>
  <div id="home">
    <div class="home-nav"><nav-bar></nav-bar></div>
    <tab-control :titles="['流行','新款','精选']"
                   class="tab-control"
                   @tabClick="tabClick"
                   ref="tabControl1"
                   v-show="isTabFixed"></tab-control>
    <scroll class="content"
            ref="scroll" 
            :probe-type='3'
            @scroll="contentScroll"
            @pullUpLoad="loadMore"
            :pullUpLoad="true">
      <home-swiper :banners="banners" @swpierImageLoad.once="swpierImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']"
                   class="tab-control"
                   @tabClick="tabClick"
                   ref="tabControl2">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
   <ul>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
      <li>wwwwwwwwwwwwwww</li>
  </ul>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>

  </div>
</template>

<script>

import HomeSwiper from './childrenComps/HomeSwiper'
import RecommendView from './childrenComps/RecommendView'
import FeatureView from './childrenComps/FeatureView'

import NavBar from 'components/common/navbar/navBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {
  getHomeMultidata,getHomeGoods
       } from 'network/home'

import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'home',
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    Scroll
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop',
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata()
    // 请求Goods数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    // 监听item图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on('itemImageLoad',() => {
      refresh()
    })

    // 获取tabControl的offsetTop
    // 所有的组件后又一个属性$el: 用于获取元素
    
  },
  methods: {
    // 防抖函数
    debounce(func,delay) {
      let timer = null
      return function() {
        if(timer) clearTimeout(timer)

        timer = setTimeout(() => {
          func.apply(this,args)
        },delay)
      }
    },
    /* 事件监听 */
    tabClick(index) {
      switch (index) {
        case 0: 
        this.currentType = 'pop'
        break
        case 1: 
        this.currentType = 'new'
        break
        case 2: 
        this.currentType = 'sell'
        break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
      // console.log('backTop')
    },
    contentScroll(position) {
      // 判断backTop是否显示
      // console.log('position')
      this.isShow = (-position.y) > 1000

      // 判断tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },

    // 加载更多
    loadMore(){
      console.log('loadmore')
      this.getHomeGoods(this.currentType)
    },

    swpierImageLoad() {
      // console.log(this.$refs.tabControl2.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /* 网络请求 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      // console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list

      this.$refs.scroll.finishPullUp()
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
      })
    }
  },
  actived() {
    this.$ref.scroll.scrollTo(0,this.saveY,0)
  },
  deactived() {
    this.saveY = -this.$refs.scroll.getScrollY()
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
  #home {
    margin-top: 44px;
    height: 100vh;
    /* position: relative; */
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: relative;
    z-index: 9;
    /* z-index: 9;
    position: sticky;
    top: 44px; */
  }
  .content {
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>