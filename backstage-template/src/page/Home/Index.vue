<!--
 * @Author: zdj
-->
<template>
  <div>
    <el-container>
      <el-aside :style="{ width: collapse ? '65px' : '200px' }">
        <Slide :collapse="collapse" />
      </el-aside>
      <el-container>
        <el-header>
          <i
            id="collapse-button"
            :class="collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            @click="changeCollapse"
          ></i>
          <UserAvatar />
          <FullScreenButton />
          <ModuleSearch />
        </el-header>
        <el-main>
          <router-tab page-transition="page-fade" restore />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Slide from "./components/Slide.vue";
import Component from "vue-class-component";
import FullScreenButton from "@/components/FullScreen.vue";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import steps from "@/assets/guide.ts";
import { getItem, setItem } from "@/utils/localstorage";
import UserAvatar from "@/components/UserAvatar.vue";
import ModuleSearch from "@/components/ModuleSearch.vue";

@Component({
  components: {
    ModuleSearch,
    UserAvatar,
    Slide,
    FullScreenButton,
  },
})
export default class Index extends Vue {
  collapse: boolean = false;
  driver: any = {};

  mounted() {
    // this.initDirver();
  }

  changeCollapse() {
    this.collapse = !this.collapse;
  }

  initDirver() {
    this.driver = new Driver({
      animate: true,
      opacity: 0.75,
      padding: 10,
      allowClose: false,
      overlayClickNext: false,
      doneBtnText: "完成",
      closeBtnText: "关闭",
      nextBtnText: "下一步",
      prevBtnText: "上一步",
    });

    // if (!getItem("first_enter")) {
    this.driver.defineSteps(steps);
    this.driver.start();
    // setItem("first_enter", "enter");
    // }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  text-align: right;
  line-height: 60px;
  padding: 0 25px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
}

.el-aside {
  border-right: none !important;
  min-height: 100vh;
  background-color: #0162af;
  transition: all 0.3s;
}

.el-menu {
  border-right: none !important;
}

.el-main {
  padding: 10px 20px 0 20px !important;
}

#collapse-button {
  font-size: 24px;
  cursor: pointer;
  color: #0062af;
  margin-top: 18px;
  cursor: pointer;
  transition: all 0.3s;
  float: left;
}

#collapse-button:hover {
  opacity: 0.6;
}

/deep/ .page-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.1s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
