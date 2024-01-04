<script setup lang="ts">
import NavbarMobile from "@/components/molecules/navigation/NavbarMobile.vue";
import NavbarDesktop from "@/components/molecules/navigation/NavbarDesktop.vue";
import CandidateModalRegister from "@/components/molecules/candidate/CandidateModalRegister.vue";
import { useModalVisibility } from "@/utils/modalVisibility";
import { useStore } from "vuex";
import CompanyModalLogin from "@/components/molecules/company/CompanyModalLogin.vue";
import CompanyModalRegister from "@/components/molecules/company/CompanyModalRegister.vue";
import CandidateModalLogin from "@/components/molecules/candidate/CandidateModalLogin.vue";
const store = useStore();
const modalVisibility = useModalVisibility(store);
</script>

<template>
  <nav>
    <NavbarDesktop />
    <NavbarMobile />
  </nav>
  <transition name="fade">
    <CandidateModalLogin
      v-show="modalVisibility.isCandidateLoginModalVisible.value"
    />
  </transition>
  <transition name="fade">
    <CandidateModalRegister
      v-if="modalVisibility.isCandidateRegistrationModalVisible.value"
    />
  </transition>
  <transition name="fade">
    <CompanyModalLogin
      v-if="modalVisibility.isCompanyLoginModalVisible.value"
    />
  </transition>
  <transition name="fade">
    <CompanyModalRegister
      v-if="modalVisibility.isCompanyRegistrationModalVisible.value"
    />
  </transition>
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
</style>
