<template>
  <div>
    <!-- 头像 -->
    <!-- 昵称 -->
    <!-- 下拉菜单 -->

    <el-dropdown size="medium" @command="handleCommand" class="user-info">
      <span class="el-dropdown-link">
        <XSpaceVue>
          <el-avatar
            :size="36"
            :src="profile.avatar ? profile.avatar : '/static/images/logo.png'"
          ></el-avatar>
          <span>{{
            profile.merchant_name ? profile.merchant_name : profile.username
          }}</span>
        </XSpaceVue>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="info">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import XSpaceVue from "@/components/common/XSpace.vue";
import { RouterName } from "@/enums/router_name";
import { useUserStore } from "@/store/module/user";
import Vue from "vue";

export default Vue.extend({
  components: {
    XSpaceVue,
  },
  data() {
    let userStore = useUserStore();
    return {
      profile: userStore.getUserProfile(),
    };
  },
  methods: {
    handleCommand(command) {
      if (command == "logout") {
        let userStore = useUserStore();

        userStore.logout();
        this.$router.push({ name: RouterName.login, replace: true });
      } else if (command == "info") {
        this.$router.push({ name: RouterName.userInfo, replace: true });
      }
    },
  },
});
</script>


<style lang="less" scoped>
:deep(.el-avatar) {
  background-color: #fff;
}

.user-info {
  cursor: pointer;
  padding-right: 15px;
  .el-dropdown-link {
    .x-space {
      align-items: center;
    }
    :deep(.el-avatar > img) {
      width: 100%;
    }
    span {
      // padding-left: 6px;
    }
  }
}
</style>