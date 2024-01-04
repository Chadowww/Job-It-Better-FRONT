<script setup lang="ts">
import { errors, verifyPassword, verifyEmail } from "@/utils/formValidations";
import { userLogin } from "@/services/user/UserLoginService";
import { useModalVisibility } from "@/utils/modalVisibility";
import { useStore } from "vuex";

const store = useStore();
const modalVisibility = useModalVisibility(store);
const data = {
  email: "",
  password: "",
};

const login = async () => {
  const result = await userLogin(data);
  if (result === "Invalid credentials.") {
    errors.value.password = "Email ou mot de passe incorrect";
  }
};
</script>

<template>
  <div
    @click="modalVisibility.toggleCandidateLoginModalVisibility"
    class="absolute z-[150] top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div
      @click.stop
      class="w-11/12 md:w-8/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 rounded-2xl flex flex-col justify-around items-center bg-[#F8F9FAFF] p-2 md:p-8"
    >
      <h2
        class="font-bold uppercase m-4 md:m-8 text-center text-black text-xl md:text-4xl"
      >
        Se <span class="text-green-900">connecter</span>
      </h2>
      <!-- Social login buttons -->
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
        Se connecter avec Facebook
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
        Se connecter avec Twitter
      </a>
      <!-- Divider -->
      <div
        class="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
      >
        <p class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
          OU
        </p>
      </div>
      <div class="w-11/12 md:w-10/12">
        <form method="post" class="m-auto font-bold">
          <div class="flex flex-col">
            <label for="email">Adresse mail</label>
            <input
              type="email"
              name="email"
              @input="verifyEmail(data.email)"
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
              @input="verifyPassword(data.password)"
              v-model="data.password"
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
        <div class="w-full flex justify-center items-center p-8">
          <button
            @click="login"
            class="bg-green-900 text-white rounded-3xl p-2 hover:bg-green-950 hover:scale-110 transition ease-in-out"
          >
            Se connectecter
          </button>
        </div>
        <div class="w-full flex justify-end">
          <a
            @click="
              () => {
                modalVisibility.toggleCandidateLoginModalVisibility();
                modalVisibility.toggleCandidateRegistrationModalVisibility();
              }
            "
            class="text-green-900 font-medium hover:underline hover:text-green-950 transition ease-in-out cursor-pointer"
          >
            Pas encore inscrit ?
          </a>
        </div>
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
  padding: 0.5rem;
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
