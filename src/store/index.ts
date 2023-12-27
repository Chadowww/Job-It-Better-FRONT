import { createStore } from "vuex";

export default createStore({
  state: {
    isSearchBarVisible: false,
  },
  getters: {},
  mutations: {
    toggleSearchBarVisibility(state) {
      state.isSearchBarVisible = !state.isSearchBarVisible;
    },
  },
  actions: {},
  modules: {},
});
