<script setup>
import { ref, onMounted } from "vue";
import { getHero } from "~/services/heroservices.js";

const heroData = ref([]);

onMounted(async () => {
  try {
    const res = await getHero();
    heroData.value = res;
  } catch (err) {
    console.error("Error fetching hero:", err);
  }
});
</script>

<template>
  <section class="bg-[#1F1F1F] text-[#BDBDBF] mb-12 py-20 font-['Poppins',sans-serif]">
    <div class="container mx-auto px-12">
      <!-- Title -->
      <div class="flex flex-col items-center mb-0" v-if="heroData.length">
        <h1
          class="text-center font-['Emblema_One'] text-[#BDBDBF] leading-tight 
                 text-6xl sm:text-7xl md:text-8xl lg:text-[112px] mb-0"
        >
          {{ heroData[0].title }}
        </h1>
      </div>

      <!-- Responsive Grid -->
      <div v-if="heroData.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 -mx-6">
        <!-- Left Column -->
        <div class="flex flex-col items-center text-center px-6">
          <img
            :src="heroData[0].imageUrl"
            alt="Hero Left"
            class="rounded mb-4 w-full max-h-[316px] object-cover"
          />

          <!-- Arrow Centered -->
          <div class="my-4 self-start">
            <i class="bi bi-arrow-down animate-up-down text-3xl sm:text-4xl md:text-[3rem]"></i>
          </div>

          <p class="mb-4 text-base leading-relaxed text-left">
            {{ heroData[0].description }}

          </p>
        </div>

        <!-- Center Column -->
        <div class="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded overflow-hidden px-6">
          <img
            :src="heroData[1].imageUrl"
            alt="Hero Center"
            class="absolute inset-0 w-full h-full object-cover rounded"
          />
        </div>

        <!-- Right Column -->
        <div class="flex flex-col items-center text-center px-6">
          <p class="mb-4 text-base leading-relaxed text-left">
            {{ heroData[2].description }}
          </p>

          <!-- Arrow Centered -->
          <div class="my-4 self-start">
            <i class="bi bi-arrow-up animate-up-down text-3xl sm:text-4xl md:text-[3rem]"></i>
          </div>

          <img
            :src="heroData[2].imageUrl"
            alt="Hero Right"
            class="rounded mt-4 w-full max-h-[316px] object-cover"
          />
        </div> 
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth subtle arrow animation */
.animate-up-down {
  position: relative;
  animation: upDown 1.5s ease-in-out infinite;
}

@keyframes upDown {
  0% {
    top: 0;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
</style>
