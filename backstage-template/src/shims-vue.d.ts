declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module 'vue/types/vue' {
  import {Route, VueRouter} from "vue-router/types/router";

  interface Vue {
    $router: VueRouter,
    $route: Route
  }
}

declare module "vue-router-tab";
