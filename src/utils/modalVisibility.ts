import { computed, ComputedRef } from "vue";

interface State {
  isCandidateRegistrationModalVisible: boolean;
  isCandidateLoginModalVisible: boolean;
  isCompanyLoginModalVisible: boolean;
  isCompanyRegistrationModalVisible: boolean;
}

interface Store {
  state: State;
  dispatch: (arg: string) => void;
}

const modalStates = [
  "isCandidateRegistrationModalVisible",
  "isCandidateLoginModalVisible",
  "isCompanyLoginModalVisible",
  "isCompanyRegistrationModalVisible",
];

const toggleModalActions = [
  "toggleCompanyRegistrationModalVisibility",
  "toggleCompanyLoginModalVisibility",
  "toggleCandidateLoginModalVisibility",
  "toggleCandidateRegistrationModalVisibility",
];

export function useModalVisibility(store: Store) {
  const computedStates = modalStates.reduce((result, key) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result[key] = computed(() => store.state[key]);
    return result;
  }, {} as Record<string, ComputedRef<boolean>>);

  const dispatchers = toggleModalActions.reduce((result, action) => {
    result[action] = () => store.dispatch(action);
    return result;
  }, {} as Record<string, () => void>);

  return {
    ...computedStates,
    ...dispatchers,
  };
}
