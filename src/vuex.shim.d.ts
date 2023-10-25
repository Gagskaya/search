import { Store } from "vuex";

import { User } from "./store/modules/users/types";

declare module "@vue/runtime-core" {
  // Declare your own store states.
  interface State {
    users: {
      items: User[];
      loadingStatus: string;
    };
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
