<template>
  <section class="bg-[#1f1f1f] py-12 my-10 px-4">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="(fact, index) in facts"
        :key="index"
        class="flex items-start gap-4 animate-fade-in"
        :style="{ animationDelay: `${0.1 * (index + 1)}s` }"
      >
        <div
          class="w-20 h-20 flex items-center justify-center rounded-full mb-3 bg-[#111]"
        >
          <i :class="`fa ${fact.icon} text-primary text-2xl`"></i>
        </div>
        <div>
          <h5 class="text-white">{{ fact.title }}</h5>
          <h1 class="text-secondary text-4xl font-bold">{{ fact.value }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const facts = [
  { icon: "fa-star", title: "Years", value: 1234 },
  { icon: "fa-users", title: "Clients", value: 1234 },
  { icon: "fa-check", title: "Awards", value: 1234 },
  { icon: "fa-mug-hot", title: "Events", value: 1234 },
];
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease forwards;
}
.text-primary {
  color: #ffc107; /* Bootstrap primary yellow shade */
}
.text-secondary {
  color: #bdbdbf;
}
</style>
