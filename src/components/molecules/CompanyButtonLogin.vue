<script setup lang="ts">
import { ref } from "vue";
import CompanyModalLogin from "@/components/molecules/CompanyModalLogin.vue";

const toggleLogin = ref(false);
const setToggleLogin = () => (toggleLogin.value = !toggleLogin.value);
</script>

<template>
  <li>
    <a
      @click="setToggleLogin"
      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-center text-lg font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
      href="#"
      data-te-dropdown-item-ref
      >connexion</a
    >
  </li>
  <transition name="login-modal">
    <CompanyModalLogin
      v-if="toggleLogin"
      @update:toggleLogin="(val) => (toggleLogin = val)"
      :toggleLogin="toggleLogin"
    />
  </transition>
</template>

<style scoped lang="scss">
.login-modal-enter-active,
.login-modal-leave-active {
  transition: opacity 0.5s ease;
}

.login-modal-enter-from,
.login-modal-leave-to {
  opacity: 0;
}
</style>
