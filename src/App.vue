<!-- @format -->

<script lang="ts" setup>
import { onBeforeMount } from "vue";
import useStore from "./store";

console.log(import.meta);
console.log(import.meta.env);
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style lang="less"></style>