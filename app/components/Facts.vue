<script setup>
import { ref, onMounted } from "vue";
import { getFacts } from "~/services/factsservices.js";

const duration = 2000;
const facts = ref([]);
const animatedFacts = ref([]);
const factsSection = ref(null);
let hasAnimated = false; // prevent multiple animations

function animateCounters() {
  const start = performance.now();

  const step = (timestamp) => {
    const progress = Math.min((timestamp - start) / duration, 1);

    animatedFacts.value = facts.value.map((fact) => ({
      ...fact,
      currentValue: progress * fact.value, // animate from 0 → actual value
    }));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

onMounted(async () => {
  try {
    const res = await getFacts();
    facts.value = res.sort((a, b) => a.displayOrder - b.displayOrder);

    // Initialize counters with 0
    animatedFacts.value = facts.value.map((fact) => ({
      ...fact,
      currentValue: 0,
    }));

    // 👀 Animate only when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateCounters();
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (factsSection.value) {
      observer.observe(factsSection.value);
    }
  } catch (err) {
    console.error("Error loading facts:", err);
  }
});
</script>

<template>
 <section
  ref="factsSection"
  data-testid="facts-section" 
  data-test-animate="true"
  class="bg-[#1f1f1f] py-16 px-4 mb-40"
>

    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
    >
      <div
        v-for="(fact, index) in animatedFacts"
        :key="fact.id"
        data-testid="fact-card"
        class="flex flex-col sm:flex-row items-center sm:items-start gap-4 opacity-0 translate-y-2 animate-fade-in group text-center sm:text-left"
        :style="{ animationDelay: `${0.1 * (index + 1)}s` }"
      >
        <!-- Icon -->
        <div
          class="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full mb-2 sm:mb-3 bg-[#111] transition-colors duration-300 group-hover:bg-[#222]"
        >
          <i :class="`${fact.iconUrl} text-xl sm:text-2xl text-[var(--primary-color)]`"></i>
        </div>

        <!-- Text -->
        <div>
          <h5 class="text-[var(--secondary-color)] font-semibold text-base sm:text-lg">
            {{ fact.name }}
          </h5>
          <h1
            class="text-[#bdbdbf] text-3xl sm:text-4xl font-bold font-['Emblema_One']"
          >
            {{ Math.floor(fact.currentValue) }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

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
