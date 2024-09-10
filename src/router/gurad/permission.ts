/** @format */


import { getPageTitle } from "@/utils/router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import type VueRouter from "vue-router";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

export function usePermission(router: VueRouter) {
  router.beforeEach(async (to, from, next) => {
    console.log("router", from, to);
    // 加载全局配置项
    // const appStore = useAppStore();
    // await appStore.init();
    // let userStore = useUserStoreA();

    // 开启进度条
    NProgress.start();

    // 判断是否设置页面标题
    document.title = getPageTitle(to.meta?.title);

    // 判断是否是登录页面
    // let token = userStore.getToken();
    // if (to.meta?.auth && !token) {
    //   if (to.name == "login") {
    //     next()
    //     return;
    //   }
    //   next({ name: "login" });
    // }

    // let userProfile = userStore.getUserProfile();
    // // 判断登录后是否有登录信息
    // if (token && !userProfile) {
    //   // 刷新用户数据信息
    //   if ((await userStore.refreshProfile()) == false) {
    //     if (to.name == "login") {
    //       next()
    //       return;
    //     }
    //     next({ name: "login" });
    //   }
    // }

    next();
  });

  router.afterEach(() => {
    // 关闭进度条
    NProgress.done();
  });
}
