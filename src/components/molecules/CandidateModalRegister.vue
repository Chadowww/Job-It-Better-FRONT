<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { UserFormType } from "@/types/UserFormType";
import { CandidateFormType } from "@/types/CandidateFormType";

const props = defineProps({
  toggleRegister: Boolean,
});

const emit = defineEmits(["update:toggleLogin", "update:toggleRegister"]);

const user: UserFormType = {
  email: "",
  password: "",
  repeatPassword: "",
  role: "ROLE_USER",
};
const candidate: CandidateFormType = {
  firstname: "",
  lastname: "",
  user_id: null,
};

const setField = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const key: string = target.name;
  const userKey = key as keyof UserFormType;
  const candidateKey = key as keyof CandidateFormType;

  if (userKey in user) {
    user[userKey] = target.value;
  }
  if (candidateKey in candidate) {
    if (candidateKey === "user_id") {
      candidate[candidateKey] = target.value ? parseInt(target.value) : null;
    } else {
      candidate[candidateKey] = target.value;
    }
  }
  console.log(user, candidate);
};
</script>

<template>
  <div
    @click="emit('update:toggleRegister', false)"
    class="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div
      @click.stop
      class="h-2/3 w-4/12 rounded-2xl flex flex-col justify-around items-center bg-[#F8F9FAFF]"
    >
      <h2 class="font-bold uppercase m-8 text-center text-black text-4xl">
        S' <span class="text-green-900">inscrire</span>
      </h2>
      <!-- Social Register buttons -->
      <a
        class="flex w-9/12 items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        style="background-color: #3b5998"
        href="#!"
        role="button"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <!-- Facebook -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-3.5 w-3.5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          />
        </svg>
        S'inscrire avec Facebook
      </a>
      <a
        class="flex w-9/12 items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
        style="background-color: #55acee"
        href="#!"
        role="button"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <!-- Twitter -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 h-3.5 w-3.5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          />
        </svg>
        S'inscrire avec Twitter
      </a>
      <!-- Divider -->
      <div
        class="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
      >
        <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
          OU
        </p>
      </div>
      <div>
        <form method="post" class="grid grid-cols-2 gap-2 font-bold">
          <div class="flex flex-col col-span-2">
            <label for="email">Adresse mail</label>
            <input
              @input="setField"
              type="email"
              name="email"
              v-model="user.email"
              placeholder="exemple.email@mail.fr"
            />
          </div>
          <div class="flex flex-col">
            <label for="password">Mot de passe</label>
            <input
              @input="setField"
              type="password"
              name="password"
              v-model="user.password"
              placeholder="Entre ton mot de passe"
            />
          </div>
          <div class="flex flex-col">
            <label for="repeatPassword">Vérification mot de passe</label>
            <input
              @input="setField"
              type="password"
              name="repeatPassword"
              v-model="user.repeatPassword"
              placeholder="Entre à nouveau ton mot de passe"
            />
          </div>
          <input type="hidden" v-model="user.role" value="ROLE_CANDIDATE" />
        </form>
        <form method="post" class="grid grid-cols-2 gap-2 font-bold">
          <div class="flex flex-col">
            <label for="firstname">Nom</label>
            <input
              @input="setField"
              type="text"
              name="firstname"
              v-model="candidate.firstname"
              placeholder="Entre ton prénom"
            />
          </div>
          <div class="flex flex-col">
            <label for="lastname">Prénom</label>
            <input
              @input="setField"
              type="text"
              name="lastname"
              v-model="candidate.lastname"
              placeholder="Entre ton nom"
            />
          </div>
          <div>
            <input
              @input="setField"
              type="hidden"
              name="user_id"
              v-model="candidate.user_id"
              value=""
            />
          </div>
        </form>
        <div class="w-full flex justify-between">
          <div class="flex">
            <input type="checkbox" />
            <p class="text-green-900">
              Accepter les conditions générales d'utilisation
            </p>
          </div>
          <a
            @click="
              emit('update:toggleRegister', false);
              emit('update:toggleLogin', true);
            "
            class="text-green-900 font-medium hover:underline hover:text-green-950 transition ease-in-out"
          >
            Déjà encore inscrit ?
          </a>
        </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <button
          class="bg-green-900 text-white rounded-3xl p-2 hover:bg-green-950 hover:scale-110 transition ease-in-out"
        >
          S'inscrire
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
label {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 5px;
}
input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}
</style>
