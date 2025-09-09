<script setup>
import { ref, onMounted } from "vue";
import { getAbout } from "~/services/aboutservices.js";
import { getAboutFeatures } from "~/services/aboutfeaservices.js";


const aboutData = ref(null);
const aboutfeatureData = ref([]); // store all features

onMounted(async () => {
    try {
      const res = await getAbout();
      aboutData.value = res[0]; // API returns an array → first item
    } catch (err) {
      console.error("Error fetching about data:", err);
    }

  try {
    const res = await getAboutFeatures();
    aboutfeatureData.value = res; // API returns an array of features
  } catch (err) {
    console.error("Error fetching about feature data:", err);
  }
});
</script>

<template>
  <section id="about"  data-testid="about-section" class="bg-[var(--secondary-color)] py-16 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto" v-if="aboutData">
      <div class="flex flex-col lg:flex-row items-stretch gap-12">
        <!-- Left Column: Images -->
        <div class="relative w-full lg:w-5/12 flex justify-center">
          <!-- Rotating Image -->
          <div
            class="absolute -top-10 -left-4 sm:top-0 sm:left-0 animate-spin-slow w-28 h-28 sm:w-40 sm:h-40"
          >
            <img
              :src="aboutData.iconUrl"
              alt="Rotating"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Main Image -->
          <img
            :src="aboutData.imageUrl"
            alt="About"
            class="w-full max-w-[400px] sm:max-w-none rounded-tl-[150px] sm:rounded-tl-[250px] rounded-tr-lg rounded-br-lg rounded-bl-lg object-cover"
          />
        </div>

        <!-- Right Column: Content -->
        <div class="lg:w-7/12 flex flex-col justify-center">
          <!-- Subheading -->
          <h5
            class="uppercase font-semibold text-[var(--primary-color)] text-xl sm:text-2xl tracking-[0.15em] mb-4 font-['Poppins'] text-center lg:text-left"
          >
            {{ aboutData.title }}
          </h5>

          <!-- Main Heading -->
          <h1
            class="text-3xl sm:text-5xl md:text-[4rem] leading-tight font-['Emblema_One'] text-[var(--dark-color)] mb-6 text-center lg:text-left"
          >
            {{ aboutData.subtitle }}
          </h1>

          <!-- Description -->
          <p
            class="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 text-center lg:text-left"
          >
            {{ aboutData.description }}
          </p>

          <!-- Feature Cards (dynamic from DB) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              v-for="feature in aboutfeatureData"
              :key="feature.id"
              class="bg-[var(--secondary-color)] rounded-xl p-6 text-left h-full"
            >
              <div
                class="w-14 h-14 sm:w-16 sm:h-16 rounded-full  flex items-center justify-center mb-4 bg-[var(--primary-color)]"
              >
                <img
                  :src="feature.featureIcon"
                  :alt="feature.featureTitle"
                  class="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                />
              </div>
              <h4 class="text-lg font-bold mb-2 text-[var(--dark-color)]">
                {{ feature.featureTitle }}
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ feature.featureDesc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}
</style>
