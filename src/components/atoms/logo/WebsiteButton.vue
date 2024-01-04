<script setup lang="ts">
import { defineProps } from "vue";
import { string } from "zod";

defineProps({
  link: string(),
});
</script>

<template>
  <a
    :href="link"
    class="flex justify-center items-center"
    :class="{ 'hover:animate-pulse': link != null, disable: link == null }"
  >
    <img
      width="70"
      height="70"
      src="https://img.icons8.com/deco/48/domain.png"
      alt="domain"
    />
  </a>
</template>

<style scoped lang="scss"></style>
