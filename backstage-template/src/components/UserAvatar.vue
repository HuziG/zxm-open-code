<template>
  <div class="avatar-wrap">
    <el-dropdown trigger="click" @command="handleCommand">
      <el-avatar
        id="user-center"
        shape="square"
        size="medium"
        :src="squareUrl"
      ></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
        <el-dropdown-item command="userGuide" divided
          >用户引导</el-dropdown-item
        >
        <el-dropdown-item command="userExit" divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Index extends Vue {
  squareUrl =
    "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png";

  handleCommand(command: string) {}
}
</script>

<style scoped>
.avatar-wrap {
  float: right;
  margin-top: 12px;
  height: 36px;
  line-height: 36px;
}

.el-dropdown {
  height: 36px;
  line-height: 36px;
}

.el-avatar {
  cursor: pointer;
}
</style>
