<script setup lang="ts">
import NavbarComponent from "@/components/organisms/global/NavbarComponent.vue";
import HeroComponent from "@/components/organisms/home/HeroComponent.vue";
import CardInfoComponent from "@/components/organisms/home/CardInfoComponent.vue";
import LogoCompaniesComponent from "@/components/organisms/home/LogoCompaniesComponent.vue";
import FooterComponent from "@/components/organisms/global/FooterComponent.vue";
import CompanyCards from "@/components/organisms/home/CompanyCardsComponent.vue";
</script>

<template>
  <header>
    <navbar-component />
  </header>
  <main
    class="min-h-screen w-full md:w-10/12 m-auto flex flex-col justify-between"
  >
    <HeroComponent />
    <CompanyCards />
    <CardInfoComponent />
    <LogoCompaniesComponent />
  </main>
  <FooterComponent />
</template>

<style scoped lang="scss"></style>
