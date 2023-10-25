import { state } from "../state";
import { User } from "./index";

export enum UsersMutationsTypes {
  SET_USERS = "SET_USERS",
  FILTER_USERS = "FILTER_USERS",
  SET_LOADING_STATUS = "SET_LOADING_STATUS",
}

export type Mutations<S = typeof state> = {
  [UsersMutationsTypes.SET_USERS](state: S, users: User[]): void;
  [UsersMutationsTypes.FILTER_USERS](state: S, list: User[]): void;

  [UsersMutationsTypes.SET_LOADING_STATUS](
    state: S,
    loadingStatus: string
  ): void;
};
