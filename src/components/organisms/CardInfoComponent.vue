<script setup lang="ts">
import imgGreen from "@/assets/images/Image_4961.png";
import imgOrange from "@/assets/images/Image_4962.png";
import imgPurple from "@/assets/images/Image_4963.png";
</script>

<template>
  <section class="w-10/12 m-auto">
    <h2 class="text-center md:text-left text-5xl md:text-6xl font-bold my-6">
      Trouver un <span>job</span>?
    </h2>
    <div class="mb-12">
      <div class="w-full flex flex-col md:flex-row justify-between py-3">
        <div class="w-full md:w-5/12 bg-[#7C948F80] rounded-2xl p-4 op">
          <img
            :src="imgGreen"
            alt=""
            class="w-full md:w-10/12 lg:w-8/12 xl:w-6/12"
          />
        </div>
        <div class="w-full md:w-5/12 flex flex-col justify-around">
          <h3 class="text-4xl font-bold mt-12 md:mt-0">
            Notre <span>proximité</span>
          </h3>
          <p class="text-2xl">
            L’expérience professionnelle est une chose. L’expérience de vie en
            est une autre. Alors nos consultants prennent le temps de faire
            connaissance avec chaque personne, pour comprendre le contexte, le
            parcours, les envies et les projets.
          </p>
        </div>
      </div>
    </div>
    <div class="mb-12">
      <div
        class="w-full flex flex-col md:flex-row-reverse justify-between py-3"
      >
        <div class="w-full md:w-5/12 bg-[#E7BFB1] rounded-2xl p-4 op">
          <img
            :src="imgOrange"
            alt=""
            class="w-full md:w-10/12 lg:w-8/12 xl:w-6/12"
          />
        </div>
        <div class="w-full md:w-5/12 flex flex-col justify-around">
          <h3 class="text-4xl font-bold mt-12 md:mt-0">
            Notre <span>performance</span>
          </h3>
          <p class="text-2xl">
            Notre réseau est une force et nous y travaillons sans relâche. Notre
            expérience nous permet d’identifier les vrais besoins d’une
            entreprise et de ceux qui la rejoignent.
          </p>
        </div>
      </div>
    </div>
    <div class="mb-12">
      <div class="w-full flex flex-col md:flex-row justify-between py-3">
        <div class="w-full md:w-5/12 bg-[#C7B6E6] rounded-2xl p-4 op">
          <img
            :src="imgPurple"
            alt=""
            class="w-full md:w-10/12 lg:w-8/12 xl:w-6/12"
          />
        </div>
        <div class="w-full md:w-5/12 flex flex-col justify-around">
          <h3 class="text-4xl font-bold mt-12 md:mt-0">
            Notre <span>durabilité</span>
          </h3>
          <p class="text-2xl">
            Notre challenge est de trouver l’équipe qui fonctionnera ensemble de
            manière professionnelle et personnelle, pour aller jusqu’au bout
            d’un projet commun. Notre responsabilité vis-à-vis des impacts de
            nos décisions et nos actions sur le long-terme correspondent
            également à notre politique RSE.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
span {
  color: #3b7116;
}
</style>
