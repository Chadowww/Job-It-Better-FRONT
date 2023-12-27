<script setup lang="ts">
import NavbarComponent from "@/components/organisms/NavbarComponent.vue";
import HeroComponent from "@/components/organisms/HeroComponent.vue";
import CardInfoComponent from "@/components/organisms/CardInfoComponent.vue";
import LogoCompaniesComponent from "@/components/organisms/LogoCompaniesComponent.vue";
</script>

<template>
  <main class="min-h-screen flex flex-col justify-between">
    <header>
      <navbar-component />
      <HeroComponent />
    </header>
    <section>
      <div>
        <p>section card entreprises</p>
      </div>
    </section>
    <CardInfoComponent />
    <LogoCompaniesComponent />
    <footer>
      <p>section footer</p>
    </footer>
  </main>
</template>

<style scoped lang="scss"></style>
