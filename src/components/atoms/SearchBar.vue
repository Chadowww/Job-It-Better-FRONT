<script setup lang="ts">
import vue from "vue";
</script>

<template>
  <form action="" class="hidden lg:flex justify-between items-center w-4/12">
    <div class="flex flex-col justify-center items-center w-5/12">
      <div>
        <label for="where" class="text-4xl font-bold py-2">Quoi?</label>
        <input
          type="text"
          name="where"
          placeholder="Quel métier cherches tu?"
          class="bg-[#f5f5f5] w-full p-1 font-medium border-none focus:outline-[#14532D]"
        />
      </div>
    </div>
    <div class="w-[2px] h-20 bg-gray-500 m-4"></div>
    <div class="flex flex-col justify-center items-center w-5/12">
      <div>
        <label for="what" class="text-4xl font-bold py-2">Où?</label>
        <input
          type="text"
          name="what"
          placeholder="Dans quelle ville ?"
          class="bg-[#f5f5f5] w-full p-1 font-medium border-none focus:outline-[#14532D]"
        />
      </div>
    </div>
    <button class="bg-[#14532D] rounded-3xl h-fit p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-white font-bold"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </button>
  </form>
</template>

<style scoped lang="scss"></style>
