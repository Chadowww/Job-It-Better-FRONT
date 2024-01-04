<script setup lang="ts">
import { defineProps } from "vue";
import { string } from "zod";

defineProps({
  link: string(),
});
</script>

<template>
  <a
    :href="link"
    class="flex justify-center items-center"
    :class="{ 'hover:animate-pulse': link != null, disable: link == null }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="70"
      height="70"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="iFd9NrbBteaozGC2ch1MZa_MNRKfKM11gxe_gr1"
        x1="-10.294"
        x2="50.002"
        y1="-10.294"
        y2="50.002"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#262626" stop-opacity="0"></stop>
        <stop offset="1" stop-color="#262626" stop-opacity=".8"></stop>
      </linearGradient>
      <path
        fill="url(#iFd9NrbBteaozGC2ch1MZa_MNRKfKM11gxe_gr1)"
        d="M36,6H12c-3.314,0-6,2.686-6,6v24c0,3.314,2.686,6,6,6h14V28h-4v-3c0-1.105,0.895-2,2-2h2v-3 c0-5,3-7,7-7c2.045,0,3,0.354,3,0.354V16c0,1.105-0.895,2-2,2h-0.518C31.676,18,31,19.07,31,21v2h5l-0.678,3.392 C35.135,27.327,34.314,28,33.36,28H31v14h5c3.314,0,6-2.686,6-6V12C42,8.686,39.314,6,36,6z"
      ></path>
      <linearGradient
        id="iFd9NrbBteaozGC2ch1MZb_MNRKfKM11gxe_gr2"
        x1="20.441"
        x2="73.962"
        y1="15.094"
        y2="78.877"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#262626" stop-opacity="0"></stop>
        <stop offset="1" stop-color="#262626" stop-opacity=".8"></stop>
      </linearGradient>
      <path
        fill="url(#iFd9NrbBteaozGC2ch1MZb_MNRKfKM11gxe_gr2)"
        d="M31,21v2h5l-0.678,3.392C35.135,27.327,34.314,28,33.36,28H31v14h-5V28h-4v-3 c0-1.105,0.895-2,2-2h2v-3c0-5,3-7,7-7c2.045,0,3,0.354,3,0.354V16c0,1.105-0.895,2-2,2h-0.518C31.676,18,31,19.07,31,21z"
      ></path>
    </svg>
  </a>
</template>

<style scoped lang="scss"></style>
