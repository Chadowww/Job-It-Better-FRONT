<template>
  <div class="min-h-screen w-full flex flex-col justify-between">
    <navbar-component />
    <div class="h-24"></div>
    <router-view />
    <FooterComponent />
  </div>
</template>

<style lang="scss"></style>
<script setup lang="ts">
import FooterComponent from "@/components/organisms/global/FooterComponent.vue";
import NavbarComponent from "@/components/organisms/global/NavbarComponent.vue";
</script>
