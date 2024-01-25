<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { getUser, user } from "@/services/API/user/UserService";
import { uploadAvatar } from "@/services/file/FileManager";
import moment from "moment";
import LinkedinButton from "@/components/atoms/logo/LinkedinButton.vue";
import avatar from "@/assets/images/avatar.png";
import GithubButton from "@/components/atoms/logo/GithubButton.vue";
import FacebookButton from "@/components/atoms/logo/FacebookButton.vue";
import TwitterButton from "@/components/atoms/logo/TwitterButton.vue";
import WebsiteButton from "@/components/atoms/logo/WebsiteButton.vue";
import UserProfileUpdateForm from "@/components/molecules/candidate/UserProfileUpdateForm.vue";
import UserProfileResumeCard from "@/components/molecules/candidate/UserProfileResumeCard.vue";

const store = useStore();
const isCardUpdateUserVisible = computed(
  () => store.state.isCardUpdateUserVisible
);
const isCardResumeVisible = computed(() => store.state.isCardResumeVisible);
const toggleCardUpdateUserVisibility = () => {
  store.dispatch("toggleCardUpdateUserVisibility");
};
const toggleCardResumeVisibility = () => {
  store.dispatch("toggleCardResumeVisibility");
};

const file = ref(null);

const onFileChange = (e: any) => {
  file.value = e.target.files[0];
  upload();
};

const upload = async () => {
  console.log(file.value);
  if (file.value) {
    if (await uploadAvatar(file.value)) {
      window.location.reload();
    }
  }
};

moment.locale("fr");
onMounted(async () => {
  await getUser();
});
</script>

<template>
  <section
    class="bg-[#f5f5f5] w-full flex flex-wrap flex-col sm:flex-row-reverse justify-around items-center sm:items-start py-5 sm:px-5 md:my-16 sm:rounded-2xl shadow-custom"
  >
    <div class="w-full sm:w-5/12 flex justify-center items-center">
      <div
        class="w-11/12 bg-[#f5f5f5] flex flex-col-reverse sm:flex-row p-5 rounded-2xl shadow-custom"
      >
        <div class="w-full sm:w-8/12 flex flex-col justify-around">
          <div>
            <h3 class="text-left text-xl sm:text-2xl font-bold mt-6">
              Bonjour <span class="text-green-900">{{ user.firstname }}</span>
              :]
            </h3>
            <small
              >dernière mise à jour :
              {{ moment(user.updated_at, "YYYYMMDD").fromNow() }}</small
            >
          </div>
          <address class="mt-6 font-bold">
            Email : {{ user.email }} <br />
            Adresse : {{ user.address }} <br />
            Ville : {{ user.city }} <br />
            Pays : {{ user.country }} <br />
            Téléphone : {{ user.phone }} <br />
            Nombre de candidatures : // TODO <br />
          </address>
        </div>
        <div class="w-full sm:w-4/12">
          <div class="relative">
            <div
              class="absolute top-0 right-0 transform hover:scale-150 ease-in-out duration-1000 hover:cursor-pointer"
            >
              <input
                @change="onFileChange"
                type="file"
                class="w-6 h-6 absolute z-40 top-0 right-0 opacity-0 hover:cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 absolute z-10 top-0 right-0 hover:cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
            </div>
            <img
              :src="
                user.avatar != null
                  ? `https://127.0.0.1:8000/image/read/${user.avatar}`
                  : avatar
              "
              alt="Photo de profile"
              class="rounded-full shadow-custom"
            />
          </div>
          <div class="flex sm:grid grid-cols-3 gap-2 justify-center">
            <LinkedinButton v-if="user.linkedin" :link="user.linkedin" />
            <GithubButton v-if="user.github" :link="user.github" />
            <FacebookButton v-if="user.facebook" :link="user.facebook" />
            <TwitterButton v-if="user.twitter" :link="user.twitter" />
            <WebsiteButton v-if="user.website" :link="user.website" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-11/12 sm:w-7/12 flex flex-col sm:grid grid-cols-2 gap-8 mt-8 sm:mt-0"
    >
      <div
        class="bg-[#D2CBE3] p-5 flex flex-col 2xl:h-40 rounded-2xl shadow-custom hover:scale-105 ease-in-out duration-500 hover:cursor-pointer"
      >
        <h2
          class="w-full h-fit flex justify-between items-center text-2xl font-bold underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          Mes recherches
        </h2>
        <p
          class="w-full h-[inherit] text-center flex justify-center items-center font-bold"
        >
          créer une recherche d'offre d'emploi
        </p>
      </div>
      <div
        class="bg-[#F2D7BA] p-5 flex flex-col 2xl:h-40 rounded-2xl shadow-custom hover:scale-105 ease-in-out duration-500 hover:cursor-pointer"
      >
        <h2
          class="w-full h-fit flex justify-between items-center text-2xl font-bold underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          Mes favoris
        </h2>
        <p
          class="w-full h-[inherit] text-center flex justify-center items-center font-bold"
        >
          Accéder à ma liste d'offres favorites
        </p>
      </div>
      <div
        class="bg-[#DBBBDB] p-5 flex flex-col 2xl:h-40 rounded-2xl shadow-custom hover:scale-105 ease-in-out duration-500 hover:cursor-pointer"
      >
        <h2
          class="w-full h-fit flex justify-between items-center text-2xl font-bold underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
            />
          </svg>
          Mes Candidatures
        </h2>
        <p
          class="w-full h-[inherit] text-center flex justify-center items-center font-bold"
        >
          Accéder a ma liste de candidature en cours
        </p>
      </div>
      <div
        @click="toggleCardUpdateUserVisibility"
        class="bg-[#DBC59B] p-5 flex flex-col 2xl:h-40 rounded-2xl shadow-custom hover:scale-105 ease-in-out duration-500 hover:cursor-pointer"
      >
        <h2
          class="w-full h-fit flex justify-between items-center text-2xl font-bold underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="{1.5}"
            stroke="currentColor"
            class="w-10 h-10 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
            />
          </svg>
          Mettre à jour mes informations
        </h2>
        <p
          class="w-full h-[inherit] text-center flex justify-center items-center font-bold"
        >
          Je modifie mes informations personnelles
        </p>
      </div>
      <div
        @click="toggleCardResumeVisibility"
        class="bg-[#CED3E7] p-5 flex flex-col 2xl:h-40 rounded-2xl shadow-custom hover:scale-105 ease-in-out duration-500 hover:cursor-pointer"
      >
        <h2
          class="w-full h-fit flex justify-between items-center text-2xl font-bold underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          Mes CV
        </h2>
        <p
          class="w-full h-[inherit] text-center flex justify-center items-center font-bold"
        >
          J'organise et je priorise mes CV
        </p>
      </div>
    </div>
    <transition name="height" class="overflow-hidden">
      <UserProfileUpdateForm v-if="isCardUpdateUserVisible" :user="user" />
    </transition>
    <transition name="height" class="overflow-hidden">
      <UserProfileResumeCard v-if="isCardResumeVisible" :user="user" />
    </transition>
  </section>
</template>

<style scoped lang="scss">
.height-enter-active,
.height-leave-active {
  transition: height 1.5s ease, opacity 1s ease;
}
.height-enter-from {
  height: 0;
  opacity: 0;
}
.height-leave-to {
  height: 0;
  opacity: 0;
}
</style>
