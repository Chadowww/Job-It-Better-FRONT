<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import axios from "axios";
import { errors, verifEmail, verifPassword } from "@/utils/formValidations";

const props = defineProps({
  toggleLogin: Boolean,
});

const emit = defineEmits(["update:toggleLogin", "update:toggleRegister"]);

const data = {
  email: "",
  password: "",
};

const userLogin = async () => {
  try {
    const response = await axios.post("https://127.0.0.1:8000/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        localStorage.removeItem("token");
      }, 3600000);
      emit("update:toggleLogin", false);
      location.reload();
    }
  } catch (error: any) {
    console.log(error);
  }
};
const login = () => {
  userLogin();
};
</script>

<template>
  <teleport to="body">
    <div
      @click="emit('update:toggleLogin', false)"
      class="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        @click.stop
        class="w-11/12 md:w-8/12 lg:w-4/12 rounded-2xl flex flex-col justify-around items-center bg-[#F8F9FAFF] p-4 md:p-8"
      >
        <h2
          class="font-bold uppercase m-4 md:m-8 text-center text-black text-xl md:text-4xl"
        >
          Se <span class="text-green-900">connecter</span>
        </h2>
        <div class="w-11/12">
          <form method="post" class="m-auto font-bold">
            <div class="flex flex-col">
              <label for="email">Adresse mail</label>
              <input
                type="email"
                name="email"
                @input="verifEmail(data.email)"
                v-model="data.email"
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
                @input="verifPassword(data.password)"
                v-model="data.password"
                placeholder="Entre ton mot de passe"
                class="focus:outline-none"
                :class="{
                  '!border-2 !border-red-600':
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
            <div class="w-full flex justify-between text-sm md:text-md my-2">
              <div class="flex">
                <input type="checkbox" />
                <p class="text-green-900">Se souvenir de moi?</p>
              </div>
              <a href="" class="text-green-900 hover:underline"
                >Mot de passe oublié?</a
              >
            </div>
          </form>
          <div class="w-full flex justify-center items-center p-2 md:p-8">
            <button
              @click="login"
              class="bg-green-900 text-white rounded-3xl p-2 hover:bg-green-950 hover:scale-110 transition ease-in-out"
            >
              Se connectecter
            </button>
          </div>
          <div class="w-full flex justify-end">
            <a
              href=""
              class="text-green-900 font-medium hover:underline hover:text-green-950 transition ease-in-out"
            >
              Pas encore inscrit ?
            </a>
          </div>
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
