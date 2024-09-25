import { defineStore } from "pinia";


export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    webTitle: "XArr 系列软件官方网站"
  }),
  getters: {},
  actions: {

  },
});

export const useAppStoreA = () => {
  return useAppStore();
};
