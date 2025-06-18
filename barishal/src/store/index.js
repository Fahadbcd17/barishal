import { createStore } from "vuex";
import AuthService from "../services";
import TokenService from "../services/token";
import GetService from "../services/get";

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

const initialCityState = {
    currentCity: null,
    allCities: []
};

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
          commit("logout");
          TokenService.removeRefreshToken();
          TokenService.removeAccessToken();
          TokenService.removeUser();
          return Promise.resolve();
        },
        register({ commit }, user) {
          return AuthService.register(user).then(
            (response) => {
              commit("registerSuccess");
              return Promise.resolve(response.data);
            },
            (error) => {
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
    city: {
      namespaced: true,
      state: initialCityState,
      getters: {
        currentCity: (state) => state.currentCity,
        allCities: (state) => state.allCities,
      },
      actions: {
        async fetchCity({ commit }, cityId) {
          try {
            // Set authRequired to false for public access
            const response = await GetService.getCity(cityId, false);
            commit("setCurrentCity", response);
            return response;
          } catch (error) {
            console.error("Error fetching city:", error);
            throw error;
          }
        },
        async fetchAllCities({ commit }) {
          try {
            // Set authRequired to false for public access
            const response = await GetService.getAllCities(false);
            commit("setAllCities", response);
            return response;
          } catch (error) {
            console.error("Error fetching cities:", error);
            throw error;
          }
        },
        clearCurrentCity({ commit }) {
          commit("clearCurrentCity");
        }
      },
      mutations: {
        setCurrentCity(state, city) {
          state.currentCity = city;
        },
        setAllCities(state, cities) {
          state.allCities = cities;
        },
        clearCurrentCity(state) {
          state.currentCity = null;
        }
      },
    },

    attraction: {
      namespaced: true,
      state: {
        currentAttraction: null,
        attractions: []
      },
      getters: {
        currentAttraction: (state) => state.currentAttraction,
        attractions: (state) => state.attractions,
      },
      actions: {
        async fetchAttractions({ commit }) {
          try {
            const response = await GetService.getAttractions(true); // Requires auth
            commit("setAttractions", response);
            return response;
          } catch (error) {
            console.error("Error fetching attractions:", error);
            throw error;
          }
        },
        async createAttraction({ commit }, attractionData) {
          try {
            const response = await GetService.createAttraction(attractionData, true);
            commit("addAttraction", response);
            return response;
          } catch (error) {
            console.error("Error creating attraction:", error);
            throw error;
          }
        },
        async updateAttraction({ commit }, {id, attractionData}) {
          try {
            const response = await GetService.updateAttraction(id, attractionData, true);
            commit("updateAttraction", response);
            return response;
          } catch (error) {
            console.error("Error updating attraction:", error);
            throw error;
          }
        },
        async deleteAttraction({ commit }, id) {
          try {
            await GetService.deleteAttraction(id, true);
            commit("removeAttraction", id);
            return true;
          } catch (error) {
            console.error("Error deleting attraction:", error);
            throw error;
          }
        }
      },
      mutations: {
        setAttractions(state, attractions) {
          state.attractions = attractions;
        },
        addAttraction(state, attraction) {
          state.attractions.push(attraction);
        },
        updateAttraction(state, updatedAttraction) {
          const index = state.attractions.findIndex(a => a.id === updatedAttraction.id);
          if (index !== -1) {
            state.attractions.splice(index, 1, updatedAttraction);
          }
        },
        removeAttraction(state, id) {
          state.attractions = state.attractions.filter(a => a.id !== id);
        },
        setCurrentAttraction(state, attraction) {
          state.currentAttraction = attraction;
        },
        clearCurrentAttraction(state) {
          state.currentAttraction = null;
        }
      },
    }
  },
});