<template>
  <section class="flex w-full flex-col">
    <div class="p-y-20 bg-blue-600 w-full text-white p-x-5">
      <div class="text-4xl pb-10">宝塔面板</div>
      <div class="text-xl">
        宝塔联合定制面板，为您提供强大的云服务管理工具，支持一键部署、监控、备份等功能，助您轻松管理云服务，提升工作效率。
      </div>

      <div class="flex gap-4 pt-4">
        <a href="https://demo.bt.cn/login">
          <el-button type="success">查看演示</el-button>
        </a>
        <a href="#install">
          <el-button type="success">立即免费安装</el-button>
        </a>
      </div>
    </div>
    <div class="flex flex-row gap-x-8 p-2 justify-center py-10">
      <a href="#funcs" class="text-xl">功能优势</a>
      <a href="#system" class="text-xl">系统要求</a>
      <a href="#install" class="text-xl">一键安装</a>
      <a href="#question" class="text-xl">常见问题</a>
    </div>

    <!-- 功能优势 -->
    <div class="p-20" id="funcs">
      <div class="text-4xl pb-3">功能优势</div>

      <div class="py-4">
        <el-image src="/static/images/bt-home.png"></el-image>
      </div>

      <div class="text-gray-500">
        宝塔Linux面板是提升运维效率的服务器管理软件，支持一键LAMP/LNMP/集群/监控/网站/FTP/数据库/JAVA等100多项服务器管理功能。
      </div>

      <div class="flex flex-row pt-10 gap-6 flex-wrap">
        <div class="w-50">
          <div>一键安装</div>
          <div class="text-sm text-gray-500 pt-4">
            一键安装LNMP、LAMP、LNMP一键包、宝塔面板等环境
          </div>
        </div>
        <div class="w-50">
          <div>一键管理</div>

          <div class="text-sm text-gray-500 pt-4">
            一键管理网站、数据库、FTP、文件、SSL、计划任务等
          </div>
        </div>
        <div class="w-50">
          <div>一键部署</div>

          <div class="text-sm text-gray-500 pt-4">
            一键部署Discuz、WordPress、Dede等PHP开源程序
          </div>
        </div>
        <div class="w-50">
          <div>一键升级</div>
          <div class="text-sm text-gray-500 pt-4">
            一键升级Linux内核、LNMP、MySQL、PHP、Redis、Memcached等
          </div>
        </div>
      </div>
    </div>

    <!-- 系统支持 -->
    <div class="p-20" id="system">
      <div class="text-4xl pb-3">系统要求</div>
      <div class="pb-6">
        <div class="text-xl">操作系统:</div>
        <div class="text-gray-600">
          全新系统(支持CentOS、Ubuntu、Debian、Fedora、Deepin、Windows)
        </div>
        <div class="text-gray-600">
          确保是干净的操作系统，没有安装过其它环境带的Apache/Nginx/php/MySQL
          宝塔Linux6.0版本是基于centos7开发的，强烈建议使用centos7.x 系统
        </div>
      </div>
      <div>
        <div class="text-xl">内存要求:</div>
        <div class="text-gray-600">
          内存要求最低512MB，推荐768MB以上，纯面板约占系统60MB内存
        </div>
      </div>
    </div>

    <div class="p-20" id="install">
      <div class="text-4xl pb-3">
        一键安装 <span class="text-sm">2分钟左右能装好</span>
      </div>

      <div class="pt-6">
        <div>
          <div>
            系统兼容性排序: Debian-12（推荐） Ubuntu-22 Centos 9，OpenCloud
            9，AlibabaCloud 3，麒麟，统信等其他Linux系统
          </div>
          <div>
            稳定版：推荐公司、企事业单位及生产环境使用，特别注重安全和稳定性，只修BUG，不加新功能
          </div>
          <div>正式版：推荐技术爱好者使用，每月都会更新新功能</div>
        </div>
      </div>

      <div class="p-y-4 flex gap-4 flex-col">
        <div
          class="flex flex-row items-center gap-2"
          v-for="(item, index) in installs"
          :key="index"
        >
          <div class="w-18">{{ item.label }}</div>
          <div
            class="text-white bg-black p-3 rounded-md flex-1"
            v-html="item.val"
          ></div>
          <el-button
            type="primary"
            class="w-20 h-10"
            @click="handleCopy(item.val)"
            >复制</el-button
          >
        </div>
      </div>
    </div>

    <div class="p-20" id="question">
      <div class="text-4xl pb-8">常见问题</div>
      <div>
        <div class="pb-10">
          <div class="text-xl pb-3">系统和环境的兼容性?</div>
          <div class="text-gray-700">
            <div>
              推荐：Debian-12 或 Ubuntu-22 或
              OpenCloud-9(腾讯云)，Alibaba-Cloud-3（阿里云）
            </div>
            <div>
              兼容：Debian-10+ Uubuntu-18+ Centos/Alma/Rocky9 OpenEuler20+
              统信20 麒麟V10SP3（龙芯/x86/鲲鹏）
            </div>
            <div class="flex flex-row gap-3">
              <div>环境兼容详细说明:</div>
              <a
                href="https://docs.qq.com/sheet/DUm54VUtyTVNlc21H?tab=BB08J2"
                target="_blank"
                class="text-green-700"
                >主流系统环境兼容列表</a
              >
              <a
                href="https://docs.qq.com/sheet/DUkFtbmZaVFp4Z1NB?tab=BB08J2"
                target="_blank"
                class="text-green-700"
                >国产系统环境兼容列表</a
              >
            </div>
          </div>
        </div>

        <div class="pb-10">
          <div class="text-xl pb-3">面板安装后无法访问，如何排查?</div>
          <div class="text-gray-700">
            <div>
              1. 检查服务器安全组是否放行面板端口,面板端口查看命令：cat
              /www/server/panel/data/port.pl
            </div>

            <div>
              2. 检查面板是否运行正常，尝试执行命令重启宝塔：bt
              restart如无返回报错说明宝塔正常
            </div>

            <div>3. 执行bt default获取最新面板登录地址尝试访问</div>

            <div>4. 如有出现报错相关信息，请联系客服</div>
          </div>
        </div>
        <div class="pb-10">
          <div class="text-xl pb-3">如何查看默认账号密码?</div>
          <div class="text-gray-700">
            <div>1. 执行bt default获取默认账户密码</div>
            <div>2. 执行bt 5 重置宝塔面板密码</div>
            <div>3. 如果出现仍无法登录的情况，请联系客服</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { copyToClip } from "@/utils/copy";
import { Message } from "element-ui";
import { ref } from "vue";

const installs = ref([
  {
    label: "Centos:",
    val: "yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh 12aedbb91",
  },
  {
    label: "Debian:",
    val: "wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh 12aedbb91",
  },
  {
    label: "Ubuntu:",
    val: "wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh 12aedbb91",
  },
  {
    label: "Update安装:",
    val: "wget -O update.sh http://download.bt.cn/install/update6.sh && sh update.sh 12aedbb91",
  },
  {
    label: "通用安装:",
    val: "url=https://download.bt.cn/install/install_lts.sh;if [ -f /usr/bin/curl ];then curl -sSO $url;else wget -O install_lts.sh $url;fi;bash install_lts.sh 12aedbb91",
  },
]);

const handleCopy = (row) => {
  copyToClip(row).then(() => {
    Message.success("复制成功");
  });
};
</script>