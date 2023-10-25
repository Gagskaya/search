import { User } from "./index";

export type State = {
  items: User[];
  selectedUser: User | null;

  loadingStatus: string;
};
