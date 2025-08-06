<template>
  <div class="w-full bg-neutral-900 px-5 pb-0 mt-10">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-neutral-800 rounded text-center p-6"
      >
        <img
          :src="feature.img"
          alt="feature icon"
          class="w-[150px] h-[150px] mx-auto bg-white rounded-full object-contain"
        />
        <h3 class="text-white text-xl font-bold my-4">{{ feature.title }}</h3>
        <p class="text-gray-300 text-sm mb-4">
          {{ feature.description }}
        </p>
        <a href="#" class="text-white underline text-sm hover:text-primary">
          Read More <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>

    <div class="text-center py-10">
     <h1 class="text-[2.5rem] md:text-[3rem] font-['Emblema_One'] text-gray-400 leading-snug">
        <span class="text-primary">30% Discount</span><br />
        For This Summer
      </h1>
      <a
        href="#"
        class="inline-block bg-primary text-white py-3 px-6 rounded hover:opacity-90 transition"
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
.text-secondary {
  color: #bdbdbf;
}
.text-primary {
  color: #ffa500;
}
.bg-primary {
  background-color: #ffa500;
}
</style>
