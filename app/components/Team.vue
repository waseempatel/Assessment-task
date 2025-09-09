<script setup>
import { ref, onMounted } from "vue";
import { getChefs } from "~/services/chefservices.js";
import { getChefSocials } from "~/services/chefsocialservices.js";

const chefs = ref([]);

onMounted(async () => {
  try {
    const chefData = await getChefs();
    const socialData = await getChefSocials();

    // Map socials to chefs
    chefs.value = chefData.map((chef) => ({
      ...chef,
      socials: socialData.filter((s) => s.chefId === chef.id),
    }));
  } catch (err) {
    console.error("Error loading chefs:", err);
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <!-- Section Title -->
<div v-if="chefs.length" class="mb-8 sm:mb-12 text-center max-w-3xl mx-auto">
  <h5
    class="text-[var(--primary-color)] text-sm sm:text-lg uppercase font-semibold font-['Poppins'] mb-1 tracking-[0.2em]"
  >
    <span class="mr-2 sm:mr-4">{{ chefs[0]?.title?.split(' ')[0] }}</span>
    <span>{{ chefs[0]?.title?.split(' ')[1] }}</span>
  </h5>
  <h1
    class="text-2xl sm:text-[2.5rem] md:text-[3.5rem] font-['Emblema_One'] text-[var(--dark-color)] leading-snug"
  >
    {{ chefs[0]?.subtitle?.split(' ').slice(0, 3).join(' ') }}
  </h1>
  <h1
    class="text-2xl sm:text-[2.5rem] md:text-[3.5rem] font-['Emblema_One'] text-[var(--dark-color)] leading-snug"
  >
    {{ chefs[0]?.subtitle?.split(' ')[3] }}
  </h1>
</div>


    <!-- Team Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      <div
        v-for="chef in chefs"
        :key="chef.id"
        class="relative group rounded-lg overflow-hidden"
      >
        <!-- Image with custom border radius -->
        <div
          class="overflow-hidden relative rounded-tl-[80px] sm:rounded-tl-[120px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
        >
          <img
            :src="chef.imageUrl"
            :alt="chef.name"
            class="w-full h-auto object-cover transform transition-all duration-500 group-hover:scale-110"
          />

          <!-- Overlay on hover -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-[rgba(34,36,41,0.9)] opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <div class="flex space-x-2">
              <a
                v-for="(social, idx) in chef.socials"
                :key="idx"
                :href="social.link"
                target="_blank"
                class="bg-[var(--secondary-color)] text-gray-800 rounded-full p-2 hover:bg-gray-200 transition"
              >
                <i :class="social.iconClass"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div
          class="absolute bottom-0 left-0 w-full text-center py-3 sm:py-4 bg-[rgba(34,36,41,0.9)] rounded-b-lg"
        >
          <h5 class="text-[var(--secondary-color)] text-base sm:text-lg font-semibold">
            {{ chef.name }}
          </h5>
          <p
            class="text-xs sm:text-sm uppercase text-gray-400 tracking-[2px] sm:tracking-[3px] m-0"
          >
            {{ chef.role }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

