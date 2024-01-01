import { computed, ComputedRef } from "vue";
import { Store, useStore } from "vuex";

const store: Store<any> = useStore();
export const isCandidateRegistrationModalVisible: ComputedRef = computed(
  () => store.state.isCandidateRegistrationModalVisible
);
export const isCandidateLoginModalVisible: ComputedRef = computed(
  () => store.state.isCandidateLoginModalVisible
);
export const isCompanyLoginModalVisible: ComputedRef = computed(
  () => store.state.isCompanyLoginModalVisible
);
export const isCompanyRegistrationModalVisible: ComputedRef = computed(
  () => store.state.isCompanyRegistrationModalVisible
);
export const toggleCompanyRegistrationModalVisibility = () => {
  store.dispatch("toggleCompanyRegistrationModalVisibility");
};
export const toggleCompanyLoginModalVisibility = () => {
  store.dispatch("toggleCompanyLoginModalVisibility");
};
export const toggleCandidateLoginModalVisibility = () => {
  store.dispatch("toggleCandidateLoginModalVisibility");
};
export const toggleCandidateRegistrationModalVisibility = () => {
  store.dispatch("toggleCandidateRegistrationModalVisibility");
};
