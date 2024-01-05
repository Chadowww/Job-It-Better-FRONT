<script setup lang="ts">
import { defineProps, reactive } from "vue";
import { UserType } from "@/types/UserType";
import { updateUser } from "@/services/user/UserUpdateService";
import { useStore } from "vuex";

const props = defineProps({
  user: {
    type: Object as () => UserType,
    required: true,
  },
});

const user: UserType = reactive(props.user);
const store = useStore();
const toggleCardUpdateUserVisibility = () => {
  store.dispatch("toggleCardUpdateUserVisibility");
};
async function update() {
  if (await updateUser(user)) {
    toggleCardUpdateUserVisibility();
  }
}
</script>

<template>
  <form
    class="w-8/12 h-[590px] mx-auto my-5 p-6 grid grid-cols-4 gap-3 font-bold shadow-custom rounded-2xl"
  >
    <div class="col-span-2 flex flex-col">
      <label for="">Nom :</label>
      <input type="text" v-model="user.lastname" />
    </div>
    <div class="col-span-2 flex flex-col">
      <label for="">Prénom :</label>
      <input type="text" v-model="user.firstname" />
    </div>
    <div class="col-span-2 flex flex-col">
      <label for="">Email :</label>
      <input type="text" v-model="user.email" />
    </div>
    <div class="col-span-2 flex flex-col">
      <label for="">Téléphone</label>
      <input type="text" v-model="user.phone" />
    </div>
    <div class="col-span-4 flex flex-col">
      <label for="">Adresse :</label>
      <input type="text" v-model="user.address" />
    </div>
    <div class="col-span-2 flex flex-col">
      <label for="">Ville :</label>
      <input type="text" v-model="user.city" />
    </div>
    <div class="col-span-2 flex flex-col">
      <label for="">Pays :</label>
      <input type="text" v-model="user.country" />
    </div>
    <div class="flex flex-col">
      <label for="">Facebook :</label>
      <input type="text" v-model="user.facebook" />
    </div>
    <div class="flex flex-col">
      <label for="">Twitter</label>
      <input type="text" v-model="user.twitter" />
    </div>
    <div class="flex flex-col">
      <label for="">LinkedIN</label>
      <input type="text" v-model="user.linkedin" />
    </div>
    <div class="flex flex-col">
      <label for="">Github</label>
      <input type="text" v-model="user.github" />
    </div>
    <div class="flex flex-col">
      <label for="">Website</label>
      <input type="text" v-model="user.website" />
    </div>
    <div class="col-span-3 flex justify-end items-end">
      <button
        @click.prevent="update"
        class="bg-green-900 text-white rounded-3xl p-2 hover:bg-green-950 hover:scale-110 transition ease-in-out"
      >
        Enregistrer
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
label {
  font-size: 1rem;
  font-weight: bold;
  margin: 5px;
}
input {
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 5px;
}
</style>
