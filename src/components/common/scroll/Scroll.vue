<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

	export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 1,
      },
      pullUpLoad: {
        type: Boolean,
        default: false,
      }
    },

    data() {
		  return {
		    scroll: {}
      }
    },

    mounted() {
      // 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        // probeType: 3, // 可以根据页面传递过来
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      })

      // 2、监听滚动对象
      this.scroll.on('scroll', position => {
        this.$emit('scroll',position)
      })

      // 监听上拉事件
      this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多')
        this.$emit('pullUpLoad')
      })
    },
    methods: {
      scrollTo(x, y, time=300){
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    }
	}
</script>

<style scoped>

</style>
