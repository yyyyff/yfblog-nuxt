<template>
  <transition name="fade">
    <div class="toast" :style="style" v-if="show">
      <span class="content">{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {
      show: true,
      message: "",
      duration: 3000,
      closed: false,
      onClose: null,
      offset: 0
    };
  },
  computed: {
    style() {
      return {
        top: `${this.offset}px`
      };
    }
  },
  methods: {
    startTimer() {
      setTimeout(() => {
        this.close();
      }, this.duration);
    },
    close() {
      this.show = false;
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    }
  },
  mounted() {
    this.startTimer();
    console.log(this.offset)
  }
};
</script>

<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-inter,
.fade-leave-to {
  opacity: 0;
}

.toast {
  box-sizing: border-box;
  position: fixed;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  min-width: 150px;
  padding: 10px 14px;
  color: #fff;
  background: #777;
  font-size: 16px;
  line-height: 16px;
  border-radius: 5px;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>