<template>
  <div class="user-home">
    <div v-if="display == 1" class="user-content">
      <UserHeaderVue />
      <div class="user-container">
        <UserMenuVue />
        <UserContentVue />
      </div>
    </div>

    <!-- 第二种排盘 -->
    <div v-else class="user-content user-content-v2">
      <UserMenuVue />
      <div class="user-container-v2">
        <UserHeaderVue />

        <UserContentVue />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useStore from "@/store";
import Vue from "vue";
import UserContentVue from "./components/UserContent.vue";
import UserHeaderVue from "./components/UserHeader.vue";
import UserMenuVue from "./components/UserMenu.vue";

export default Vue.extend({
  name: "UserLayouts",
  components: {
    UserContentVue,
    UserHeaderVue,
    UserMenuVue,
  },
  beforeMount() {
    const store = useStore();
    store.conf.initConfs();
  },
  data() {
    return {
      display: 2,
    };
  },
});
</script>

<style lang="less" scoped>
.user-container {
  display: flex;
}

.user-content {
  padding-top: 80px;
  display: flex;
}

.user-content-v2 {
  padding-top: 0;
  height: 100vh;
}
.user-container-v2 {
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-x: hidden;
}
</style>