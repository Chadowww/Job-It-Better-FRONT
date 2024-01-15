<script setup lang="ts">
import { candidateUser } from "@/factories/userFactory";
import { candidate } from "@/factories/candidateFactory";
import { candidateRegister } from "@/services/candidate/CandidateRegistrationService";
import { userRegister } from "@/services/user/UserRegistrationService";
import {
  errors,
  verifyEmail,
  verifyCandidate,
  verifyPassword,
  verifyRepeatPassword,
} from "@/utils/formValidations";
import { useModalVisibility } from "@/utils/modalVisibility";
import { useStore } from "vuex";

const store = useStore();
const modalVisibility = useModalVisibility(store);
const register = async (e: any) => {
  e.preventDefault();
  const result = await userRegister(candidateUser);
  candidate.user_id = Number(result);
  if (Number.isInteger(result)) {
    if (await candidateRegister(candidate)) {
      modalVisibility.toggleCandidateRegistrationModalVisibility();
      modalVisibility.toggleCandidateLoginModalVisibility();
    }
  }
  if (
    !Number.isInteger(result) &&
    result?.includes("This email is already used")
  ) {
    errors.value.email = "Cette adresse mail est déjà utilisée";
  }
};
</script>

<template>
  <div
    @click="modalVisibility.toggleCandidateRegistrationModalVisibility"
    class="absolute z-[150] top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div
      @click.stop
      class="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 rounded-2xl flex flex-col justify-around items-center bg-[#F8F9FAFF] p-2 md:p-8"
    >
      <h2
        class="font-bold uppercase m-4 md:m-8 text-center text-black text-4xl"
      >
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
              type="email"
              name="email"
              @input="verifyEmail(candidateUser.email)"
              v-model="candidateUser.email"
              class="focus:outline-none"
              :class="{
                '!border-2 !border-red-600':
                  errors.email != '' && errors.email != null,
                '!border-2 !border-green-600': errors.email === null,
              }"
              placeholder="exemple.email@mail.fr"
            />
            <div
              v-if="errors.email != '' && errors.email != null"
              class="error border-2 border-red-600 p-2 text-red-600 rounded-md"
            >
              <p>{{ errors.email }}</p>
            </div>
          </div>
          <div class="flex flex-col">
            <label for="password-verif">Mot de passe</label>
            <input
              type="password"
              name="password"
              @input="verifyPassword(candidateUser.password)"
              v-model="candidateUser.password"
              placeholder="Entre ton mot de passe"
              class="focus:outline-none"
              :class="{
                '!border-2 !border-red-500':
                  errors.password != '' && errors.password != null,
                '!border-2 !border-green-600': errors.password === null,
              }"
            />
            <div
              v-if="errors.password != '' && errors.password != null"
              class="error border-2 border-red-600 p-2 text-red-600 rounded-md"
            >
              <p>{{ errors.password }}</p>
            </div>
          </div>
          <div class="flex flex-col overflow-hidden">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              name="password-verif"
              @input="
                verifyRepeatPassword(
                  candidateUser.password,
                  candidateUser.repeatPassword
                )
              "
              v-model="candidateUser.repeatPassword"
              placeholder="Entre ton mot de passe"
              class="focus:outline-none"
              :class="{
                '!border-2 !border-red-500':
                  errors.repeatPassword != '' && errors.repeatPassword != null,
                '!border-2 !border-green-600': errors.repeatPassword === null,
              }"
            />
            <div
              v-if="
                errors.repeatPassword != '' && errors.repeatPassword != null
              "
              class="error border-2 border-red-600 p-2 text-red-600 rounded-md"
            >
              <p>{{ errors.repeatPassword }}</p>
            </div>
          </div>
        </form>
        <form method="post" class="grid grid-cols-2 gap-2 font-bold">
          <div class="flex flex-col">
            <label for="firstname">Nom</label>
            <input
              type="text"
              name="firstname"
              @input="verifyCandidate(candidate)"
              v-model="candidate.firstname"
              placeholder="Entre ton prénom"
              :class="{
                '!border-2 !border-red-500':
                  errors.candidate != null && errors.candidate != '',
                '!border-2 !border-green-600': errors.candidate === null,
              }"
            />
          </div>
          <div class="flex flex-col">
            <label for="lastname">Prénom</label>
            <input
              type="text"
              name="lastname"
              @input="verifyCandidate(candidate)"
              v-model="candidate.lastname"
              placeholder="Entre ton nom"
              :class="{
                '!border-2 !border-red-500':
                  errors.candidate != null && errors.candidate != '',
                '!border-2 !border-green-600': errors.candidate === null,
              }"
            />
          </div>
          <div
            v-if="errors.candidate != '' && errors.candidate != null"
            class="error border-2 border-red-600 p-2 text-red-600 rounded-md col-span-2"
          >
            <p>{{ errors.candidate }}</p>
          </div>
          <div>
            <input
              type="hidden"
              name="user_id"
              v-model="candidate.user_id"
              value=""
            />
          </div>
        </form>
        <div class="w-full flex justify-between">
          <div class="flex">
            <input type="checkbox" required="required" />
            <p class="font-medium">
              Accepter les conditions
              <span class="text-[#14532D] font-bold"
                >générales d'utilisation</span
              >
              ?
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center pt-8">
        <button
          @click="register"
          class="bg-green-900 text-white rounded-3xl p-2 hover:bg-green-950 hover:scale-110 transition ease-in-out"
          :disabled="!Object.values(errors).every((value) => value === null)"
        >
          S'inscrire
        </button>
      </div>
      <div class="w-full flex justify-end">
        <a
          @click="
            () => {
              modalVisibility.toggleCandidateRegistrationModalVisibility();
              modalVisibility.toggleCandidateLoginModalVisibility();
            }
          "
          class="text-green-900 font-medium hover:underline hover:text-green-950 transition ease-in-out cursor-pointer"
        >
          Déjà encore inscrit ?
        </a>
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
  margin-bottom: 5px;
}

@media (max-width: 400px) {
  label {
    font-size: 1rem;
  }
  input {
    padding: 2px;
    margin: 2px;
  }
}
</style>
