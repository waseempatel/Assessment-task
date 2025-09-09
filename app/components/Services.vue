<script setup>
import { computed } from "vue";

const images = [
  "/images/menu-2.jpg",
  "/images/menu-3.jpg",
  "/images/menu-4.jpg",
  "/images/menu-5.jpg",
  "/images/menu-6.jpg",
  "/images/menu-7.jpg",
];

// Dynamically adjust icon size & position for different screen sizes
const iconPositionClasses = computed(() => {
  return [
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px]",
  ].join(" ");
});
</script>

<template>
  <div class="relative w-full mt-8 sm:mt-12 overflow-hidden">
    <!-- Centered Instagram Icon -->
    <a
      href="#"
      class="flex items-center justify-center absolute z-10 bg-[var(--secondary-color)] rounded-full shadow-md transition hover:scale-105"
      :class="iconPositionClasses"
    >
      <i class="fab fa-instagram fa-lg sm:fa-2x text-gray-400"></i>
    </a>

    <!-- Image Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[2px] sm:gap-0"
    >
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt="Instagram image"
        class="w-full h-full object-cover transition duration-500 hover:opacity-90"
      />
    </div>
  </div>
</template>

<style scoped>
/* Ensure images never distort */
img {
  aspect-ratio: 1 / 1;
}
</style>
