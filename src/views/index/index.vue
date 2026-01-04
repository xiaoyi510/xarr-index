<template>
  <div>
    <div
      class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32 pb-50"
    >
      <h1
        class="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
      >
        让系统使用
        <!-- -->
        <span class="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            class="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path
              d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
            ></path>
          </svg>
          <span class="relative">更简单</span>
        </span>
        <!-- -->
      </h1>
      <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        致力于服务于中小企业及个人项目定制开发
      </p>
      <div class="mt-30 flex justify-center gap-x-6">
        <a
          class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900"
          variant="solid"
          color="slate"
          target="_blank"
          href="https://pre-person.xarr.cn"
          >XArrPay个人版</a
        >
        <a
          class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
          variant="outline"
          color="slate"
          target="_blank"
          href="https://pre-merchant.xarr.cn"
        >
          <svg
            aria-hidden="true"
            class="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path
              d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"
            ></path>
          </svg>
          <span class="ml-3">XArrPay商户版</span></a
        >
      </div>
    </div>

    <div class="p-x-20">
      <div class="mx-auto w-full text-center text-3xl pt-20">产品大全</div>
      <div class="flex flex-row flex-wrap gap-6 justify-center pt-10">
        <div
          v-for="(item, index) in products"
          :key="index"
          class="max-w-80 border-1 rounded-md overflow-hidden"
        >
          <a :href="item.href" :title="item.desc">
            <div>
              <el-image :src="item.image" class="h-60 w-auto"></el-image>
            </div>
            <div class="p-y-4 p-x-3">
              <div class="text-xl">
                {{ item.title }}
              </div>
              <div class="text-gray-500 text-sm pt-2">{{ item.desc }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>

    <section>
      <div class="mx-auto w-full text-center text-3xl pt-20 pb-10">
        产品价格
      </div>
      <div class="mx-auto mt-1 max-w-5xl lg:px-6">
        <div
          class="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20"
        >
          <div
            class="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12"
          >
            <div class="relative flex flex-col">
              <h3
                class="mt-7 text-lg font-semibold tracking-tight text-slate-900"
              >
                XArrPay个人版
              </h3>
              <p class="mt-2 text-lg tracking-tight text-slate-600">
                个人站长使用.
              </p>
              <p class="order-first flex font-display font-bold">
                <span class="text-[1.75rem] leading-tight text-slate-500"
                  >¥</span
                ><span class="ml-1 mt-1 text-7xl tracking-tight text-slate-900"
                  >29.9</span
                >
              </p>
              <div class="order-last mt-8">
                <ul
                  role="list"
                  class="-my-2 divide-y text-base tracking-tight divide-slate-200 text-slate-900"
                >
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-slate-600"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">多通道</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-slate-600"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">邮件通知</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-slate-600"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">在线升级</span>
                  </li>
                </ul>
              </div>
              <a
                class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900 mt-8"
                color="slate"
                aria-label="Get started with the Essential plan for $15"
                variant="solid"
                href="https://auth.xarr.cn"
                >立即加入</a
              >
            </div>
          </div>
          <div
            class="relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12 bg-blue-600 sm:shadow-lg"
          >
            <div
              class="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]"
            >
              <svg aria-hidden="true" class="absolute inset-0 h-full w-full">
                <defs>
                  <pattern
                    id=":S5:"
                    width="128"
                    height="128"
                    patternUnits="userSpaceOnUse"
                    x="50%"
                    y="50%"
                  >
                    <path
                      d="M0 128V.5H128"
                      fill="none"
                      stroke="currentColor"
                    ></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#:S5:)"></rect>
              </svg>
            </div>
            <div class="relative flex flex-col">
              <h3 class="mt-7 text-lg font-semibold tracking-tight text-white">
                XArrPay商户版
              </h3>
              <p class="mt-2 text-lg tracking-tight text-white">
                服务于企业使用.
              </p>
              <p class="order-first flex font-display font-bold">
                <span class="text-[1.75rem] leading-tight text-blue-200">¥</span
                ><span class="ml-1 mt-1 text-7xl tracking-tight text-white"
                  >699</span
                >
              </p>
              <div class="order-last mt-8">
                <ul
                  role="list"
                  class="-my-2 divide-y text-base tracking-tight divide-white/10 text-white"
                >
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-white"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">用户管理</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-white"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">多模板支持</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-white"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">费率管理</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-white"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">多通道</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-white"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">套餐管理</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-white"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">插件商城</span>
                  </li>
                  <li class="flex py-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      class="h-8 w-8 flex-none fill-white"
                    >
                      <path
                        d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"
                      ></path>
                    </svg>
                    <span class="ml-4">在线升级</span>
                  </li>
                </ul>
              </div>
              <a
                class="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-8"
                color="white"
                aria-label="Get started with the Complete plan for $229"
                variant="solid"
                href="#"
                >立即加入</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="sponsors"
      aria-label="Sponsors"
      class="py-20 sm:py-32"
      data-immersive-translate-walked="d20a9c07-4053-4435-84a4-6608e1cea14b"
    >
      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        data-immersive-translate-walked="d20a9c07-4053-4435-84a4-6608e1cea14b"
      >
        <h2
          class="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl"
          data-immersive-translate-walked="d20a9c07-4053-4435-84a4-6608e1cea14b"
          data-immersive-translate-paragraph="1"
        >
          我们的合作伙伴与赞助商.
        </h2>
        <div
          class="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32"
        >
          <div class="flex items-center justify-center">
            <a
              href="https://www.bt.cn/u/Xwiupt"
              target="_blank"
              title="宝塔面板"
            >
              <el-image
                class="h-12"
                style="color: transparent"
                src="/static/images/bt.svg"
              />
            </a>
          </div>
        
          <div class="flex items-center justify-center">
            <a
              href="https://curl.qcloud.com/F9wikzg8"
              target="_blank"
              title="腾讯云"
            >
              <el-image
                class="h-12"
                style="color: transparent"
                src="/static/images/tx.svg"
              />
            </a>
          </div>
          <div class="flex items-center justify-center">
            <a href="https://www.xdau.cn/" target="_blank" title="咸蛋网">
              <el-image
                class="h-12"
                style="color: transparent"
                src="/static/images/xdw.png"
              />
            </a>
          </div>
          <div class="flex items-center justify-center">
            <a href="https://www.zunhuyun.com/" target="_blank" title="尊狐云">
              <el-image
                class="h-12 text-xl"
                style="color: transparent"
                src="/static/images/zhy.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import banner from "./components/banner.vue";

const products = ref([
  {
    title: "XArrPay个人版",
    desc: "XArrPay 个人版是专门为个人站长打造的支付系统",
    image: "/static/images/person.png",
    href: "https://pre-person.xarr.cn/",
  },
  {
    title: "XArrPay商户版",
    desc: "XArrPay 商户版是专门为企业及个人站长打造的支付系统",
    image: "/static/images/merchant.png",
    href: "https://pre-merchant.xarr.cn/",
  },
  {
    title: "XArrRss",
    desc: "XArrRss 是为动漫追剧爱好者设计的一套索引系统",
    image: "/static/images/xarr-rss.png",
    href: "https://xarr.52nyg.com",
  },
]);
</script>
