<script setup lang="ts">
import { ref } from "vue";
import CompanyModalRegister from "@/components/molecules/company/CompanyModalRegister.vue";

const toggleRegister = ref(false);
const setToggleRegister = () => (toggleRegister.value = !toggleRegister.value);
</script>

<template>
  <li>
    <a
      @click="setToggleRegister"
      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-center text-lg font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
      href="#"
      data-te-dropdown-item-ref
      >Inscription</a
    >
  </li>
  <transition name="register-modal">
    <CompanyModalRegister
      v-if="toggleRegister"
      @update:toggleRegister="(val) => (toggleRegister = val)"
      :toggleRegister="toggleRegister"
    />
  </transition>
</template>

<style scoped lang="scss">
.register-modal-enter-active,
.register-modal-leave-active {
  transition: opacity 0.5s ease;
}

.register-modal-enter-from,
.register-modal-leave-to {
  opacity: 0;
}
</style>
