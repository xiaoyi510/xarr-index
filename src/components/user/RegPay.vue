<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      title="请扫码付费后账号即可使用"
      width="500px"
    >
      <el-form size="small" v-if="!rechargeQrcode">
        <div class="text-xs text-gray-500 pb-3">请选择您的支付方式</div>
        <el-form-item label="">
          <PayTypes v-model="payType" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleCreateOrder"
            >提交订单</el-button
          >
        </el-form-item>
      </el-form>

      <div class="flex justify-center flex-col" v-else>
        <el-image :src="'/api/qrcode?text=' + rechargeQrcode"></el-image>
        <div class="flex justify-center gap-x-2">
          支付剩余时间: <span class="text-red-600">{{ orderExpireTime }}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import api from "@/api";
import PayTypes from "../pay/PayTypes.vue";
import { formatSecondToDateStr } from "@/utils/date";

export default {
  components: { PayTypes },
  props: {
    token: String,
    setIf: Function,
  },
  data() {
    return {
      dialogVisible: true,
      payType: "alipay",
      rechargeQrcode: "",
      rechargeExpTime: 0,
      rechargeExpTimer: 0,
      systemOrderId: "",
    };
  },

  computed: {
    orderExpireTime() {
      if (this.rechargeExpTime == 0) {
        return "...";
      }

      // 获取当前时间信息
      let now = new Date().getTime() / 1000;
      return formatSecondToDateStr(
        parseInt((this.rechargeExpTime - now).toString())
      );
    },
  },
  mounted() {},
  methods: {
    handleCreateOrder() {
      //  创建订单
      api.register
        .creatPayOrder({
          token: this.$props.token,
          pay_type: this.payType,
        })
        .then((resp) => {
          if (resp.code == 200) {
            if (resp.data.code == 1) {
              if (resp.data.payurl) {
                window.location.href = resp.data.payurl;
                return;
              }

              if (resp.data.qrcode) {
                // 显示二维码内容
                this.rechargeQrcode = resp.data.qrcode;
                this.systemOrderId = resp.data.system_order_id;
                let now = new Date().getTime() / 1000;

                this.rechargeExpTime = 5 * 60 + now;
                this.rechargeExpTimer = setInterval(() => {
                  this.rechargeExpTime--;
                  if (this.rechargeExpTime <= 0) {
                    clearInterval(this.rechargeExpTimer);
                  }

                  api.register
                    .checkPayOrderStatus({ order_id: this.systemOrderId })
                    .then((res) => {
                      if (res.data.status != 1) {
                        if (res.data.status == 2) {
                          this.$message.success("支付成功");
                        }
                        this.rechargeQrcode = "";
                        this.$props.setIf(res.data.status);
                        clearInterval(this.rechargeExpTimer);
                      }
                    });
                }, 1000);

                return;
              }
            }
          } else {
            this.$message.error(resp.message);
          }
        });
    },
  },
};
</script>