<script setup lang="ts">
import Typed from "typed.js";
import { onMounted, onUnmounted, ref } from "vue";
import SearchBar from "@/components/atoms/SearchBar.vue";
import image from "@/assets/images/StatsWork2.png";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isSearchBarVisible = computed(() => store.state.isSearchBarVisible);

let searchBar = ref();

const resizeHandler = () => {
  const height = searchBar.value.clientHeight / -2;
  searchBar.value.style.bottom = `${height}px`;
};

const scrollHandler = () => {
  let rect = searchBar.value.getBoundingClientRect();
  let currentVisibility = store.state.isSearchBarVisible;
  if (rect.bottom < 60 && !currentVisibility) {
    store.commit("toggleSearchBarVisibility");
  } else if (rect.top > 60 && currentVisibility) {
    store.commit("toggleSearchBarVisibility");
  }
};

onMounted(() => {
  new Typed("#animated-title", {
    strings: [
      "Externatic,",
      "Externatic, plus qu'un cabinet de recrutement.",
      "Externatic, plus qu'un cabinet de recrutement. Notre job,",
      "Externatic, plus qu'un cabinet de recrutement. Notre job, vous aider à trouver le votre.",
    ],
    smartBackspace: true,
    startDelay: 50,
    backSpeed: 100,
    backDelay: 100,
    typeSpeed: 70,
  });

  resizeHandler();
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
  window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>
  <div
    class="relative w-full md:w-10/12 h-[34vh] lg:h-[54vh] mx-auto my-16 md:my-32 md:rounded-3xl shadow-custom"
  >
    <img
      :src="image"
      alt="bg"
      class="absolute z-[-1] w-full h-full object-cover md:rounded-3xl"
    />
    <h1
      class="w-3/5 md:w-2/5 p-6 text-white text-3xl md:text-xl lg:text-5xl xl:text-6xl font-bold"
    >
      <span id="animated-title"></span>
    </h1>
    <div
      class="search-container absolute flex justify-center w-full"
      ref="searchBar"
    >
      <div class="w-full md:w-7/12 md:rounded-2xl shadow-custom">
        <SearchBar v-if="!isSearchBarVisible" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
