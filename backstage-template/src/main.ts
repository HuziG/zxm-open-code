/*
 * @Author: zdj
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "./element-variables.scss";

import RouterTab from "vue-router-tab";
import "vue-router-tab/dist/lib/vue-router-tab.css";
Vue.use(RouterTab);

Vue.config.productionTip = false;

import {
  Card,
  Input,
  Button,
  Container,
  Header,
  Aside,
  Footer,
  Main,
  Divider,
  Menu,
  MenuItemGroup,
  MenuItem,
  Submenu,
  Table,
  TableColumn,
  Pagination,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Popconfirm,
  Dialog,
  Form,
  FormItem,
  Upload,
  Row,
  Col,
  Loading,
  Message,
  Notification,
  Select,
  Option,
  Avatar,
} from "element-ui";
Vue.use(Avatar);
Vue.use(Select);
Vue.use(Option);
Vue.use(Card);
Vue.use(Input);
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Divider);
Vue.use(Menu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Popconfirm);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Upload);
Vue.use(Row);
Vue.use(Col);
Vue.use(Loading);

Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$loading = Loading;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
