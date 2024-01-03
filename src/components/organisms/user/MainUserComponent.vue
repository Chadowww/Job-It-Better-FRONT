<script setup lang="ts">
import { onMounted } from "vue";
import { getUser, user } from "@/services/API/user/UserService";
import moment from "moment";
import LinkedinButton from "@/components/atoms/logo/LinkedinButton.vue";
import avatar from "@/assets/images/avatar.png";
moment.locale("fr");
onMounted(async () => {
  await getUser();
});
</script>

<template>
  <section
    class="bg-[#f5f5f5] w-full flex flex-col-reverse sm:flex-row justify-around items-center sm:items-start py-5 sm:px-5 sm:rounded-2xl shadow-custom"
  >
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
    <div class="w-full sm:w-5/12 flex justify-center items-center">
      <div
        class="w-11/12 bg-[#f5f5f5] flex flex-col-reverse sm:flex-row p-5 rounded-2xl shadow-custom"
      >
        <div class="w-full sm:w-8/12 flex flex-col justify-around">
          <div>
            <h3 class="text-left text-xl sm:text-2xl font-bold mt-6">
              Bonjour <span class="text-green-900">{{ user.firstname }}</span>
              :)
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
          <div>
            <img :src="avatar" alt="Photo de profile" />
          </div>
          <div class="flex sm:grid grid-cols-2 gap-2 justify-center">
            <LinkedinButton :link="user.linkedin" />
            <LinkedinButton :link="user.facebook" />
            <LinkedinButton :link="user.twitter" />
            <LinkedinButton :link="user.github" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
