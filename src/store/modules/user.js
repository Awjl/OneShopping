import { login } from "@/api/login/login";
import { setUtk } from "@/utils/auth";

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
            console.log(res);
            setUtk(res.utk);
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
