import { MutationTree } from "vuex";

import { Mutations, UsersMutationsTypes } from "./types/mutations";
import { State } from "./types/state";
import { User } from "./types";

export const mutations: MutationTree<State> & Mutations = {
  [UsersMutationsTypes.SET_USERS](state: State, users: User[]) {
    state.items = users;
  },
  [UsersMutationsTypes.SELECT_USER](state: State, user: User) {
    state.selectedUser = user;
  },
  [UsersMutationsTypes.SET_LOADING_STATUS](
    state: State,
    loadingStatus: string
  ) {
    state.loadingStatus = loadingStatus;
  },
};
