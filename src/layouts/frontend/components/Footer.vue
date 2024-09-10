<template>
  <footer class="bg-slate-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between"
      >
        <div class="flex gap-x-6">
          <a
            style="color: #666"
            target="_blank"
            rel="noopener"
            href="http://beian.miit.gov.cn/"
            >浙ICP备2023049857号</a
          >
        </div>
        <p class="mt-6 text-sm text-slate-500 sm:mt-0">
          Copyright ©
          <!-- -->2024<!-- -->
          XArr. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { useAppStore } from "@/store/module/app";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  computed: {},
});
</script>

<style lang="less" scoped>
@import url("@/style/variables.less");
</style>