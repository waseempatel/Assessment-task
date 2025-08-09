<template>
  <div class="container-fluid p-0 py-20" id="testimonials">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
      <!-- Left Image Section (UNCHANGED) -->
      <div class="min-h-[600px] wow fadeIn" data-wow-delay="0.1s">
        <div class="h-full relative overflow-hidden rounded-tl-[50%]">
          <img
            src="/images/testimonial.jpg"
            alt="Testimonial"
            class="absolute w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- ✅ Right Testimonial Section -->
      <div
        class="relative bg-[#1f1f1f] p-10 md:p-15 overflow-hidden wow fadeIn min-h-[300px]"
        data-wow-delay="0.3s"
        style="border-bottom-right-radius: 50%"
      >
        <!-- Heading -->
        <div class="mb-8">
          <p class="text-orange-500 uppercase tracking-widest font-semibold">
            T E S T I M O N I A L
          </p>
          <h1
            class="text-[2.5rem] md:text-[4rem] font-['Emblema_One'] text-gray-400 leading-snug mb-12"
          >
            Our Client Say
          </h1>
        </div>

        <!-- Carousel Content -->
        <div class="space-y-10">
          <transition name="fade" mode="out-in">
            <div
              v-if="testimonials[activeIndex]"
              :key="activeIndex"
              class="testimonial-item"
            >
              <!-- Updated text size for mobile responsiveness -->
              <p
                class="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 leading-relaxed"
              >
                <i class="fa fa-quote-left text-orange-500 me-3"></i>
                {{ testimonials[activeIndex].text }}
              </p>
              <div class="flex items-center gap-4">
                <img
                  :src="testimonials[activeIndex].image"
                  alt="Client"
                  class="rounded-full w-[90px] h-[90px] object-cover"
                />
                <div>
                  <h5 class="text-xl text-white/60 font-semibold">
                    {{ testimonials[activeIndex].name }}
                  </h5>
                  <span
                    class="text-sm uppercase tracking-[3px] text-white/60"
                  >
                    {{ testimonials[activeIndex].profession }}
                  </span>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <div class="flex justify-start gap-2 mt-10">
          <button
            @click="prevTestimonial"
            class="w-[45px] h-[45px] flex items-center justify-center text-white bg-orange-500 text-xl rounded-full hover:bg-white hover:text-black transition"
          >
            <i class="fas fa-arrow-left"></i>
          </button>
          <button
            @click="nextTestimonial"
            class="w-[45px] h-[45px] flex items-center justify-center text-white bg-orange-500 text-xl rounded-full hover:bg-white hover:text-black transition"
          >
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = ref([
  {
    text:
      'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.',
    image: '/images/testimonial-1.jpg',
    name: 'Client Name',
    profession: 'PROFESSION',
  },
  {
    text:
      'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.',
    image: '/images/testimonial-2.jpg',
    name: 'Client Name',
    profession: 'PROFESSION',
  },
])

const activeIndex = ref(0)

const nextTestimonial = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.value.length
}

const prevTestimonial = () => {
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.value.length) % testimonials.value.length
}

let interval
onMounted(() => {
  interval = setInterval(nextTestimonial, 5000)
})
onUnmounted(() => {
  clearInterval(interval)
})
</script>

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
