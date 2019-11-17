<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :topImages="topImages" :goods="goods"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    </scroll>
  </div>
</template>
<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetaliSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import {getDetail} from 'network/detail'

import Scroll from 'components/common/scroll/Scroll'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
    }
  },
  created() {
    // 保存传入的iid
    this.iid = this.$router.params.id

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
    })
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: aliceblue;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: aliceblue;
}
.conent {
  height: calc(100vh - 44px);
}
</style>