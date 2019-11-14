<template>
      <tab-bar>
      <tab-bar-item path="/home">
      <!-- 如果给路径取别名 src其那还需要加一个~ import的路径中不需要 -->
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar'
import tabBarItem from 'components/common/tabbar/tabBarItem'
export default {
  name: 'mainTabBar',
  components: {
    tabBar,
    tabBarItem,
  }
}
</script>

<style scoped>

</style>