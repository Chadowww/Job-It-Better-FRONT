<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { UserFormType } from "@/types/UserFormType";
import { CompanyFormType } from "@/types/CompanyFormType";

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
const company: CompanyFormType = {
  name: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  siret: "",
  user_id: null,
};

const setField = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const key: string = target.name;
  const userKey = key as keyof UserFormType;
  const companyKey = key as keyof CompanyFormType;

  if (userKey in user) {
    user[userKey] = target.value;
  }
  if (companyKey in company) {
    if (companyKey === "user_id") {
      company[companyKey] = target.value ? parseInt(target.value) : null;
    } else {
      company[companyKey] = target.value;
    }
  }
  console.log(user, company);
};
</script>

<template>
  <teleport to="body">
    <div
      @click="emit('update:toggleRegister', false)"
      class="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center p-2 md:p-8"
    >
      <div
        @click.stop
        class="w-11/12 md:w-10/12 lg:w-4/12 rounded-2xl flex flex-col justify-around items-center bg-[#F8F9FAFF]"
      >
        <h2
          class="font-bold uppercase m-4 md:m-8 text-center text-black text-xl md:text-4xl"
        >
          Inscription <span class="text-green-900">entreprise</span>
        </h2>
        <div class="w-11/12">
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
                placeholder="Entrez le mot de passe"
              />
            </div>
            <div class="flex flex-col overflow-hidden">
              <label for="repeatPassword" class="text-nowrap">
                Vérification mot de passe
              </label>
              <input
                @input="setField"
                type="password"
                name="repeatPassword"
                v-model="user.repeatPassword"
                placeholder="Entrez à nouveau le mot de passe"
              />
            </div>
            <input type="hidden" v-model="user.role" value="ROLE_company" />
          </form>
          <form method="post" class="grid grid-cols-2 gap-2 font-bold">
            <div class="flex flex-col">
              <label for="name">Nom</label>
              <input
                @input="setField"
                type="text"
                name="name"
                v-model="company.name"
                placeholder="Entrez le nom de la société"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">Téléphone</label>
              <input
                @input="setField"
                type="text"
                name="phone"
                v-model="company.phone"
                placeholder="Entrez le numéro de téléphone"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">adresse</label>
              <input
                @input="setField"
                type="text"
                name="address"
                v-model="company.address"
                placeholder="Entrez l'adresse de la société"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">Ville</label>
              <input
                @input="setField"
                type="text"
                name="city"
                v-model="company.city"
                placeholder="Entrez la ville de la société"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">Pays</label>
              <input
                @input="setField"
                type="text"
                name="country"
                v-model="company.country"
                placeholder="Entrez le pays de la société"
              />
            </div>
            <div class="flex flex-col">
              <label for="phone">Siret</label>
              <input
                @input="setField"
                type="text"
                name="siret"
                v-model="company.siret"
                placeholder="Entrez le numéro de siret"
              />
            </div>
            <input
              @input="setField"
              type="hidden"
              name="user_id"
              v-model="company.user_id"
              value=""
            />
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
                  class="bg-green-900 text-white rounded-3xl p-2 hover:bg-green-950 hover:scale-110 transition ease-in-out"
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
  margin: 5px;
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
