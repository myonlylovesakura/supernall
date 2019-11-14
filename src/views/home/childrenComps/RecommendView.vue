<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      tyoe: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
/*   .recommend {
    display: flex;
    width: 100%;

    font-size: 12px;
    padding: 10px 0 0 20px;
    border-bottom: 8px solid #eee;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
  }

  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  } */

    .recommend {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
  }

  .recommend img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>