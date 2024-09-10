import { defineStore } from "pinia";


export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    webTitle: "XArr"
  }),
  getters: {},
  actions: {

  },
});

export const useAppStoreA = () => {
  return useAppStore();
};
