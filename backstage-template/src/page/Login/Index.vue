<!--
 * @Author: zdj
-->

<template>
  <div style="text-align: center;">
    <h2>login</h2>
    <router-link to="/home">
      <el-button type="primary" size="mini">To Home</el-button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Index extends Vue {}
</script>

<style scoped></style>
