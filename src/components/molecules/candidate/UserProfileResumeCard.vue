<script setup lang="ts">
import { defineProps, onMounted, reactive, watchEffect } from "vue";
import { UserType } from "@/types/UserType";
import { ResumeType } from "@/types/ResumeType";
import CandidateResumeList from "@/components/atoms/candidate/CandidateResumeList.vue";
import {
  getResumes,
  uploadResume,
  resumes,
} from "@/services/candidate/ResumeManager";

const props = defineProps({
  user: {
    type: Object as () => UserType,
    required: true,
  },
});
const user: UserType = reactive(props.user);

const resume: ResumeType = reactive({
  resume_id: null,
  title: null,
  filename: null,
  candidate_id: user.candidate_id,
  file: null,
});
const onFileChange = (e: any) => {
  resume.file = e.target.files[0];
  resume.candidate_id = user.candidate_id;
};

async function upload() {
  console.log(resume);
  const uploadSuccess = await uploadResume(resume);
  if (uploadSuccess) {
    await getResumes(props.user?.candidate_id);
  }
  window.location.reload();
}

onMounted(async () => {
  await getResumes(props.user?.candidate_id);
  console.log(resumes.value);
});
</script>

<template>
  <div
    class="w-8/12 h-[300px] mx-auto my-5 p-6 flex flex-col justify-around font-bold shadow-custom rounded-2xl"
  >
    <h2 class="text-center text-4xl">Ma liste de CV:</h2>
    <CandidateResumeList v-if="resumes" :resumes="resumes" :user="props.user" />
    <form action="" class="w-full flex justify-around items-center">
      <div class="w-4/12 flex flex-col">
        <label for="">Télécharger un nouveau CV :</label>
        <input type="file" @change="onFileChange" />
      </div>
      <div class="w-4/12 flex flex-col">
        <label for="">Nom du CV :</label>
        <input type="text" v-model="resume.title" />
      </div>
      <button
        @click.prevent="upload"
        class="h-fit bg-green-900 text-white rounded-3xl p-2 hover:bg-green-950 hover:scale-110 transition ease-in-out"
      >
        Envoyer
      </button>
    </form>
  </div>
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
