<template>
  <div class="container mx-auto px-4 py-10">
    <!-- Section Title -->
    <div class="text-center mb-12">
      <h5
        class="uppercase font-semibold mb-2 text-[#fb5b21] text-[20px] font-['Poppins']"
      >
        OUR MENU
      </h5>
      <h1
        class="text-[2.8rem] font-['Emblema_One'] text-[#222429] leading-snug"
      >
        Hands Craft More
      </h1>
      <h1
        class="text-[2.8rem] font-['Emblema_One'] text-[#222429] leading-snug"
      >
        Than Meals
      </h1>
    </div>

    <!-- Tabs -->
    <ul class="flex justify-center items-center space-x-0 mb-8">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="nav-item list-none mr-2"
        role="listitem"
      >
        <button
          @click="activeTab = index"
          :style="{
            width: widths[index],
            height: '40px',
            backgroundColor: activeTab === index ? '#fb5b21' : '#000000',
            color: activeTab === index ? '#ffffff' : '#ffffff',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
          }"
          class="px-4 py-2 text-center transition-all duration-300 rounded focus:outline-none hover:opacity-90"
        >
          {{ tab.name }}
        </button>
      </li>
    </ul>

    <!-- Tab Content -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(item, idx) in tabs[activeTab].items"
        :key="idx"
        class="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        <img
          :src="item.img"
          :alt="item.label"
          class="w-full h-56 object-cover group-hover:brightness-90"
        />
        <div
          class="absolute bottom-4 right-4 bg-black text-primary py-1 px-3 rounded-full text-sm"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  {
    name: "Breakfast",
    items: [
      { img: "/images/menu-1.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-2.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-3.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-4.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-5.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-6.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-7.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-8.jpg", label: "BBQ Chicken" },
    ],
  },
  {
    name: "Lunch",
    items: [
      { img: "/images/menu-2.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-3.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-4.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-5.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-6.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-7.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-8.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-1.jpg", label: "BBQ Chicken" },
    ],
  },
  {
    name: "Dinner",
    items: [
      { img: "/images/menu-3.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-4.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-5.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-6.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-7.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-8.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-1.jpg", label: "BBQ Chicken" },
      { img: "/images/menu-2.jpg", label: "BBQ Chicken" },
    ],
  },
]);

const widths = ["117.01px", "95.18px", "87.69px"];
const activeTab = ref(0);
</script>

<style scoped>
.text-primary {
  color: #facc15;
}
</style>
