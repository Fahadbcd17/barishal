import { createStore } from "vuex";
import AuthService from "../services";
import TokenService from "../services/token";
const user = JSON.parse(localStorage.getItem("user"));
const access_token = JSON.parse(localStorage.getItem("access_token"));
const refresh_token = JSON.parse(localStorage.getItem("refresh_token"));

const initialState = user
  ? {
      loggedIn: true,
      access_token,
      refresh_token,
      isAdmin: user.is_admin,
      user: user,
    }
  : {
      loggedIn: false,
      access_token: null,
      refresh_token: null,
      isAdmin: false,
      user: null,
    };

const initialTaxState = {};
export const store = createStore({
  modules: {
    auth: {
      namespaced: true,
      state: initialState,
      getters: {
        loggedIn: (state) => state.loggedIn,
        user: (state) => state.user,
        accessToken: (state) => state.access_token,
        refreshToken: (state) => state.refresh_token,
        isAdmin: (state) => state.user.is_admin,
      },
      actions: {
        login({ commit }, user) {
          return AuthService.login(user).then(
            async (tokens) => {
              TokenService.setLocalRefreshToken(tokens.refresh);
              TokenService.setLocalAccessToken(tokens.access);
              //await store.dispatch("shop/getPrimaryShop");
              return await AuthService.me().then(
                async (me) => {
                  TokenService.setLocalUser(me);
                  commit("loginSuccess", { user: me, tokens: tokens });
                  return Promise.resolve(me);
                },
                (error) => {
                  commit("loginFailure");
                  return Promise.reject(error);
                }
              );
            },
            (error) => {
              commit("loginFailure");
              return Promise.reject(error);
            }
          );
        },
        logout({ commit }) {
          // AuthService.logout();
          commit("logout");
          TokenService.removeRefreshToken();
          TokenService.removeAccessToken();
          TokenService.removeUser();
          return Promise.resolve();
        },
        register({ commit }, user) {
          return AuthService.register(user).then(
            (response) => {
              console.log(
                "🚀 ~ file: index.js:54 ~ register ~ response:",
                response
              );
              commit("registerSuccess");
              return Promise.resolve(response.data);
            },
            (error) => {
              console.log("🚀 ~ file: index.js:54 ~ register ~ error:", error);
              commit("registerFailure");
              return Promise.reject(error);
            }
          );
        },
        refreshToken({ commit }, accessToken) {
          commit("refreshToken", accessToken);
        },
      },

      mutations: {
        loginSuccess(state, user) {
          state.loggedIn = true;
          state.access_token = user.tokens.access;
          state.refresh_token = user.tokens.refresh;
          state.user = user.user;
        },
        refreshToken(state, accessToken) {
          state.loggedIn = true;
          state.access_token = accessToken;
        },
        loginFailure(state) {
          state.loggedIn = false;
          state.user = null;
          state.access_token = null;
          state.refresh_token = null;
          state.isAdmin = false;
        },
        logout(state) {
          state.loggedIn = false;
          state.access_token = null;
          state.refresh_token = null;
          state.user = null;
          state.isAdmin = false;
        },
        registerSuccess(state) {
          state.loggedIn = false;
        },
        registerFailure(state) {
          state.loggedIn = false;
        },
      },
    },
  },
});
