import { ActionContext } from "vuex";
import { Mutations } from "../types/mutations";
import { State } from "../types/state";

export enum UsersActionsTypes {
  FETCH_USERS = "FETCH_USERS",
}

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;
