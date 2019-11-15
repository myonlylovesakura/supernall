<template>
  <div class="wrapper">
    <div >
    <h2>分类</h2>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <div class="content"></div>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>
    <li>wangfeng</li>

  </div> 
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'category',
  data() {
    return {
      bs: null
    }
  },
  created() {
    /* let bs = new BScroll('.content',{
    })
    this.bs = bs */
  },
  // 组件创建后调用
  mounted() {
    this.bs = new BScroll('.wrapper',{
      probeType: 3,
      pullUpLoad: true,
    })

    this.bs.on('scroll',(position) => {
      console.log(position);
    })

    this.bs.on('pullingUp',() => {
      console.log('加载更多')
      setTimeout(() => {
        bscroll.finishPullUp()
      },3000)
    })
  }
}
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: rebeccapurple;
}
</style>