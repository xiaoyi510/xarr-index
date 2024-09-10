<template>
  <header class="py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav class="relative z-50 flex justify-between">
        <!-- 左侧链接 -->
        <div class="flex items-center md:gap-x-12">
          <a href="#" class="flex items-center gap-x-2 text-2xl">
            <el-image
              class="h-10 w-auto"
              src="/static/images/logo.png"
            ></el-image>
            <span>XArr</span>
          </a>
          <!-- 链接列表 -->
          <div class="hidden md:flex md:gap-x-6">
            <template v-for="(item, index) in navList">
              <div
                :key="index"
                class="inline-block rounded-lg px-2 py-1 text-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                <router-link v-if="!item.target" :to="item.link">{{
                  item.label
                }}</router-link>
                <a :href="item.link" v-else :target="item.target">{{
                  item.label
                }}</a>
              </div>
            </template>
          </div>
        </div>
        <!-- 右侧 -->
        <div class="flex items-center gap-x-5 md:gap-x-8">
          <!-- 联系我们 -->
          <a
            href="https://auth.xarr.cn"
            class="group inline-flex items-center justify-center rounded-full py-3 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
            >加入我们</a
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterName } from "@/enums/router_name";
import { useAppStore } from "@/store/module/app";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      navList: [
        { label: "首页", link: "/" },
        { label: "文档中心", link: "https://docs.xarr.cn", target: "_blank" },
        { label: "授权中心", link: "https://auth.xarr.cn", target: "_blank" },
        { label: "宝塔面板", link: "/bt" },
      ],
    };
  },
  computed: {},
});
</script>