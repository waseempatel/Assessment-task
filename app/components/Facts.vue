<template>
  <section class="bg-[#1f1f1f] py-25 my-10 px-4 mb-40">
    <div class="max-w-20xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="(fact, index) in animatedFacts"
        :key="index"
        class="flex items-start gap-4 opacity-0 translate-y-2 animate-fade-in group"
        :style="{ animationDelay: `${0.1 * (index + 1)}s` }"
      >
        <div
          class="w-20 h-20 flex items-center justify-center rounded-full mb-3 bg-[#111] transition-colors duration-300 group-hover:bg-[#222]"
        >
          <i :class="`fa ${fact.icon} text-2xl text-[#fb5b21]`"></i>
        </div>

        <div>
          <!-- White title text -->
          <h5 class="text-white font-semibold">{{ fact.title }}</h5>

          <!-- Number -->
          <h1 class="text-[#bdbdbf] text-4xl font-bold font-['Emblema_One']">
            {{ Math.floor(fact.currentValue) }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const duration = 2000
const targetValue = 1234

const animatedFacts = ref([
  { icon: 'fa-star', title: 'Years', currentValue: 68 },
  { icon: 'fa-users', title: 'Clients', currentValue: 68 },
  { icon: 'fa-check', title: 'Awards', currentValue: 68 },
  { icon: 'fa-mug-hot', title: 'Events', currentValue: 68 },
])

function animateCounters() {
  const start = performance.now()
  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1)
    const value = 1 + progress * (targetValue - 1)

    animatedFacts.value = animatedFacts.value.map((fact) => ({
      ...fact,
      currentValue: value,
    }))

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

onMounted(() => {
  animateCounters()
})
</script>

<style scoped>
@keyframes fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease forwards;
}
</style>
