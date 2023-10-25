import axios from "axios";

import { User } from "../store/modules/users/types";
import { apiUrl } from "../constants/apiUrl";

export const usersApi = {
  async fetchUsers() {
    try {
      const { data } = await axios.get<User[]>(`${apiUrl}/users`);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};
