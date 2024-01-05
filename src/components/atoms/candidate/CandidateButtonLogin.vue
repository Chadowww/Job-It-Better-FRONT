<script setup lang="ts">
import { useModalVisibility } from "@/utils/modalVisibility";
import { useStore } from "vuex";

const store = useStore();
const modalVisibility = useModalVisibility(store);
</script>

<template>
  <button
    @click="modalVisibility.toggleCandidateLoginModalVisibility"
    type="button"
    class="inline-block rounded-full border-2 border-[#14532D] px-2 lg:px-3 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#14532D] transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    data-te-ripple-init
  >
    Connexion
  </button>
</template>

<style scoped lang="scss"></style>
