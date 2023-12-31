<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CompanyCardType } from "@/types/CompanyCardType";
import { getCompanys } from "@/services/API/company/CompanyService";

let companys = ref<Array<CompanyCardType>>([]);

onMounted(async () => {
  const result = await getCompanys();
  if (result) {
    companys.value = result;
  }
});
</script>

<template>
  <section>
    <h2 class="text-center md:text-left text-5xl md:text-6xl font-bold my-6">
      <span class="text-green-900">Les entreprises</span> qui recrutent
    </h2>
    <div class="w-full flex lg:grid grid-cols-3 gap-6 overflow-x-scroll p-2">
      <div
        class="h-48 min-w-72 md:h-72 rounded-2xl my-4 shadow-custom"
        v-for="(company, index) in companys"
        :key="index"
      >
        <div class="relative h-1/2">
          <img
            class="h-full w-full object-cover rounded-t-2xl"
            :src="`https://127.0.0.1:8000/image/read/${company.cover}`"
            alt="cover"
          />
          <div
            class="absolute flex justify-center items-center h-1/2 w-1/2 top-50 transform translate-y-[-50%] rounded-md bg-white ml-3 p-2"
          >
            <img
              class="w-full object-cover"
              :src="`https://127.0.0.1:8000/image/read/${company.logo}`"
              alt="Logo"
            />
          </div>
        </div>
        <div class="h-1/2 flex justify-between items-end p-2 md:p-5">
          <div class="h-4/5 w-3/5 md:h-2/3 flex flex-col justify-between">
            <p
              class="text-sm md:text-3xl font-medium md:mt-0 whitespace-nowrap overflow-ellipsis"
            >
              {{ company.name }}
            </p>
            <p
              class="flex items-center whitespace-nowrap rounded px-2 lg:pr-3 pb-2 pt-2.5 text-sm lg:text-lg leading-normal text-black font-normal transition duration-150 ease-in-out motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] underline"
            >
              {{ company.offers_count }} postes à pouvoir
            </p>
          </div>
          <div>
            <button
              class="inline-block rounded-full border-2 border-[#14532D] px-2 lg:px-3 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#14532D] transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
