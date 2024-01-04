<script setup lang="ts">
import HeroComponent from "@/components/organisms/home/HeroComponent.vue";
import CardInfoComponent from "@/components/organisms/home/CardInfoComponent.vue";
import LogoCompaniesComponent from "@/components/organisms/home/LogoCompaniesComponent.vue";
import CompanyCards from "@/components/organisms/home/CompanyCardsComponent.vue";
</script>

<template>
  <main
    class="min-h-screen w-full md:w-10/12 m-auto flex flex-col justify-between"
  >
    <HeroComponent />
    <CompanyCards />
    <CardInfoComponent />
    <LogoCompaniesComponent />
  </main>
</template>

<style scoped lang="scss"></style>
