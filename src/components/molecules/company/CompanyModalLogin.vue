<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  toggleLogin: Boolean,
});

const emit = defineEmits(["update:toggleLogin", "update:toggleRegister"]);

const data = {
  email: ref(""),
  password: ref(""),
};

const { email, password } = data;
</script>

<template>
  <teleport to="body">
    <div
      @click="emit('update:toggleLogin', false)"
      class="absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        @click.stop
        class="w-8/12 lg:w-4/12 rounded-2xl flex flex-col justify-around items-center bg-[#F8F9FAFF] p-8"
      >
        <h2 class="font-bold uppercase m-8 text-center text-black text-4xl">
          Se <span class="text-green-900">connecter</span>
        </h2>
        <div class="w-10/12">
          <form method="post" class="m-auto font-bold">
            <div class="flex flex-col">
              <label for="email">Adresse mail</label>
              <input
                type="email"
                name="email"
                v-model="email"
                placeholder="exemple.email@mail.fr"
              />
            </div>
            <div class="flex flex-col">
              <label for="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="Entre ton mot de passe"
              />
            </div>
            <div class="w-full flex justify-between">
              <div class="flex">
                <input type="checkbox" />
                <p class="text-green-900">Se souvenir de moi?</p>
              </div>
              <a href="" class="text-green-900 hover:underline"
                >Mot de passe oublié?</a
              >
            </div>
          </form>
          <div class="w-full flex justify-center items-center p-8">
            <button
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
</style>
