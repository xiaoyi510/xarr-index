// const title = __XArrConfig["web_title"];

import { useAppStore } from "@/store/module/app";

export function getPageTitle(pageTitle: string): string {
  const appStore = useAppStore();
  let title = appStore.webTitle;
  if (pageTitle !== "") return `${pageTitle} - ${title}`;

  return `${title}`;
}
