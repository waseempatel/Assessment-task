<template>
  <div class="relative w-full mt-12 overflow-hidden">
    <!-- Centered Instagram Icon -->
    <a
      href="#"
      class="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full z-10 w-[100px] h-[100px]"
    >
      <i class="fab fa-instagram fa-2x text-secondary"></i>
    </a>

    <!-- Image Grid -->
    <div
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-0"
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

<script setup>
const images = [
  "/images/menu-2.jpg",
  "/images/menu-3.jpg",
  "/images/menu-4.jpg",
  "/images/menu-5.jpg",
  "/images/menu-6.jpg",
  "/images/menu-7.jpg",
];
</script>
