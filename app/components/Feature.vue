<script setup>
import { ref, onMounted } from "vue";
import { getFeature } from "~/services/featureservices.js";

const features = ref([]);

onMounted(async () => {
  try {
    const res = await getFeature();
    // Sort by displayOrder so DB order is respected
    features.value = res.sort((a, b) => a.displayOrder - b.displayOrder);
  } catch (err) {
    console.error("Error loading features:", err);
  }
});
</script>

<template>
  <div 
    id="feature-section" 
    data-testid="feature-section"
    class="relative bg-[#1d1e21] pb-0 pt-20 sm:pt-32 mt-20 sm:mt-40"
  >
    <!-- Feature Cards -->
    <div
      class="absolute -top-12 sm:-top-20 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4 sm:px-8 
             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      data-testid="feature-cards"
    >
      <div
        v-for="feature in features"
        :key="feature.id"
        class="bg-gradient-to-b from-[var(--secondary-color)] from-50% to-[var(--dark-color)] rounded-xl text-center pt-6 pb-6 sm:pt-10 sm:pb-10 shadow-lg"
        data-testid="feature-card"
      >
        <!-- Image in white circle -->
        <div
          class="w-24 h-24 sm:w-[150px] sm:h-[150px] bg-[var(--secondary-color)] rounded-full mx-auto flex items-center justify-center mb-4 sm:mb-6"
        >
          <img
            :src="feature.iconUrl"
            alt="feature icon"
            class="w-16 h-16 sm:w-40 sm:h-40 object-contain"
          />
        </div>

        <!-- Title -->
        <h3
          class="text-[#1d1e21] text-lg sm:text-[1.4rem] font-['Emblema_One'] font-normal mb-3 sm:mb-4"
        >
          {{ feature.title }}
        </h3>

        <!-- Description -->
        <p
          class="text-[var(--secondary-color)] text-sm sm:text-[0.95rem] mb-4 sm:mb-5 leading-relaxed px-3 sm:px-5"
        >
          {{ feature.description }}
        </p>

        <!-- Read More -->
        <a
          href="#"
          class="text-[var(--primary-color)] text-sm sm:text-[0.95rem] font-semibold inline-flex items-center gap-1 hover:underline"
        >
          Read More <span class="text-base sm:text-lg">→</span>
        </a>
      </div>
    </div>

    <!-- Discount Section -->
    <div 
      id="discount-section" 
      data-testid="discount-section"
      class="text-center pt-56 sm:pt-60 pb-20 px-4"
    >
      <h1
        class="text-lg sm:text-[2rem] md:text-[2.5rem] font-['Emblema_One'] text-gray-400 leading-snug"
      >
        <span class="text-[var(--primary-color)]">30% Discount</span><br />
        For This Summer
      </h1>
      <a
        href="#"
        class="inline-block mt-4 sm:mt-6 bg-[var(--primary-color)] text-[var(--secondary-color)] font-bold py-2 px-5 sm:py-4 sm:px-16 rounded-md hover:opacity-90 transition"
      >
        Order Now
      </a>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Emblema+One&display=swap");
</style>
