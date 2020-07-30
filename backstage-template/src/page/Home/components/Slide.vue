<!--
 * @Author: zdj
-->
<template>
  <div class="slide-container">
    <div class="logo-container"></div>

    <el-menu
      :collapse="collapse"
      :collapse-transition="true"
      background-color="#0162AF"
      text-color="#eeeeee"
      active-text-color="#ffffff"
      :default-active="$route.name"
      :router="true"
    >
      <el-menu-item
        index="GroupManage"
        :route="{ path: '/home/super_admin_manage' }"
      >
        <i class="el-icon-user"></i>
        <span slot="title">超管管理</span>
      </el-menu-item>

      <el-menu-item index="GroupManage" :route="{ path: '/home/organ_manage' }">
        <i class="el-icon-user"></i>
        <span slot="title">机构管理</span>
      </el-menu-item>

      <el-menu-item
        index="GroupManage"
        :route="{ path: '/home/organ_admin_manage' }"
      >
        <i class="el-icon-user"></i>
        <span slot="title">机构管理员管理</span>
      </el-menu-item>

      <el-menu-item
        index="GroupManage"
        :route="{ path: '/home/organ_admin_manage' }"
      >
        <i class="el-icon-user"></i>
        <span slot="title">机构管理员管理</span>
      </el-menu-item>

      <el-menu-item
        index="GroupManage"
        :route="{ path: '/home/organ_staff_manage' }"
      >
        <i class="el-icon-user"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>

      <el-menu-item
        index="GroupManage"
        :route="{ path: '/home/organ_staff_manage' }"
      >
        <i class="el-icon-user"></i>
        <span slot="title">客户管理</span>
      </el-menu-item>

      <el-menu-item
        index="GroupManage"
        :route="{ path: '/home/organ_staff_manage' }"
      >
        <i class="el-icon-user"></i>
        <span slot="title">公司管理</span>
      </el-menu-item>

      <!--      <el-menu-item-->
      <!--        index="MessageManage"-->
      <!--        :route="{ path: '/home/message_manage' }"-->
      <!--      >-->
      <!--        <i class="el-icon-chat-dot-round"></i>-->
      <!--        <span slot="title">消息管理</span>-->
      <!--      </el-menu-item>-->

      <!--      <el-menu-item-->
      <!--        index="KeywordManage"-->
      <!--        :route="{ path: '/home/keyword_manage' }"-->
      <!--      >-->
      <!--        <i class="el-icon-chat-line-round"></i>-->
      <!--        <span slot="title">报备管理</span>-->
      <!--      </el-menu-item>-->

      <!--      <el-menu-item-->
      <!--        index="ProjectManage"-->
      <!--        :route="{ path: '/home/project_manage' }"-->
      <!--      >-->
      <!--        <i class="el-icon-office-building"></i>-->
      <!--        <span slot="title">项目管理</span>-->
      <!--      </el-menu-item>-->
    </el-menu>

    <!-- <div class="user-manage-block">
      <router-link to="/login">
        <el-button type="primary" icon="el-icon-close">To Login</el-button>
      </router-link>
    </div>-->
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import { removeItem } from "@/utils/localstorage";

@Component({})
export default class Index extends Vue {
  @Prop({
    default: () => {
      return false;
    },
  })
  collapse;
}
</script>

<style>
.el-menu {
  border-right: none !important;
}
.user-manage-block {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 200px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background-color: #0162af;
}

.logo-container {
  height: 60px;
  line-height: 60px;
  text-align: center;
  box-sizing: border-box;
}

.logo-container img {
  width: 40px;
  height: 40px;
  margin-top: 10px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
}
</style>
