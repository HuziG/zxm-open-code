<template>
  <el-main v-loading="mainLoading">
    <slot></slot>
  </el-main>
</template>

<script>
export default {
  name: "LoadingWrap",
  props: {
    mainLoading: {
      type: Boolean
    }
  }
};
</script>

<style scoped>
.el-main {
  padding: 0px;
}
</style>
