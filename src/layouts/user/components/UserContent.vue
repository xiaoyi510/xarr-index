<template>
  <div class="user-content">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { useUserLayoutStore } from "@/store/module/user_layout";
import Vue from "vue";
export default Vue.extend({
  data() {
    const userLayout = useUserLayoutStore();

    return {
      userLayout,
    };
  },
});
</script>

<style lang="less" scoped>
.user-content {
  flex: 1;
  padding: 20px;
  background-color: #edeff6;
  min-width: 400px;
}
</style>