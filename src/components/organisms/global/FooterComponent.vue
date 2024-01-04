<script setup lang="ts">
import logo from "@/assets/images/newLogo.png";
import FacebookButton from "@/components/atoms/logo/FacebookButton.vue";
import LinkedinButton from "@/components/atoms/logo/LinkedinButton.vue";
import TwitterButton from "@/components/atoms/logo/TwitterButton.vue";
</script>

<template>
  <footer class="w-full bg-[#f5f5f5] px-12 py-6">
    <div class="w-full flex justify-around">
      <div class="hidden lg:flex w-3/12 justify-center">
        <img :src="logo" alt="Logo JobItBetter" class="w-3/12" />
      </div>
      <div
        class="hidden md:flex w-4/12 lg:w-3/12 flex-col justify-center items-center"
      >
        <h3 class="text-4xl font-bold text-gray-500 mb-4">Information</h3>
        <ul class="text-center">
          <li>Mentions légales</li>
          <li>PDC</li>
          <li>Politique de cookies</li>
        </ul>
      </div>
      <div
        class="hidden md:flex w-4/12 lg:w-3/12 flex-col justify-center items-center"
      >
        <h3 class="text-4xl font-bold text-gray-500 mb-4">Contact</h3>
        <a href="tel:0987654321">+33 (0)98754321</a>
        <a href="mailto:contact@jib.fr">contact@jib.fr</a>
        <a href="">1 rue du clodo 33500 Libourne</a>
      </div>
      <div
        class="hidden md:flex w-4/12 lg:w-3/12 flex-col justify-center items-center"
      >
        <h3 class="text-4xl font-bold text-gray-500 mb-4">Suivez-nous</h3>
        <div class="flex transform scale-75 xl:transform-none">
          <FacebookButton link="https://www.facebook.com/" />
          <LinkedinButton link="https://www.linkedin.com/" />
          <TwitterButton link="https://www.twitter.com/" />
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-6 items-center">
      <p>Externatic © 2023 - Tous droits réservés</p>
      <p>Développé avec le coeur par les Wilders</p>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
