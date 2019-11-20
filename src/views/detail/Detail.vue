<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content"
            ref="scroll" 
            :probe-type='3'
            @scroll="contentScroll"
            :pullUpLoad="true">
      <detail-swiper :topImages="topImages" :goods="goods"></detail-swiper>
      <detail-base-info ref="base" :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop" ></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <detail-params-info ref="params"  :param-info="itemParams"></detail-params-info>
      <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommend" :recommend-list="recommendList"></detail-recommend-info>
    </scroll>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top v-show="showBackTop" @click.native="backTop" class="back-top">
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetaliSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommendInfo from './childComps/DetailRecommendInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import {getDetail,Goods,Shop,getRecommend} from 'network/detail'


import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {itemListenerMixin,backTopMixin} from '../../common/mixin'

import {debounce} from '../../common/utils'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
    BackTop,
  },
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommendList: [],
      themeTopYs: [],
    }
  },
  updated() {
      // 获取需要的四个offsetTop
      debounce(this._getOffsetTops(),500)
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.query.iid

    // 请求数据
    getDetail(this.iid).then(res => {
      // 1、顶部轮播数据
      // console.log(res)
      const data = res.result
      this.topImages = data.itemInfo.topImages 

      // 获取商品数据
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

      // 商家信息
      this.shop = new Shop(data.shopInfo)

      // 详情信息
      this.detailInfo = data.detailInfo

      // 商品参数
      this.itemParams = data.itemParams

      // 评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then((res, error) => {
      if (error) return
      this.recommendList = res.data.list
    })
  },

  methods: {
    _getOffsetTops() {
		    this.themeTops = []
        this.themeTops.push(this.$refs.base.$el.offsetTop)
        this.themeTops.push(this.$refs.params.$el.offsetTop)
        this.themeTops.push(this.$refs.comment.$el.offsetTop)
        this.themeTops.push(this.$refs.recommend.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      },
    detailImageLoad() {
      this.newRefresh()

      // this._getOffsetTops()
    },
    contentScroll(position) {
		  // 1.监听backTop的显示
      this.listenShowBackTop(position)

      // 2.监听滚动到哪一个主题
      this._listenScrollTheme(-position.y)
    },
    _listenScrollTheme(position) {
        let length = this.themeTops.length;
        for (let i = 0; i < length; i++) {
          let iPos = this.themeTops[i];
          /**
           * 判断的方案:
           *  方案一:
           *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
           *    优点: 不需要引入其他的内容, 通过逻辑解决
           *    缺点: 判断条件过长, 并且不容易理解
           *  方案二:
           *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
           *    优点: 简洁明了, 便于理解
           *    缺点: 需要引入一个较大的int数字
           * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
           * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
           */
          if (position >= iPos && position < this.themeTops[i+1]) {
            if (this.currentIndex !== i) {
              this.currentIndex = i;
            }
            break;
          }
        }
    },
    titleClick(index) {
      // console.log(this.themeTops[index]);
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100) 
    },
    addCart() {
      //1、获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.goods.iid

      // 2、将我们的商品添加到购物车
      this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product)
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100vh - 104px);
  overflow: hidden;
}

.back-top {
    position: fixed;
    right: 10px;
    bottom: 65px;
  }
</style>