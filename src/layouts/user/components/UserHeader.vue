<template>
  <div
    class="user-header"
    :style="
      isMobile
        ? ''
        : userLayout.isCollapse
        ? 'width: calc(100% - 62px)'
        : 'width: calc(100% - 240px)'
    "
  >
    <!-- <HeaderLogoVue /> -->
    <div class="header-content">
      <div class="header-mid">
        <!-- 导航菜单 -->
        <div class="header-actions">
          <!-- <div class="actions"> -->
          <el-button @click="isCollapse = !isCollapse" type="text">
            <i class="el-icon-s-unfold" v-if="isCollapse"></i>
            <i class="el-icon-s-fold" v-if="!isCollapse"></i>
          </el-button>
          <!-- </div> -->
          <!-- 搜索 -->
          <!-- <el-input prefix-icon="el-icon-search" placeholder="搜索订单号">
          </el-input> -->
          <el-button
            icon="el-icon-search"
            type="text"
            style="color: #2f2f32"
            title="搜索"
            @click="showSearchDialog"
          ></el-button>
        </div>
        <!-- 用户登录信息 -->
        <HeaderUserVue />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserLayoutStore } from "@/store/module/user_layout";
import Vue from "vue";
import HeaderLogoVue from "./HeaderLogo.vue";
import HeaderUserVue from "./HeaderUser.vue";
import { useBasicLayout } from "@/hooks/useBasicLayout";

export default Vue.extend({
  components: { HeaderUserVue, HeaderLogoVue },
  data() {
    const userLayout = useUserLayoutStore();
    const { isMobile } = useBasicLayout();
    return {
      userLayout,
      isMobile,
    };
  },
  mounted() {
    if (this.isMobile) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
    }
  },
  computed: {
    isCollapse: {
      get() {
        return this.userLayout.isCollapse;
      },
      set(value) {
        this.userLayout.setIsCollapse(value);
      },
    },
  },
  methods: {
    showSearchDialog() {
      this.$prompt("", {
        title: "搜索订单信息",
        inputPlaceholder: "订单号/商户订单号",
      });
    },
  },
});
</script>

<style lang="less" scoped>
.user-header {
  width: 100%;
  height: 60px;
  // background-color: #f8f8f8;
  background-color: white;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 99;
  .header-content {
    display: flex;
    align-items: center;
    flex: 1;

    .header-mid {
      display: flex;
      width: 100%;
      justify-content: space-between;
      padding: 0 10px;

      .header-actions {
        display: flex;
        align-content: center;

        :deep(.el-button) {
          padding: 8px 4px;
          color: #1677ff;
        }
      }
    }
  }
}
</style>
