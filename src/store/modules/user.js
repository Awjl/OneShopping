import { login } from "@/api/login/login";

const user = {
  state: {
    utk: ''
  },
  mutations: {
    SET_UTK: (state, utk) => {
      state.utk = utk;
    }
  },
  actions: {
   
  }
};

export default user;
