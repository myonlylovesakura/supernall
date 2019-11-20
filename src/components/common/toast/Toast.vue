<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    show(message,duration = 2000) {
      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = 'message'
      },duration)
    }
  }
  /* props: {
    message: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  } */
}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
</style>