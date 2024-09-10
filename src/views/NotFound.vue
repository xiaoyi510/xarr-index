<template>
  <section class="text-gray-600 body-font">
    <div>
      <div style="height: auto; min-height: 100%">
        <div
          style="
            text-align: center;
            width: 800px;
            margin-left: -400px;
            position: absolute;
            top: 30%;
            left: 50%;
          "
        >
          <h1
            style="
              margin: 0;
              font-size: 150px;
              line-height: 150px;
              font-weight: bold;
            "
          >
            404
          </h1>
          <h2 style="margin-top: 20px; font-size: 30px">Not Found</h2>
          <p>oops!没有找到此页面</p>
          <div style="padding: 50px">
            <RouterLink :to="{ name: 'admin-login' }">
              <el-button type="primary"> 回到主页 </el-button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { RouterName } from "@/enums/router_name";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      RouterName,
    };
  },
});
</script>
