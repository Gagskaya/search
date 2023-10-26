import { AugmentedActionContext, UsersActionsTypes } from "./types/actions";
import { UsersMutationsTypes } from "./types/mutations";
import { usersApi } from "../../../services/usersApi";
import { LoadingStatus } from "../../../types/LoadingStatus";

export const actions = {
  async [UsersActionsTypes.FETCH_USERS_BY_ID](
    { commit }: AugmentedActionContext,
    filterValue: string
  ) {
    try {
      commit(UsersMutationsTypes.SET_LOADING_STATUS, LoadingStatus.LOADING);
      const users = await usersApi.fetchUsersById(filterValue);

      if (!filterValue?.length) {
        commit(UsersMutationsTypes.SET_USERS, []);
      } else {
        if (users) {
          commit(UsersMutationsTypes.SET_USERS, users);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      commit(UsersMutationsTypes.SET_LOADING_STATUS, LoadingStatus.SUCCESS);
    }
  },
  async [UsersActionsTypes.FETCH_USERS_BY_USERNAME](
    { commit }: AugmentedActionContext,
    filterValue: string
  ) {
    try {
      commit(UsersMutationsTypes.SET_LOADING_STATUS, LoadingStatus.LOADING);
      const users = await usersApi.fetchUsersByUsername(filterValue);

      if (!filterValue?.length) {
        commit(UsersMutationsTypes.SET_USERS, []);
      } else {
        if (users) {
          commit(UsersMutationsTypes.SET_USERS, users);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      commit(UsersMutationsTypes.SET_LOADING_STATUS, LoadingStatus.SUCCESS);
    }
  },
};
