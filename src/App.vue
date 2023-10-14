<template>
  <HeaderComponentVue />
  <div style="margin-top: 60px">
    <div
      v-if="store.state.isLoading"
      style="
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <a-spin size="large" />
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import HeaderComponentVue from "./layout/HeaderComponent.vue";
import { store } from "./store";
</script>
<style >
@import "./style/style.css";
</style>
