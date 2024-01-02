<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
import { jwtDecode } from "jwt-decode";
import { JwtTokenType } from "@/types/JwtTokenType";

const token = ref<string>(localStorage.getItem("token") || "");
const url = ref<string>("");
const router = useRouter();

if (token.value) {
  try {
    const decodedToken: JwtTokenType = jwtDecode(token.value);
    if (decodedToken.roles.includes("ROLE_CANDIDATE")) {
      url.value =
        router.getRoutes().find((route) => route.name === "CandidateProfile")
          ?.path || "";
    }
    if (decodedToken.roles.includes("ROLE_COMPANY")) {
      url.value =
        router.getRoutes().find((route) => route.name === "CompanyProfile")
          ?.path || "";
    }
  } catch (error) {
    console.log(error);
  }
} else {
  router.push("/");
}
</script>

<template>
  <router-link :to="url">
    <button
      type="button"
      class="inline-block rounded-full border-2 border-[#14532D] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-[#14532D] transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
      data-te-ripple-init
    >
      Mon profile
    </button>
  </router-link>
</template>

<style scoped lang="scss"></style>
