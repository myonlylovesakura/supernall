<template>
    <swiper class="detail-swiper">
      <swiper-item  v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper, SwiperItem
  },
  props: {
    toImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.swiper-detail {
  height: 300px;
  overflow: hidden;
}
</style>