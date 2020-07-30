import router from "@/router";
import { getItem } from "@/utils/localstorage";

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next({ path: "/home" });
  }

  if (to.path.indexOf("/home") != -1) {
    if (!getItem("token")) {
      next({ path: "/login" });
    }
  }

  next();
});
