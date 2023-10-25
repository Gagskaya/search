import { User } from "./index";

export type State = {
  items: User[];
  filteredItems: User[];

  loadingStatus: string;
};
