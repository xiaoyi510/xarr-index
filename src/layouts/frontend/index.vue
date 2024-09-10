<template>
  <div class="flex h-full flex-col">
    <XHeader />
    <XContent />
    <XFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import XHeader from "./components/Header.vue";
import XFooter from "./components/Footer.vue";
import XContent from "./components/Content.vue";

export default Vue.extend({
  components: { XFooter, XHeader, XContent },
});
</script>

<style lang="less" >
@import url("@/style/frontend.less");
</style>