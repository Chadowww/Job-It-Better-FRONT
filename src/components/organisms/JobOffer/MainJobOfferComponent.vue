<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { user, getUser } from "@/services/API/user/UserService";
import { useModalVisibility } from "@/utils/modalVisibility";
import {
  getJobOffer,
  jobOffer,
} from "@/services/API/job-offer/JobOfferService";
import { useStore } from "vuex";
import { getResumes, resumes } from "@/services/candidate/ResumeManager";
import { apply } from "@/factories/ApplyFactory";
import { applyToJoboffer } from "@/services/API/apply/ApplyService";

const store = useStore();
const modalVisibility = useModalVisibility(store);
const route = useRoute();

onMounted(async () => {
  const jobOfferId = Number(route.params.id);
  await getUser();
  await getJobOffer(jobOfferId);
  await getResumes(user.value.candidateId);
});

const applyFunction = async (e: any) => {
  e.preventDefault();
  apply.candidateId = user.value.candidateId;
  apply.jobofferId = jobOffer.value.jobofferId;
  apply.status = "pending";
  console.log(apply);
  if ((await applyToJoboffer(apply)) === true) {
    window.location.reload();
  }
};
</script>

<template>
  <section>
    <div class="relative">
      <div
        class="h-full w-full flex flex-col justify-center items-center bg-[#000000] opacity-50 absolute z-10 top-0 left-0"
      >
        <h1 class="text-6xl text-white font-bold">
          {{ jobOffer.title }} | {{ jobOffer.type }}
        </h1>
        <h2 class="text-4xl fond-bold text-white">
          {{ jobOffer.salaryMin }}€ - {{ jobOffer.salaryMax }}€
        </h2>
        <h2 class="text-4xl fond-bold text-white">
          À {{ jobOffer.city }} chez {{ jobOffer.name }}
        </h2>
      </div>
      <img
        class="h-[50vh] blur-sm w-full object-cover"
        :src="
          jobOffer.cover
            ? `https://127.0.0.1:8000/image/read/${jobOffer.cover}`
            : 'https://picsum.photos/1920/1080'
        "
        alt=""
      />
    </div>
    <div class="w-full m-auto md:w-10/12">
      <div class="w-8/12 m-auto my-12">
        <p v-html="jobOffer.description" class="text-2xl"></p>
      </div>
      <div class="flex justify-center my-12">
        <form
          v-if="user.email != null"
          class="w-11/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-6/12 rounded-2xl flex flex-col justify-around items-center bg-[#F8F9FAFF] p-2 md:p-8 mt- shadow-custom"
        >
          <h2 class="text-center text-4xl font-bold">
            Cette offre vous intéresse? <br />
            Postulez dès maintenant!
          </h2>
          <div class="grid grid-cols-2 gap-2 mt-12">
            <div class="col-span-1">
              <label for="">Nom :</label>
              <input
                type="text"
                :value="user.lastname ? user.lastname : null"
                @click.stop
                disabled
              />
            </div>
            <div class="col-span-1">
              <label for="">Prénom :</label>
              <input
                type="text"
                :value="user.firstname ? user.firstname : null"
                @click.stop
                disabled
              />
            </div>
            <div class="col-span-2">
              <label for="">Adresse email :</label>
              <input
                type="email"
                :value="user.email ? user.email : null"
                @click.stop
                disabled
              />
            </div>
            <div class="col-span-2">
              <label for="">CV :</label>
              <select name="" id="" v-model="apply.resumeId">
                <option
                  v-for="resume in resumes"
                  :key="resume.resumeId"
                  :value="resume.resumeId"
                >
                  {{ resume.title }}
                </option>
              </select>
            </div>
            <div class="col-span-2">
              <label for="message">Laissez un message au recruteur</label>
              <textarea
                name="message"
                rows="10"
                class="w-full"
                v-model="apply.message"
              />
            </div>
          </div>
          <button
            @click="applyFunction"
            class="inline-block w-fit m-auto rounded-full border-2 border-[#14532D] mt-12 px-2 lg:px-3 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#14532D] transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
            Postuler
          </button>
        </form>
        <div v-else class="flex flex-col justify-center">
          <h2 class="text-center text-4xl font-bold">
            Cette offre vous intéresse? <br />
            Connectez-vous pour postuler!
          </h2>
          <button
            class="inline-block w-fit m-auto rounded-full border-2 border-[#14532D] mt-12 px-2 lg:px-3 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#14532D] transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            @click="modalVisibility.toggleCandidateLoginModalVisibility"
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
h6 {
  font-size: 1.5rem;
  font-weight: bolder !important;
}
label {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 5px;
}
input,
textarea {
  width: -webkit-fill-available;
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
