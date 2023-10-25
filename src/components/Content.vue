<script setup lang="ts">
import { computed } from "vue";

import { User } from "../store/modules/users/types";
import store from "../store";

const user = computed<User>(() => store.state.users.selectedUser);
</script>
<template>
  <template v-if="user">
    <div class="content">
      <div class="content__image">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="140px"
          color="grey"
          viewBox="0 0 512 512"
        >
          <path
            fill="#76787D"
            d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
          />
        </svg>
      </div>
      <div class="content__info">
        <h6 class="content__info-name">{{ user.username }}</h6>
        <div class="content__info-email">
          <span>email: </span>
          <p>{{ user.email }}</p>
        </div>
        <div class="content__info-email">
          <span>phone: </span>
          <p>{{ user.phone }}</p>
        </div>
        <div class="content__info-about">
          <h6 class="content__info-about-title">О себе:</h6>
          <p class="content__info-about-text">
            {{ user.company.catchPhrase }}
          </p>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="empty">
      <p class="empty__text">
        Выберите сотрудника, чтобы посмотреть его профиль
      </p>
    </div>
  </template>
</template>
<style lang="scss" scoped>
h6 {
  font-weight: 600;
}
.content {
  flex-basis: 76%;
  padding: 30px 30px 30px 21px;
  display: flex;
  &__image {
    max-height: 300px;
    flex-basis: 48%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e0e0e0;
    margin-right: 61px;
  }
  &__info {
    flex-basis: 48%;
    &-email,
    &-phone {
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      span {
        font-weight: 600;
        font-size: 14px;
        margin-right: 10px;
      }
      p {
        color: #76787d;
        font-size: 14px;
      }
    }
    &-about {
      &-title {
        margin-top: 20px;
        margin-bottom: 25px;
      }
      &-text {
        font-size: 14px;
        color: #76787d;
      }
    }
  }
}
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &__text {
    color: #76787d;
    font-size: 14px;
  }
}
</style>
