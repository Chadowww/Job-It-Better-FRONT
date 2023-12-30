<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { UserFormType } from "@/types/UserFormType";
import { CompanyFormType } from "@/types/CompanyFormType";
import axios from "axios";
import * as events from "events";
import {
  verifCompany,
  errors,
  verifEmail,
  verifyPassword,
  verifyRepeatPassword,
} from "@/utils/formValidations";

const props = defineProps({
  toggleRegister: Boolean,
});

const emit = defineEmits(["update:toggleLogin", "update:toggleRegister"]);

const user: UserFormType = {
  email: "",
  password: "",
  repeatPassword: "",
  roles: 5,
};
const company: CompanyFormType = {
  name: null,
  phone: null,
  address: null,
  city: null,
  country: null,
  siret: null,
  user_id: null,
};

const userRegister = async () => {
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/user/create",
      user,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      company.user_id = response.data.user_id;
    }
  } catch (error: any) {
    console.log(error);
  }
};

const companyRegister = async () => {
  try {
    const response = await axios.post(
      "https://127.0.0.1:8000/company/create",
      company,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 201) {
      emit("update:toggleRegister", false);
    }
  } catch (error: any) {
    console.log(error);
  }
};

const register = async (e: events) => {
  e.preventDefault();
  await userRegister();
  await companyRegister();
};
</script>

<template>
  <teleport to="nav">
    <div
      @click="emit('update:toggleRegister', false)"
      class="absolute z-[100] top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center p-2 md:p-8"
    >
      <div
        @click.stop
        class="w-11/12 md:w-10/12 lg:w-8/12 xl:w-4/12 rounded-2xl flex flex-col justify-around items-center bg-[#F8F9FAFF]"
      >
        <h2
          class="font-bold uppercase m-4 md:m-8 text-center text-black text-xl md:text-4xl"
        >
          Inscription <span class="text-green-900">entreprise</span>
        </h2>
        <div class="w-11/12">
          <form class="grid grid-cols-2 gap-2 font-bold">
            <div class="flex flex-col col-span-2">
              <label for="email">Adresse mail</label>
              <input
                type="email"
                name="email"
                @input="verifEmail(user.email)"
                v-model="user.email"
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
                class="border-2 border-red-600 p-2 text-red-600 rounded-md"
              >
                <p>{{ errors.email }}</p>
              </div>
            </div>
            <div class="flex flex-col">
              <label for="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                @input="verifyPassword(user.password)"
                v-model="user.password"
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
                class="border-2 border-red-600 p-2 text-red-600 rounded-md"
              >
                <p>{{ errors.password }}</p>
              </div>
            </div>
            <div class="flex flex-col overflow-hidden">
              <label for="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                @input="
                  verifyRepeatPassword(user.password, user.repeatPassword)
                "
                v-model="user.repeatPassword"
                placeholder="Entre ton mot de passe"
                class="focus:outline-none"
                :class="{
                  '!border-2 !border-red-500':
                    errors.repeatPassword != '' &&
                    errors.repeatPassword != null,
                  '!border-2 !border-green-600': errors.repeatPassword === null,
                }"
              />
              <div
                v-if="
                  errors.repeatPassword != '' && errors.repeatPassword != null
                "
                class="border-2 border-red-600 p-2 text-red-600 rounded-md"
              >
                <p>{{ errors.repeatPassword }}</p>
              </div>
            </div>
          </form>
          <form class="grid grid-cols-2 gap-2 font-bold">
            <div class="flex flex-col">
              <label for="name">Nom</label>
              <input
                type="text"
                name="name"
                @input="verifCompany(company)"
                v-model="company.name"
                placeholder="Entrez le nom de la société"
                required="required"
                :class="{
                  '!border-2 !border-red-500':
                    errors.company != null && errors.company != '',
                  '!border-2 !border-green-600': errors.company === null,
                }"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">Téléphone</label>
              <input
                type="text"
                name="phone"
                @input="verifCompany(company)"
                v-model="company.phone"
                placeholder="Entrez le numéro de téléphone"
                required="required"
                :class="{
                  '!border-2 !border-red-500':
                    errors.company != null && errors.company != '',
                  '!border-2 !border-green-600': errors.company === null,
                }"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">adresse</label>
              <input
                type="text"
                name="address"
                @input="verifCompany(company)"
                v-model="company.address"
                placeholder="Entrez l'adresse de la société"
                required="required"
                :class="{
                  '!border-2 !border-red-500':
                    errors.company != null && errors.company != '',
                  '!border-2 !border-green-600': errors.company === null,
                }"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">Ville</label>
              <input
                type="text"
                name="city"
                @input="verifCompany(company)"
                v-model="company.city"
                placeholder="Entrez la ville de la société"
                required="required"
                :class="{
                  '!border-2 !border-red-500':
                    errors.company != null && errors.company != '',
                  '!border-2 !border-green-600': errors.company === null,
                }"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">Pays</label>
              <input
                type="text"
                name="country"
                @input="verifCompany(company)"
                v-model="company.country"
                placeholder="Entrez le pays de la société"
                required="required"
                :class="{
                  '!border-2 !border-red-500':
                    errors.company != null && errors.company != '',
                  '!border-2 !border-green-600': errors.company === null,
                }"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">Siret</label>
              <input
                type="text"
                name="siret"
                @input="verifCompany(company)"
                v-model="company.siret"
                placeholder="Entrez le numéro de siret"
                required="required"
                :class="{
                  '!border-2 !border-red-500':
                    errors.company != null && errors.company != '',
                  '!border-2 !border-green-600': errors.company === null,
                }"
              />
            </div>
            <input
              type="hidden"
              name="user_id"
              v-model="company.user_id"
              value=""
            />
            <div
              v-if="errors.company != '' && errors.company != null"
              class="border-2 border-red-600 p-2 text-red-600 rounded-md col-span-2"
            >
              <p>{{ errors.company }}</p>
            </div>
            <div class="col-span-2 py-8 px2 md:p-8">
              <div
                class="w-full flex flex-col items-center justify-center md:flex-row md:justify-between text-sm md:text-md"
              >
                <div class="flex w-10/12 md:w-auto">
                  <input type="checkbox" required />
                  <p class="font-medium text-center">
                    Accepter les conditions
                    <span class="text-[#14532D] font-bold"
                      >générales d'utilisation</span
                    >
                    ?
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
              <div class="w-full flex justify-center items-center pt-8">
                <button
                  @click="register"
                  class="bg-green-900 text-white rounded-3xl p-2 hover:bg-green-950 hover:scale-110 transition ease-in-out"
                  :disabled="
                    !Object.values(errors).every((value) => value === null)
                  "
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </teleport>
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
