<script setup lang="ts">
import { useModalVisibility } from "@/utils/modalVisibility";
import { useStore } from "vuex";

const store = useStore();
const modalVisibility = useModalVisibility(store);
</script>

<template>
  <li>
    <a
      @click="modalVisibility.toggleCompanyRegistrationModalVisibility"
      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-center text-lg font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
      href="#"
      data-te-dropdown-item-ref
      >Inscription</a
    >
  </li>
</template>

<style scoped lang="scss"></style>
