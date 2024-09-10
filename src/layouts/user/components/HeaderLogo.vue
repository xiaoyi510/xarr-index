<template>
  <div class="header-l">
    <router-link to="/" class="header-logo-container">
      <div class="header-logo">
        <img :src="appStore.webLogo" alt="" />
      </div>
      <div class="web-title" v-if="!isCollapse">
        {{ appStore.webTitle }}
      </div></router-link
    >
  </div>
</template>

<script lang="ts">
import { useAppStore } from "@/store/module/app";
import Vue from "vue";
export default Vue.extend({
  props: {
    isCollapse: {
      type: Boolean,
    },
  },
  data() {
    return {
      appStore: useAppStore(),
    };
  },
});
</script>

<style lang="less" scoped>
.header-l {
  max-width: 240px;
  width: 100%;
  padding: 0 16px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    align-items: center;
  }
  .header-logo-container {
    display: flex;
    cursor: pointer;

    .header-logo {
      height: 36px;

      img {
        height: 30px;
      }
    }
    .web-title {
      font-size: 18px;
      color: #2f2f32;
      padding-left: 6px;
      height: 36px;
      line-height: 30px;
    }
  }
}
</style>