<script setup lang="ts">
import { ref } from "vue";
import CandidateModalRegister from "@/components/molecules/candidate/CandidateModalRegister.vue";

const toggleRegister = ref(false);
const setToggleRegister = () => (toggleRegister.value = !toggleRegister.value);
</script>

<template>
  <button
    @click="setToggleRegister"
    type="button"
    class="inline-block rounded-full border-2 border-[#14532D] px-2 lg:px-3 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#14532D] transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    data-te-ripple-init
  >
    Inscription
  </button>
  <transition name="register-modal">
    <CandidateModalRegister
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
