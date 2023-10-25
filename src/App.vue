<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

import "./App.scss";
</script>

<template>
  <div class="container">
    <Header />

    <div class="wrap">
      <Sidebar />
      <Content />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 50px;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
}
.wrap {
  display: flex;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid #dededd;
  margin-top: 26px;
  min-height: 585px;
}
</style>
