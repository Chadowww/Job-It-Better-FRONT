<script setup lang="ts">
import NavbarComponent from "@/components/organisms/NavbarComponent.vue";
import HeroComponent from "@/components/organisms/HeroComponent.vue";
import CardInfoComponent from "@/components/organisms/CardInfoComponent.vue";
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
    <section>
      <div>
        <p>section card confiance</p>
      </div>
    </section>
    <footer>
      <p>section footer</p>
    </footer>
  </main>
</template>

<style scoped lang="scss"></style>
