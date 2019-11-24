import {debounce} from './utils'
import {POP, NEW, SELL} from "./const";
export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      newRefresh: null,
    }
  },
  mounted() {
    
    this.newRefresh = debounce(this.$refs.scroll.refresh,500)

    this.itemImageListener = () => {
      this.newRefresh()
    }
    // console.log('wang')
    this.$bus.$on('itemImageLoad',this.itemImageListener)
  }
}

export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    listenShowBackTop(position) {
      this.showBackTop = -position.y > 1000
    },
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
