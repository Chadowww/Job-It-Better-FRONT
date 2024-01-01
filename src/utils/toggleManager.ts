import { ref, Ref } from "vue";

export const toggleNav = ref(false);
export const toggleRegister = ref(false);
export const toggleLogin = ref(false);
export const toggles = {
  nav: toggleNav,
  register: toggleRegister,
  login: toggleLogin,
};

export function setToggle(toggle: Ref<boolean>) {
  toggle.value = !toggle.value;
}
