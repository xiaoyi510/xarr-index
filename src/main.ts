/** @format */
import "@babel/polyfill";

import { PiniaVuePlugin, createPinia, defineStore } from "pinia";
import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./style/index.less";
import "./style/tailwindcss.css";


// import './style/variables.scss'
import "@/assets/icons/iconfont/iconfont.css";
import "@/assets/icons/iconfont/iconfont.js";

import locale from "element-ui/lib/locale/lang/zh-CN.js"; // lang i18n

import App from "@/App.vue";

import "virtual:windi.css";

import router from "@/router";

// 引入持久化组件  若不想持久化 可不使用
import piniaPersist from "pinia-plugin-persist";

// import "./assets/js/gt4";

const pinia = createPinia();
pinia.use(piniaPersist);

// 解决vue2的pinia问题
const useStore = defineStore("main", {});
const store = useStore(pinia); // Works, but not without passing pinia

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(PiniaVuePlugin);
Vue.use(ElementUI, { locale });


// Vue.prototype.__XArrConfig = window.__XArrConfig;

/* eslint-disable no-new */
let app = new Vue({
  pinia,
  router,
  render: (h) => h(App)
});

// app.pinia = (pinia);
app.$pinia = pinia;

app.$mount("#app");
