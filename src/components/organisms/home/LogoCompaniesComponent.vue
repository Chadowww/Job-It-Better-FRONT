<script setup lang="ts">
const images = [
  {
    src: require("@/assets/images/partnerCompaniesLogo/akeneo-logo.png"),
  },
  {
    src: require("@/assets/images/partnerCompaniesLogo/allovoisins-logo.png"),
  },
  {
    src: require("@/assets/images/partnerCompaniesLogo/decathtech-logo.png"),
  },
  {
    src: require("@/assets/images/partnerCompaniesLogo/ikks-logo.png"),
  },
  {
    src: require("@/assets/images/partnerCompaniesLogo/lucca-logo.png"),
  },
  {
    src: require("@/assets/images/partnerCompaniesLogo/maisondumonde-logo.png"),
  },
  {
    src: require("@/assets/images/partnerCompaniesLogo/nickel-logo.png"),
  },
  {
    src: require("@/assets/images/partnerCompaniesLogo/uiris-logo.png"),
  },
];
</script>

<template>
  <section>
    <h2 class="text-center md:text-left text-5xl md:text-6xl font-bold my-6">
      Ils nous font <span class="text-green-900">confiance</span>
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
      <div
        class="flex justify-center items-center"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image.src" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
