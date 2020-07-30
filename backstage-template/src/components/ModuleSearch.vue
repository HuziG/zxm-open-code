<template>
  <div :class="{ show: show }" class="header-search">
    <i
      id="search-icon"
      class="el-icon-search search-icon"
      @click.stop="click"
    ></i>
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder="Search"
      class="header-search-select"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import Fuse from "fuse.js";
import path from "path";

@Component
export default class Index extends Vue {
  $router: any;
  search = "";
  options = [];
  searchPool = [];
  fuse: any;
  routes = "";
  show = false;

  created() {
    this.initFuse(this.routes);

    this.searchPool = this.generateRoutes(this.$router.options.routes);
  }

  @Watch("searchPool")
  searchPoolWatch(list: object) {
    this.initFuse(list);
  }

  @Watch("show")
  showWatch(value: boolean) {
    if (value) {
      document.body.addEventListener("click", this.close);
    } else {
      document.body.removeEventListener("click", this.close);
    }
  }

  click() {
    this.show = !this.show;
    if (this.show) {
      this.$refs.headerSearchSelect && (this.$refs.headerSearchSelect as any).focus();
    }
  }

  close() {
    this.$refs.headerSearchSelect && (this.$refs.headerSearchSelect as any).blur();
    this.options = [];
    this.show = false;
  }

  initFuse(list: any) {
    console.log(list);
    this.fuse = new Fuse(list, {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        {
          name: "zhword",
          weight: 0.8,
        },
        {
          name: "title",
          weight: 0.7,
        },
        {
          name: "path",
          weight: 0.3,
        },
      ],
    });
  }

  querySearch(query: string) {
    if (query !== "") {
      this.options = this.fuse.search(query).map((item: any) => item.item);
    } else {
      this.options = [];
    }
  }

  generateRoutes(routes: any, basePath = "/", prefixTitle = []) {
    let res: any = [];

    for (const router of routes) {
      // skip hidden router
      if (router.hidden) {
        continue;
      }

      const data: any = {
        path: path.resolve(basePath, router.path),
        zhword: router.meta ? router.meta.zhword : "",
        title: [...prefixTitle],
      };

      if (router.meta && router.meta.title) {
        data.title = [...data.title, router.meta.title];

        if (router.redirect !== "noRedirect") {
          // only push the routes with title
          // special case: need to exclude parent router without redirect
          res.push(data);
        }
      }

      // recursive child routes
      if (router.children) {
        const tempRoutes: any = this.generateRoutes(
          router.children,
          data.path,
          data.title
        );
        if (tempRoutes.length >= 1) {
          res = [...res, ...tempRoutes];
        }
      }
    }

    return res;
  }

  change(val: any) {
    this.$router.push(val.path);
    this.search = "";
    this.options = [];
    // TODO $nextTick ??
    this.$nextTick(() => {
      this.show = false;
    });
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  margin-right: 30px;

  .search-icon {
    cursor: pointer;
    font-size: 24px;
    color: #0062af;
    vertical-align: middle;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;
    margin-right: 25px;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
