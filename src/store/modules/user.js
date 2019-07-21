import { login } from "@/api/login/login";

const user = {
  state: {
    utk: JSON.parse(window.sessionStorage.getItem('userData')).utk || null
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
