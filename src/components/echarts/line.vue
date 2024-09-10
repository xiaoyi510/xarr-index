<template>
  <div ref="static-map" style="min-height: 400px; min-width: 100%"></div>
</template>

<script lang="ts">
import Vue from "vue";

import * as echarts from "echarts/core";
import {
  GridComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { LegendComponent } from "echarts/components";
import { RadarChart } from "echarts/charts";

export default Vue.extend({
  name: "echarts-line",
  props: {
    options: {
      type: Object,
    },
  },
  data() {
    return {
      staticCharMap: null,
      staticCharMapDom: null,
    };
  },
  computed: {
    data: {
      get() {
        return this.options;
      },
    },
  },
  watch: {
    data: {
      immediate: true,
      handler(newValue, oldValue) {
        console.log("newValue", newValue);
        if (newValue && newValue.xAxis && this.staticCharMap) {
          this.staticCharMap.setOption(newValue);
        }
      },
    },
  },

  mounted() {
    window.addEventListener("resize", this.windowResize);

    // 创建echarts
    this.createEchartsMap();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.windowResize);
  },
  methods: {
    windowResize() {
      this.staticCharMap.resize();
    },
    createEchartsMap() {
      echarts.use([
        GridComponent,
        LineChart,
        CanvasRenderer,
        UniversalTransition,
        LegendComponent,
        RadarChart,
        TitleComponent,
        TooltipComponent,
        ToolboxComponent,
      ]);

      this.staticCharMapDom = this.$refs["static-map"];
      this.staticCharMap = echarts.init(this.staticCharMapDom);
      if (this.data) {
        this.staticCharMap.setOption(this.data);
      }
    },
  },
});
</script>