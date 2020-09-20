<template>
  <div id="app">
    <app-header></app-header>
    <router-view> </router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import { eventBus } from "./main.js";
export default {
  name: "app",
  components: {
    appHeader: Header
  }
};
</script>

<style></style>
