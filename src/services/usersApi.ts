import axios from "axios";

import { User } from "../store/modules/users/types";
import { apiUrl } from "../constants/apiUrl";

export const usersApi = {
  async fetchUsersById(filterValue: string) {
    try {
      const { data } = await axios.get<User[]>(`${apiUrl}/users`, {
        params: { id: filterValue },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async fetchUsersByUsername(filterValue: string) {
    try {
      const { data } = await axios.get<User[]>(`${apiUrl}/users`, {
        params: { username: filterValue },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};