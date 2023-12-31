import { createStore } from "vuex";

export default createStore({
  state: {
    isSearchBarVisible: false,
    isCompanyRegistrationModalVisible: false,
    isCompanyLoginModalVisible: false,
    isCandidateRegistrationModalVisible: false,
    isCandidateLoginModalVisible: false,
  },
  getters: {},
  mutations: {
    toggleSearchBarVisibility(state) {
      state.isSearchBarVisible = !state.isSearchBarVisible;
    },
    toggleCompanyRegistrationModalVisibility(state) {
      state.isCompanyRegistrationModalVisible =
        !state.isCompanyRegistrationModalVisible;
    },
    toggleCompanyLoginModalVisibility(state) {
      state.isCompanyLoginModalVisible = !state.isCompanyLoginModalVisible;
    },
    toggleCandidateRegistrationModalVisibility(state) {
      state.isCandidateRegistrationModalVisible =
        !state.isCandidateRegistrationModalVisible;
    },
    toggleCandidateLoginModalVisibility(state) {
      state.isCandidateLoginModalVisible = !state.isCandidateLoginModalVisible;
    },
  },
  actions: {
    toggleCompanyRegistrationModalVisibility({ commit }) {
      commit("toggleCompanyRegistrationModalVisibility");
    },
    toggleCompanyLoginModalVisibility({ commit }) {
      commit("toggleCompanyLoginModalVisibility");
    },
    toggleCandidateRegistrationModalVisibility({ commit }) {
      commit("toggleCandidateRegistrationModalVisibility");
    },
    toggleCandidateLoginModalVisibility({ commit }) {
      commit("toggleCandidateLoginModalVisibility");
    },
  },
  modules: {},
});
