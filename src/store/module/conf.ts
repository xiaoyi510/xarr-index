import api from "@/api";
import { defineStore } from "pinia";

type PayConf = {
  pay_type: string;
  channels: string;
};

export const useConfStore = defineStore({
  id: "Conf",
  state: () => ({
    payConf: {},
  }),
  getters: {},
  actions: {
    getPayTypes() {
      if (!this.payConf["pay_type"]) {
        return [];
      }
      return this.payConf["pay_type"];
    },
    getPayTypeItem(payType: string) {
      if (!this.payConf["pay_type"]) {
        return {};
      }
      let label = this.payConf["pay_type"].find(
        (item) => item.value == payType
      );
      return label ?? {};
    },
    getPayTypeName(payType: string) {
      if (!this.payConf["pay_type"]) {
        return "";
      }
      return (
        this.payConf["pay_type"].find((item) => item.value == payType) || {}
      );
    },
    getPayChennelList(payType) {
      return this.payConf["channels"].filter((item) => item.type == payType);
    },
    getPayChannelInfo(channel: string) {
      if (!this.payConf["channels"]) {
        return "";
      }
      return this.payConf["channels"].find((item) => item.code == channel);
    },
    getPayChannels(){
      if (!this.payConf["channels"]) {
        return [];
      }
      return this.payConf['channels'].map(item=>{
        

        return {
          label: this.getPayTypeName(item.type).label + "----"+item.name,
          value:item.code,
        }
      })
    },
    initConfs() {
      this.refreshConfs();
    },
    async refreshConfs() {
      let data = await api.pay.payConf();
      if (data.code == 200) {
        this.payConf = data.data;
      }
    },
  },
});

export const useConfStoreA = () => {
  return useConfStore();
};
