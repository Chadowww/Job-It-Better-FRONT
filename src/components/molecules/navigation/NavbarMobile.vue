<script setup lang="ts">
import { useStore } from "vuex";
import logo from "@/assets/images/logo-allonge.png";
import { toggles, setToggle } from "@/utils/toggleManager";
import { useModalVisibility } from "@/utils/modalVisibility";
import CompanyModalRegister from "@/components/molecules/company/CompanyModalRegister.vue";
import CandidateModalLogin from "@/components/molecules/candidate/CandidateModalLogin.vue";
import CompanyModalLogin from "@/components/molecules/company/CompanyModalLogin.vue";
import CandidateModalRegister from "@/components/molecules/candidate/CandidateModalRegister.vue";
const store = useStore();
const modalVisibility = useModalVisibility(store);
</script>

<template>
  <div
    class="md:hidden fixed z-[90] min-h-16 w-full p-4 bg-[#f5f5f5] shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)]"
  >
    <span
      class="absolute z-[90] top-5 left-5 transform scale-[150%]"
      @click="setToggle(toggles.nav)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </span>
    <a href="/">
      <img :src="logo" alt="Logo JobItBetter" class="w-8/12 m-auto" />
    </a>
    <transition name="left-nav">
      <div
        class="w-screen h-screen absolute flex flex-col justify-around items-center top-0 left-0 bg-[#f5f5f5] mt-16 pb-16"
        v-if="toggles.nav.value"
      >
        <h3 class="text-2xl font-bold" @click="setToggle(toggles.register)">
          Espace candidats
        </h3>
        <transition name="accordion-register">
          <div
            v-if="toggles.register.value"
            class="w-full h-20 overflow-hidden text-center"
          >
            <h4
              class="font-bold my-2"
              @click="
                modalVisibility.toggleCandidateRegistrationModalVisibility()
              "
            >
              Inscription
            </h4>
            <h4
              class="font-bold my-2"
              @click="modalVisibility.toggleCandidateLoginModalVisibility()"
            >
              Connexion
            </h4>
          </div>
        </transition>
        <hr />
        <h3 class="text-2xl font-bold" @click="setToggle(toggles.login)">
          Espace recruteurs
        </h3>
        <transition name="accordion-register">
          <div
            v-if="toggles.login.value"
            class="w-full h-20 overflow-hidden text-center"
          >
            <h4
              class="font-bold my-2"
              @click="
                modalVisibility.toggleCompanyRegistrationModalVisibility()
              "
            >
              Inscription
            </h4>
            <h4
              class="font-bold my-2"
              @click="modalVisibility.toggleCompanyLoginModalVisibility()"
            >
              Connexion
            </h4>
          </div>
        </transition>
        <hr />
        <h3 class="text-2xl font-bold">offres</h3>
        <hr />
        <h3 class="text-2xl font-bold">offres par villes</h3>
        <hr />
        <a href="mailto:externatic@hotmail.fr">
          <h3 class="text-2xl font-bold">contact</h3>
        </a>
      </div>
    </transition>
  </div>
  <CompanyModalRegister
    v-if="modalVisibility.isCompanyRegistrationModalVisible.value"
  />
  <CompanyModalLogin v-if="modalVisibility.isCompanyLoginModalVisible.value" />
  <CandidateModalRegister
    v-if="modalVisibility.isCandidateRegistrationModalVisible.value"
  />
  <CandidateModalLogin
    v-if="modalVisibility.isCandidateLoginModalVisible.value"
  />
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.left-nav-enter-active,
.left-nav-leave-active {
  transition: left 0.5s ease;
}
.left-nav-leave-to,
.left-nav-enter-from {
  left: -100%;
}

.accordion-register-enter-active,
.accordion-register-leave-active {
  transition: height 1s ease;
}
.accordion-register-enter-from,
.accordion-register-leave-to {
  height: 0;
}
hr {
  width: 80%;
  border: 1px solid gray;
}
</style>
