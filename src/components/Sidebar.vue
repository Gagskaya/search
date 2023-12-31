<script setup lang="ts">
import { computed, ref, watchEffect } from "vue";

import { UsersActionsTypes } from "../store/modules/users/types/actions";
import { UsersMutationsTypes } from "../store/modules/users/types/mutations";
import { User } from "../store/modules/users/types";
import store from "../store";

const users = computed<User[]>(() => store.state.users.items);
const selectedUser = computed<User>(() => store.state.users.selectedUser);

const idFilterValue = ref("");
const usernameFilterValue = ref("");


const onSelectUser = async (user: User) => {
  await store.commit(UsersMutationsTypes.SELECT_USER, user);
};

watchEffect(async () => {
    await store.dispatch(
    UsersActionsTypes.FETCH_USERS_BY_ID,
    idFilterValue.value.replace(/\s/g, "").split(",")
  );
  
});
watchEffect(async () => {
    await store.dispatch(
    UsersActionsTypes.FETCH_USERS_BY_USERNAME,
    usernameFilterValue.value.replace(/\s/g, "").split(",")
  );
  
});
watchEffect(async () => {
  if (!idFilterValue.value.length && !usernameFilterValue.value.length) {
    await store.commit(UsersMutationsTypes.SELECT_USER, null);
  }
});

// watchEffect(() => {
//   console.log(filterValue.value.replace(/\s/g, "").split(","));
// });
</script>
<template>
  <div class="sidebar">
    <div class="sidebar__search">
      <h6 class="sidebar__search-title">Поиск сотрудников</h6>
      <input
        type="text"
        class="sidebar__search-input"
        v-model="idFilterValue"
        placeholder="Введите id"
        style="margin-bottom: 15px;"
        :disabled="usernameFilterValue.length"
      />
      <input
        type="text"
        class="sidebar__search-input"
        v-model="usernameFilterValue"
        placeholder="Введите имя"
        :disabled="idFilterValue.length"
      />
    </div>
    <div class="sidebar__results">
      <h6 class="sidebar__results-title">Результаты</h6>
      <template v-if="users.length">
        <div class="sidebar__results-card" v-for="item in users" :key="item.id">
          <div class="sidebar__results-card-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 0 512 512"
            >
              <path
                fill="#76787D"
                d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
              />
            </svg>
          </div>
          <div
            :class="[
              'sidebar__results-card-content',
              item.id === selectedUser?.id ? 'active' : '',
            ]"
            @click="onSelectUser(item)"
          >
            <p>{{ item.name }}</p>
            <span>{{ item.email }}</span>
          </div>
        </div>
      </template>
      <template v-else>
        <p>Ничего не найдено</p>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss/app";
.sidebar {
  border-right: 1px solid #dededd;
  flex-basis: 24%;
  padding: 23px 27px;
  &__search {
    margin-bottom: 29px;
    &-title {
      margin-bottom: 15px;
      font-weight: 600;
    }
    &-input {
      padding: 16px 24px;
      border: 1.5px solid var(--all-colors-gray-gray-200, #e9ecef);
      border-radius: 8px;
      color: #76787d;
      &:disabled {
        border-color: red;
        cursor: not-allowed;
        ::placeholder {
          color: red;
        }
      }
    }
  }
  &__results {
    &-title {
      margin-bottom: 18px;
      font-weight: 600;
    }
    &-card {
      display: flex;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      margin-bottom: 18px;
      &-image {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 21px;
        border-right: 1px solid #e0e0e0;
      }
      &-content {
        padding: 15px 30px 18px 15px;
        p {
          font-size: 14px;
          font-weight: 600;
        }
        span {
          color: #76787d;
          margin-top: 5px;
        }
        &:hover,
        &.active {
          background-color: #e0e0e0;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
