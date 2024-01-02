<script setup lang="ts">
import { onMounted, ref } from "vue";
import Axios from "axios";
import { token } from "@/utils/tokenManager";

const user = ref({});

const getUser = async () => {
  console.log(token.value);
  try {
    const response = await Axios.get(
      "https://127.0.0.1:8000/user/get-from-token",
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      }
    );
    console.log(response.data);
    user.value = response.data;
  } catch (error) {
    console.log(error);
  }
};
onMounted(() => {
  getUser();
});
</script>

<template>
  <section class="bg-red-900 min-h-96 w-full flex justify-around items-center">
    <div class="bg-green-900 h-full w-3/5 grid grid-cols-2 gap-2">
      <div class="bg-amber-300">Mes recherches</div>
      <div class="bg-red-300">Mes favoris</div>
      <div class="bg-blue-300">Mes Candidatures</div>
      <div class="bg-gray-300">Mettre à jour mes informations personnelles</div>
      <div class="bg-orange-300">Mes CV</div>
    </div>
    <div class="bg-pink-300 w-2/5">
      <p>information affiché</p>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
