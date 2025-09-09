<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { getTestimonial } from "~/services/testimonialservices.js";

const testimonials = ref([]);
const activeIndex = ref(0);
const windowWidth = ref(0);

const nextTestimonial = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.value.length;
};
const prevTestimonial = () => {
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.value.length) %
    testimonials.value.length;
};

let interval;
onMounted(async () => {
  // Fetch testimonials from DB
  try {
    testimonials.value = await getTestimonial();
  } catch (err) {
    console.error("Error loading testimonials:", err);
  }

  // Window resize for rounded corners
  windowWidth.value = window.innerWidth;
  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };
  window.addEventListener("resize", handleResize);

  interval = setInterval(nextTestimonial, 5000);

  onUnmounted(() => {
    clearInterval(interval);
    window.removeEventListener("resize", handleResize);
  });
});
</script>

<template>
  <div class="container-fluid p-0 py-10 sm:py-16" id="testimonials">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
      <!-- Left Image Section -->
      <div class="min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] wow fadeIn" data-wow-delay="0.1s">
        <div
          class="h-full relative overflow-hidden rounded-none lg:rounded-tl-[50%]"
        >
          <img
            src="/images/testimonial.jpg"
            alt="Testimonial"
            class="absolute w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Right Testimonial Section -->
      <div
        class="relative bg-[#1f1f1f] p-6 sm:p-8 md:p-10 lg:p-14 overflow-hidden wow fadeIn min-h-[300px]"
        data-wow-delay="0.3s"
        :style="{ borderBottomRightRadius: windowWidth >= 1024 ? '50%' : '0' }"
      >
        <!-- Heading -->
        <div v-if="testimonials.length" class="mb-6 sm:mb-8">
          <p class="text-[var(--primary-color)] uppercase tracking-[0.5em] font-semibold text-xs sm:text-sm">
            {{ testimonials[0]?.title }}
          </p>
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-[4rem] font-['Emblema_One'] text-gray-400 leading-snug mb-6 sm:mb-12"
          >
            {{ testimonials[0]?.subtitle }}
          </h1>
        </div>

        <!-- Carousel Content -->
        <div class="space-y-8 sm:space-y-10">
          <transition name="fade" mode="out-in">
            <div
              v-if="testimonials[activeIndex]"
              :key="activeIndex"
              class="testimonial-item"
            >
              <!-- Testimonial Text -->
              <p
                class="text-sm sm:text-base md:text-lg lg:text-2xl text-[var(--secondary-color)] mb-6 leading-relaxed"
              >
                <i class="fa fa-quote-left text-[var(--primary-color)] me-3"></i>
                {{ testimonials[activeIndex].testimonialText }}
              </p>

              <!-- Client Info -->
              <div class="flex items-center gap-4 flex-wrap">
                <img
                  :src="testimonials[activeIndex].imageUrl"
                  alt="Client"
                  class="rounded-full w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[90px] lg:h-[90px] object-cover"
                />
                <div>
                  <h5 class="text-base sm:text-lg lg:text-xl text-[var(--secondary-color)]/60 font-semibold">
                    {{ testimonials[activeIndex].clientName }}
                  </h5>
                  <span
                    class="text-xs sm:text-sm uppercase tracking-[2px] text-[var(--secondary-color)]/60"
                  >
                    {{ testimonials[activeIndex].profession }}
                  </span>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-start gap-2 mt-6 sm:mt-10">
          <button
            @click="prevTestimonial"
            class="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] flex items-center justify-center text-[var(--secondary-color)] bg-[var(--primary-color)] text-lg sm:text-xl rounded-full hover:bg-[var(--secondary-color)] hover:text-[var(--dark-color)] transition"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            @click="nextTestimonial"
            class="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] flex items-center justify-center text-[var(--secondary-color)] bg-[var(--primary-color)] text-lg sm:text-xl rounded-full hover:bg-[var(--secondary-color)] hover:text-[var(--dark-color)] transition"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
