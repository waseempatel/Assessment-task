<script setup>
import { ref, computed, onMounted } from "vue";
import { getCategory } from "~/services/categoryservices.js";
import { getMenuItems } from "~/services/menuItemservices.js";

const categories = ref([]);
const menuItems = ref([]);
const activeTab = ref(0);

// Fetch categories + menu items
onMounted(async () => {
  try {
    const catRes = await getCategory();
    categories.value = catRes.sort((a, b) => a.displayOrder - b.displayOrder);

    const itemRes = await getMenuItems();
    menuItems.value = itemRes.filter((item) => item.isVisible);
  } catch (err) {
    console.error("Error loading menu:", err);
  }
});

// Computed: show only items belonging to active category
const filteredItems = computed(() => {
  if (!categories.value.length) return [];
  const activeCategoryId = categories.value[activeTab.value]?.id;
  return menuItems.value.filter((item) => item.categoryId === activeCategoryId);
});
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <!-- Section Title -->
    <div class="text-center mb-8 sm:mb-12">
      <h5
        class="uppercase font-semibold mb-2 text-[var(--primary-color)] text-sm sm:text-[20px] font-['Poppins'] tracking-[0.2em']"
      >
        <span class="mr-2 sm:mr-4">O U R</span>
        <span>M E N U</span>
      </h5>
      <h1
        class="text-xl sm:text-[3.8rem] font-['Emblema_One'] text-[var(--dark-color)] leading-snug"
      >
        Hands Craft More
      </h1>
      <h1
        class="text-xl sm:text-[3.8rem] font-['Emblema_One'] text-[var(--dark-color)] leading-snug"
      >
        Than Meals
      </h1>
    </div>

    <!-- Tabs -->
    <div class="flex justify-center mb-8 sm:mb-12">
      <div
        class="flex flex-wrap sm:flex-nowrap bg-[var(--dark-color)] rounded-3xl overflow-hidden max-w-lg"
      >
        <button
          v-for="(tab, index) in categories"
          :key="tab.id"
          @click="activeTab = index"
          :class="[
            'px-3 py-2 sm:px-4 sm:py-2 text-center transition-all duration-300 focus:outline-none hover:opacity-90',
            activeTab === index ? 'bg-[var(--primary-color)]' : 'bg-[var(--dark-color)]',
            'text-[var(--secondary-color)] text-sm sm:text-base font-[Poppins] flex-1 sm:flex-none rounded-none sm:rounded-[20px]'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- Tab Content -->
    <div
      v-if="categories.length"
      class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
    >
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="relative group overflow-hidden rounded-md shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <!-- Image -->
        <img
          :src="item.imageUrl"
          :alt="item.label"
          class="w-full aspect-[4/3] object-cover transition-all duration-300"
        />

        <!-- Light shade overlay on hover -->
        <div
          class="absolute inset-0 bg-[var(--secondary-color)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        ></div>

        <!-- Label -->
        <div
          class="absolute bottom-2 right-2 bg-[var(--dark-color)] text-primary py-1 px-3 rounded-full text-xs sm:text-sm"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-primary {
  color: #facc15;
}
@media (max-width: 480px) {
  h1 {
    font-size: 1.4rem !important;
  }
}
</style>
