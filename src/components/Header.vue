<script setup lang="ts"></script>
<template>
  <div class="header">
    <h1 class="header__title">Жилфонд</h1>
    <p>Пользователь</p>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/app";
.header {
  display: flex;
  justify-content: space-between;
  &__title {
    font-size: 30px;
    font-family: $font-regular;
    color: $red;
    font-weight: 700;
  }
}
</style>
