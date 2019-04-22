import { login } from "@/api/login/login";

const user = {
  state: {
    utk: ""
  },
  mutations: {
    SET_UTK: (state, utk) => {
      state.utk = utk;
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      console.log(userInfo);
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(res => {
            commit("SET_UTK", res.token);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default user;
