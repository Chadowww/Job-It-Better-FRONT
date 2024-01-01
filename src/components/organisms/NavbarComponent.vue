<script setup lang="ts">
import { computed, onMounted, ref, Ref } from "vue";
import { useStore } from "vuex";
import logo from "@/assets/images/logo-allonge.png";
import { Dropdown, Ripple, initTE } from "tw-elements";
import CandidateButtonLogin from "@/components/molecules/candidate/CandidateButtonLogin.vue";
import CandidateButtonRegister from "@/components/molecules/candidate/CandidateButtonRegister.vue";
import CompanyButtonLogin from "@/components/molecules/company/CompanyButtonLogin.vue";
import CompanyButtonRegister from "@/components/molecules/company/CompanyButtonRegister.vue";
import LogoutButton from "@/components/molecules/LogoutButton.vue";
import SearchBar from "@/components/atoms/SearchBar.vue";
import CompanyModalRegister from "@/components/molecules/company/CompanyModalRegister.vue";
import CompanyModalLogin from "@/components/molecules/company/CompanyModalLogin.vue";
import CandidateModalRegister from "@/components/molecules/candidate/CandidateModalRegister.vue";
import CandidateModalLogin from "@/components/molecules/candidate/CandidateModalLogin.vue";

const store = useStore();
const isSearchBarVisible = computed(() => store.state.isSearchBarVisible);
const isCandidateRegistrationModalVisible = computed(
  () => store.state.isCandidateRegistrationModalVisible
);
const isCandidateLoginModalVisible = computed(
  () => store.state.isCandidateLoginModalVisible
);
const isCompanyLoginModalVisible = computed(
  () => store.state.isCompanyLoginModalVisible
);
const isCompanyRegistrationModalVisible = computed(
  () => store.state.isCompanyRegistrationModalVisible
);
const toggleCompanyRegistrationModalVisibility = () => {
  store.dispatch("toggleCompanyRegistrationModalVisibility");
};
const toggleCompanyLoginModalVisibility = () => {
  store.dispatch("toggleCompanyLoginModalVisibility");
};
const toggleCandidateLoginModalVisibility = () => {
  store.dispatch("toggleCandidateLoginModalVisibility");
};
const toggleCandidateRegistrationModalVisibility = () => {
  store.dispatch("toggleCandidateRegistrationModalVisibility");
};
const shouldHide = ref(false);
const toggleNav = ref(false);
const toggleRegister = ref(false);
const toggleLogin = ref(false);

const toggles = {
  nav: toggleNav,
  register: toggleRegister,
  login: toggleLogin,
};

function setToggle(toggle: Ref<boolean>) {
  toggle.value = !toggle.value;
}

onMounted(() => {
  initTE({ Dropdown, Ripple });
  setShouldHide();
  addEventListener("resize", setShouldHide);
  addEventListener("scroll", setShouldHide);
});

const token = ref(localStorage.getItem("token"));
const isLoggedIn = computed(() => !!token.value);

const setShouldHide = () => {
  const tailwindMdBreakpoint = 1024;
  shouldHide.value =
    isSearchBarVisible.value && window.innerWidth < tailwindMdBreakpoint;
};
</script>

<template>
  <nav>
    <div
      class="hidden fixed z-[100] md:flex justify-between items-center w-full px-4 bg-[#f5f5f5] shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)]"
    >
      <div class="w-2/12 my-4" v-if="!shouldHide">
        <a href="/">
          <img :src="logo" alt="Logo JobItBetter" />
        </a>
      </div>
      <div
        class="w-5/12 lg:w-4/12 xl:w-4/12 2xl:w-5/12"
        v-if="isSearchBarVisible"
      >
        <SearchBar />
      </div>
      <div
        class="flex justify-between items-center w-6/12 lg:w-5/12 xl:w-5/12 2xl:w-4/12"
      >
        <div class="relative" data-te-dropdown-ref v-if="!isLoggedIn">
          <button
            class="flex items-center whitespace-nowrap rounded px-2 lg:pr-3 pb-2 pt-2.5 text-sm lg:text-lg leading-normal text-black font-normal transition duration-150 ease-in-out motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
            type="button"
            id="dropdownMenuButton1"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Accès recruteur
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <ul
            class="absolute z-[1000] float-left m-0 hidden w-full list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
          >
            <CompanyButtonLogin />
            <CompanyButtonRegister />
          </ul>
        </div>
        <div class="relative" data-te-dropdown-ref>
          <button
            class="flex items-center whitespace-nowrap rounded px-2 lg:pr-3 pb-2 pt-2.5 text-sm lg:text-lg leading-normal text-black font-normal transition duration-150 ease-in-out motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)]"
            type="button"
            id="dropdownMenuButton1"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Emploi
            <span class="ml-2 w-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <ul
            class="absolute z-[1000] float-left m-0 hidden list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
          >
            <li>
              <a
                class="block whitespace-nowrap bg-transparent px-4 py-2 text-center text-lg font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >La page des offres</a
              >
            </li>
            <li>
              <a
                class="block whitespace-nowrap bg-transparent px-4 py-2 text-center text-lg font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Offres par villes</a
              >
            </li>
          </ul>
        </div>
        <CandidateButtonLogin v-if="!isLoggedIn" />
        <CandidateButtonRegister v-if="!isLoggedIn" />
        <svg
          v-if="isLoggedIn"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
        <a href="" v-if="isLoggedIn">
          <LogoutButton />
        </a>
        <a href="" v-if="isLoggedIn">
          <button
            type="button"
            class="inline-block rounded-full border-2 border-[#14532D] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#14532D] transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Mon profile
          </button>
        </a>
      </div>
    </div>
    <div
      class="md:hidden fixed z-[90] w-full p-4 bg-[#f5f5f5] shadow-[0_0px_3px_0_rgba(0,0,0,0.07),0_2px_2px_0_rgba(0,0,0,0.04)]"
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
          v-if="toggleNav"
        >
          <h3 class="text-2xl font-bold" @click="setToggle(toggles.register)">
            Espace candidats
          </h3>
          <transition name="accordion-register">
            <div
              v-if="toggleRegister"
              class="w-full h-20 overflow-hidden text-center"
            >
              <h4
                class="font-bold my-2"
                @click="toggleCandidateRegistrationModalVisibility"
              >
                Inscription
              </h4>
              <h4
                class="font-bold my-2"
                @click="toggleCandidateLoginModalVisibility"
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
              v-if="toggleLogin"
              class="w-full h-20 overflow-hidden text-center"
            >
              <h4
                class="font-bold my-2"
                @click="toggleCompanyRegistrationModalVisibility"
              >
                Inscription
              </h4>
              <h4
                class="font-bold my-2"
                @click="toggleCompanyLoginModalVisibility"
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
  </nav>
  <CompanyModalRegister v-if="isCompanyRegistrationModalVisible" />
  <CompanyModalLogin v-if="isCompanyLoginModalVisible" />
  <CandidateModalRegister v-if="isCandidateRegistrationModalVisible" />
  <CandidateModalLogin v-if="isCandidateLoginModalVisible" />
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
