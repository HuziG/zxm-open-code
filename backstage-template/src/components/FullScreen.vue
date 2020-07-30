<template>
  <div class="fullscreen-wrap">
    <i
      id="fullscreen-wrap"
      :class="
        isFullScreen ? 'el-icon-crop button' : 'el-icon-full-screen button'
      "
      @click="changeFullScreen"
    ></i>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Index extends Vue {
  isFullScreen = false;

  changeFullScreen() {
    let element = document.documentElement;
    if (this.isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    }
    this.isFullScreen = !this.isFullScreen;
  }
}
</script>

<style scoped>
.button {
  font-size: 24px;
  cursor: pointer;
  color: #0062af;
  cursor: pointer;
  transition: all 0.3s;
  float: right;
  margin-top: 18px;
  margin-right: 30px;
}
.button:hover {
  opacity: 0.6;
}
</style>
