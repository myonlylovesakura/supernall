<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages" :goods="goods"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-params-info  :param-info="itemParams"></detail-params-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommend" :recommend-list="recommendList"></detail-recommend-info>
    </scroll>
    <detail-bottom-bar></detail-bottom-bar>
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
    }
  },
  created() {
    // 保存传入的iid
    this.iid = this.$route.query.iid

    // 请求数据
    getDetail(this.iid).then(res => {
      // 1、顶部轮播数据
      console.log(res)
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
  position: absolute;
  height: calc(100vh - 104px);
  overflow: hidden;
}

.back-top {
    position: fixed;
    right: 10px;
    bottom: 65px;
  }
</style>