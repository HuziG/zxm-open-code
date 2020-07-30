<!--
 * @Author: zdj
-->
<template>
  <LoadingWrap :main-loading="tableLoading">
    <el-table size="mini" :data="tableData" style="width: 100%;">
      <slot></slot>
    </el-table>
    <div style="text-align: center; padding: 10px 0;">
      <el-pagination
        v-if="showPagination"
        background
        layout="prev, pager, next"
        :page-size="tablePage.limit"
        :total="count"
        @current-change="pageChange"
      ></el-pagination>
    </div>
  </LoadingWrap>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Request from "@/utils/request";
import { Base_Url } from "@/env";
import LoadingWrap from "./LoadingWrap.vue";

@Component({
  components: {
    LoadingWrap,
  },
})
export default class Index extends Vue {
  @Prop({
    default: () => {
      return {};
    },
  })
  private otherParams!: object;
  @Prop() private url!: string;
  @Prop({
    default: () => {
      return true;
    },
  })
  private showPagination!: boolean;

  count: number = 0;
  tableLoading: boolean = false;
  tableData: any = [];
  // TODO 页面参数
  tablePage: any = { page: 1, limit: 15, ...this.otherParams };

  created() {
    this.getTableData();
  }

  getTableData() {
    this.tableLoading = true;
    Request({
      method: "get",
      url: Base_Url + this.url,
      params: { ...this.tablePage },
    })
      .then(({ data, count }) => {
        this.setTableData(data, count);
        this.tableLoading = false;
      })
      .catch(() => {
        this.tableLoading = false;
      });
  }

  setTableData(data = [], count = 0) {
    this.tableLoading = false;
    this.tableData = data;
    this.count = count;
  }
  pageChange(page: number) {
    this.tablePage.page = page;
    this.getTableData();
  }
}
</script>

<style scoped></style>
