<template>
  <div>
    <div class="pay-types">
      <template v-for="item in pays">
        <div
          :key="item.value"
          v-if="openPays.indexOf(item.value) !== -1"
          :class="'pay-type-item ' + (payType == item.value ? 'chose' : '')"
          @click="changePayType(item.value)"
        >
          <div v-if="payType == item.value" class="chose-icon">
            <i class="el-icon-check"></i>
          </div>
          <img :src="item.src" />
          <span>{{ item.label }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import api from "@/api";
import Vue from "vue";
export default Vue.extend({
  model: {
    prop: "payType",
    event: "change",
  },
  props: {
    payType: {
      type: String,
      default: "alipay",
    },
    orderId: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      pays: [
        {
          label: "支付宝",
          value: "alipay",
          src: "/static/images/pay/alipay.png",
        },
        {
          label: "微信",
          value: "wxpay",
          src: "/static/images/pay/wechat.png",
        },
        {
          label: "QQ",
          value: "qqpay",
          src: "/static/images/pay/qq.png",
        },
        {
          label: "Paypal",
          value: "paypal",
          src: "/static/images/pay/paypal2.png",
        },
        {
          label: "USDT",
          value: "usdt",
          src: "/static/images/pay/usdt.png",
        },
        {
          label: "网银",
          value: "bank",
          src: "/static/images/pay/union.png",
        },
      ],
      openPays: [],
    };
  },
  mounted() {
    api.pay
      .types({
        order_id: this.orderId,
      })
      .then((resp) => {
        console.log(resp);
        if (resp.code == 200) {
          this.openPays = resp.data;
          if (this.openPays.length > 0) {
            this.changePayType(this.openPays[0]);
          }
        } else {
          this.$message.error(resp.message);
        }
      });
  },
  methods: {
    changePayType(type) {
      this.$emit("change", type);
    },
  },
});
</script>

<style lang="less" scoped>
.pay-types {
  display: flex;
  flex-wrap: wrap;

  .pay-type-item {
    padding: 2px 12px;
    border: 1px solid #dedede;
    position: relative;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    // margin: 0 6px;
    margin-right: 6px;
    margin-bottom: 6px;
    // min-width: 80px;
    min-width: 130px;

    height: 44px;
    line-height: 42px;
    display: flex;
    align-items: center;
    color: #888;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;

    -moz-user-select: -moz-none;
    transition: all 0.3s; /* 过渡属性和时长 */

    img {
      // width: 32px;
      height: 28px;
    }
    span {
      padding: 0 8px;
    }

    &.chose {
      border: 1px solid #366ef4;
      // color: #366ef4;
      background-color: #e9effe;

      .chose-icon {
        position: absolute;
        right: 0px;
        padding: 0 3px;
        background-color: #366ef4;
        color: white;
      }
    }
    &.chose:hover {
      border: 1px solid #366ef4;
      // color: #366ef4;
    }

    &:hover {
      border: 1px solid #366ef4;
      // color: #366ef4;
    }
  }
}
</style>