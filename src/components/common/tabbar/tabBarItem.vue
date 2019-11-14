<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>    
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      // /home -> item(/home) = true
      // /home -> item(/categroy) = false
      // /home -> item(/cart) = false
      // /home -> item(/profile) = false
      return this.$route.path.indexOf(this.path)
    },
    activeStyle(){
      return this.isActive ? {} : {color: this.activeColor}  
    }
  },
  methods: {
    itemClick(){
      // console.log('itemClick')
      return this.$router.replace(this.path) !== -1
    }
  }
}
</script>
<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/* .active div{
  color: rgb(173, 14, 14);
} */
</style>