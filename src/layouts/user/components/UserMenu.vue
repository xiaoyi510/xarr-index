<template>
  <div class="user-menu-root">
    <div
      :class="'user-menus-container ' + (isMobile ? 'mobile' : '')"
      v-show="!isMobile || (isMobile && !userLayout.isCollapse)"
      :style="userLayout.isCollapse ? 'min-width: 62px' : 'min-width: 240px'"
    >
      <div class="user-menus">
        <HeaderLogoVue :isCollapse="userLayout.isCollapse" />
        <!-- 菜单 -->
        <el-menu
          :default-active="$route.name"
          :collapse-transition="false"
          :class="
            !userLayout.isCollapse
              ? 'user-menu-vertical-collapse'
              : 'user-menu-vertical'
          "
          :collapse="userLayout.isCollapse"
          :router="true"
        >
          <el-menu-item
            :index="RouterName.userHome"
            :route="{ name: RouterName.userHome }"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">商户中心</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="RouterName.userInfo"
                :route="{ name: RouterName.userInfo }"
                >个人中心</el-menu-item
              >
              <el-menu-item
                :index="RouterName.userMeal"
                :route="{ name: RouterName.userMeal }"
                >套餐购买</el-menu-item
              >
              <el-menu-item
                :index="RouterName.userResetPwd"
                :route="{ name: RouterName.userResetPwd }"
                >修改密码</el-menu-item
              >
              <el-menu-item
                :index="RouterName.userLoginLog"
                :route="{ name: RouterName.userLoginLog }"
                >登录日志</el-menu-item
              >
              <!-- <el-menu-item
              :index="RouterName.userSafeSetting"
              :route="{ name: RouterName.userSafeSetting }"
              >安全设置</el-menu-item
            > -->
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="userChannelRoot">
            <template slot="title">
              <i class="el-icon-bangzhu"></i>
              <span>通道管理</span>
            </template>
            <el-menu-item-group>
              <!-- <el-menu-item
              :index="RouterName.userChannel"
              :route="{ name: RouterName.userChannel }"
              >通道列表</el-menu-item
            > -->
              <el-menu-item
                :index="RouterName.userChannelAccount"
                :route="{ name: RouterName.userChannelAccount }"
                >通道列表</el-menu-item
              >
              <el-menu-item
                :index="RouterName.userPayPolling"
                :route="{ name: RouterName.userPayPolling }"
                >轮询池</el-menu-item
              >
              <el-menu-item
                :index="RouterName.userPayConfig"
                :route="{ name: RouterName.userPayConfig }"
                >支付设置</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="userOrderRoot">
            <template slot="title">
              <i class="el-icon-bangzhu"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="RouterName.userOrder"
                :route="{ name: RouterName.userOrder }"
              >
                <i class="el-icon-coin"></i>
                <span>订单明细 </span>
              </el-menu-item>
              <el-menu-item
                :index="RouterName.userNotifyLog"
                :route="{ name: RouterName.userNotifyLog }"
              >
                <i class="el-icon-coin"></i>
                <span>回调日志 </span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item
            :index="RouterName.userApi"
            :route="{ name: RouterName.userApi }"
          >
            <i class="el-icon-cpu"></i>
            <span slot="title">API</span>
          </el-menu-item>

          

          

          <el-submenu index="userRechargeRoot">
            <template slot="title">
              <i class="el-icon-money"></i>
              <span>财务中心</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="RouterName.userRecharge"
                :route="{ name: RouterName.userRecharge }"
                >在线充值</el-menu-item
              >
              <el-menu-item
                :index="RouterName.userAmountLog"
                :route="{ name: RouterName.userAmountLog }"
                >资金明细</el-menu-item
              >
     
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item
            v-if="appStore.configs['pay_avg_enable'] == '1'"
            :index="RouterName.userCashier"
            :route="{ name: RouterName.userCashier }"
          >
            <i class="el-icon-guide"></i>
            <span slot="title">聚合收款</span>
          </el-menu-item>

          <a target="_blank" :href="appStore.configs['system_jk_url']"></a>
            <el-menu-item
              v-if="appStore.configs['system_jk_url']"
              :router="false"
              :route="false"
            >
              <i class="el-icon-download"></i>
              <span slot="title">插件下载</span>
            </el-menu-item>
          </a>
        </el-menu>
      </div>
    </div>

    <!-- 蒙层 -->
    <div
      v-show="isMobile && !userLayout.isCollapse"
      class="user-menu-modal"
      @click="userLayout.isCollapse = !userLayout.isCollapse"
    ></div>
  </div>
</template>

<script lang="ts">
import { RouterName } from "@/enums/router_name";
import { useBasicLayout } from "@/hooks/useBasicLayout";
import { useAppStore } from "@/store/module/app";
import { useUserLayoutStore } from "@/store/module/user_layout";
import Vue from "vue";
import HeaderLogoVue from "./HeaderLogo.vue";

export default Vue.extend({
  components: {
    HeaderLogoVue,
  },
  data() {
    const userLayout = useUserLayoutStore();
    const { isMobile } = useBasicLayout();
    const appStore = useAppStore();

    return {
      appStore,
      isMobile,
      userLayout,
      RouterName,
    };
  },
});
</script>

<style lang="less" scoped>
.user-menu-root {
  height: 100%;
  .user-menu-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    // background-color: #999;
    // filter: blur(10px);
    // opacity: 0.9;
    z-index: 100;
    // filter: blur(4px);
    background-color: rgba(0, 0, 0, 0.5); /* 设置背景颜色并添加透明度 */

    // backdrop-filter: blur(5px);
    // -webkit-backdrop-filter: blur(5px);
  }
}
.user-menus-container {
  height: 100%;
  min-width: 62px;
}
.user-menus-container.mobile {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
}

.user-menus {
  height: calc(100vh);
  // width: 240px;
  // background-color: #f8f8f8;
  background-color: white;
  // border-top: 1px solid #e6e6e6;
  // padding-top: 15px;
  border-right: 2px solid #e8ecf5;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;

  :deep(.el-menu) {
    padding-top: 15px;
    // background-color: #f8f8f8;
    background-color: white;
    color: #5e5e5e;

    & .el-menu--inline {
      padding-top: 0;
    }

    // 折叠状态
    &.el-menu--collapse {
      .el-submenu {
        .el-submenu__title {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
      }

      .el-menu-item {
        display: flex !important;
        justify-content: center;
        align-items: center;
        .el-tooltip {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .el-submenu {
      &.is-opened {
        height: auto;
        line-height: normal;
      }
    }

    .el-menu-item,
    .el-submenu__title {
      height: 45px;
      line-height: 45px;
      margin: 0 4px;
      border-radius: 10px;
      margin-bottom: 4px;

      &.el-tooltip {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .el-menu-item {
      &.is-active {
        background-color: #e9f2ff;
        font-weight: bold;
        color: #1677ff;
      }
    }
  }

  .user-menu-vertical-collapse {
    width: 240px;
    overflow-y: auto;
    flex: 1;
  }

  .actions {
    display: flex;
    position: absolute;
    bottom: 15px;
    justify-content: center;
    width: auto;
  }
}
</style>
