<template>
  <div class="relative bg-[#1d1e21] pb-0 pt-32 mt-40">
    <!-- Feature Cards -->
    <div
      class="absolute -top-28 left-1/2 transform -translate-x-1/2 w-full max-w-20xl px-8 
             grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-gradient-to-b from-gray-20 to-gray-400 rounded-xl text-center pt-10 pb-10 shadow-lg"
      >
        <!-- Image in white circle -->
        <div
          class="w-[150px] h-[150px] bg-white rounded-full mx-auto flex items-center justify-center mb-6"
        >
          <img
            :src="feature.img"
            alt="feature icon"
            class="w-40 h-40 object-contain"
          />
        </div>

        <!-- Title -->
        <h3
          class="text-[#1d1e21] text-[1.4rem] font-['Emblema_One'] font-normal mb-4"
        >
          {{ feature.title }}
        </h3>

        <!-- Description -->
        <p class="text-white text-[0.95rem] mb-5 leading-relaxed px-5">
          {{ feature.description }}
        </p>

        <!-- Read More -->
        <a
          href="#"
          class="text-[#fb5b21] text-[0.95rem] font-semibold inline-flex items-center gap-1 hover:underline"
        >
          Read More <span class="text-lg">→</span>
        </a>
      </div>
    </div>

    <!-- Discount Section -->
    <div class="text-center pt-48 pb-16">
      <h1
        class="text-[2rem] md:text-[2.5rem] font-['Emblema_One'] text-gray-400 leading-snug"
      >
        <span class="text-[#fb5b21]">30% Discount</span><br />
        For This Summer
      </h1>
      <a
        href="#"
        class="inline-block mt-6 bg-[#fb5b21] text-white font-bold py-3 px-6 rounded-md hover:opacity-90 transition"
      >
        Order Now
      </a>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    img: "/images/feature-1.png",
    title: "Best Chef",
    description:
      "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet",
  },
  {
    img: "/images/feature-2.png",
    title: "Menu Variations",
    description:
      "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet",
  },
  {
    img: "/images/feature-3.png",
    title: "Healthy Food",
    description:
      "Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet",
  },
];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Emblema+One&display=swap");
</style>
