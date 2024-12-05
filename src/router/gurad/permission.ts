/** @format */


import { getPageTitle } from "@/utils/router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import type VueRouter from "vue-router";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

export function usePermission(router: VueRouter) {
  router.beforeEach(async (to, from, next) => {
    console.log("router", from, to);


    // 开启进度条
    NProgress.start();

    // 判断是否设置页面标题
    document.title = getPageTitle(to.meta?.title);

    next();
  });

  router.afterEach(() => {
    // 关闭进度条
    NProgress.done();
  });
}
