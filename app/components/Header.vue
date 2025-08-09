<template>
  <header class="text-white">
    <section class="flex flex-col lg:flex-row w-full min-h-[96px]">
      <!-- Top bar for mobile & logo section for desktop -->
      <div class="flex items-center justify-between p-4 bg-black lg:bg-orange-500 h-26 w-full lg:w-80">
        <!-- Logo -->
        
            <NuxtLink to="/" class="text-5xl font-['Emblema_One'] uppercase text-orange-500 lg:text-white">Chefer</NuxtLink>

        <!-- Hamburger Icon -->
        <button
          class="lg:hidden text-white text-3xl"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Right: Contact Info + Navigation -->
      <div class="flex flex-col flex-1">
        <!-- Top Info (desktop only) -->
        <nav class="hidden lg:flex justify-between px-6 py-2 text-sm bg-[#222429] text-white/60">
          <div class="flex items-center space-x-2">
            <i class="fa fa-envelope pt-0.5 text-orange-500"></i>
            <p class="mb-0 text-sm">info@example.com</p>
          </div>
          <div class="flex items-center space-x-2">
            <i class="bi bi-telephone text-orange-500 me-2 mt-1"></i>
            <p class="mb-0">+012 345 6789</p>
          </div>
        </nav>

        <!-- Main Navigation (desktop) -->
        <nav class="hidden lg:flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-3 bg-black w-full min-h-[64px]">
          <!-- Menu Items -->
          <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 text-xl text-white/60">
            <a href="#hero" @click.prevent="scrollTo('hero')" class="hover:text-orange-500">Home</a>
            <NuxtLink to="/About1" class="hover:text-orange-500">About</NuxtLink>
            <NuxtLink to="/Menu" class="hover:text-orange-500">Menu</NuxtLink>
            <NuxtLink to="/Chefs" class="hover:text-orange-500">Chefs</NuxtLink>


            <!-- Dropdown -->
            <div class="relative group">
              <span class="flex items-center cursor-pointer hover:text-orange-500">
                Pages
                <span
                  class="ml-1 inline-block align-middle 
                         border-t-[0.3em] border-r-[0.3em] border-b-0 border-l-[0.3em] 
                         border-t-current border-r-transparent border-l-transparent">
                </span>
              </span>
              <div class="absolute hidden group-hover:block bg-white text-black p-4 space-y-2 shadow-lg z-10 min-w-[150px]">
                <a href="#features" class="block hover:text-orange-500">Features</a>
                <a href="#blog" class="block hover:text-orange-500">Blog Post</a>
                <a href="#testimonials" class="block hover:text-orange-500">Testimonial</a>
                <a href="#404" class="block hover:text-orange-500">404 Error</a>
              </div>
            </div>

            <a href="#contact" @click.prevent="scrollTo('contact')" class="hover:text-orange-500">Contact</a>
          </div>

          <!-- Social Icons -->
          <div class="hidden lg:flex items-center space-x-5 mt-4 lg:mt-0">
            <a href="#" class="btn-square border border-secondary rounded-full text-white hover:text-orange-500">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="btn-square border border-secondary rounded-full text-white hover:text-orange-500">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn-square border border-secondary rounded-full text-white hover:text-orange-500">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </nav>

        <!-- Mobile Navigation Menu -->
        <transition name="slide-fade">
          <div v-if="isMenuOpen" class="lg:hidden bg-black text-white px-4 py-4 space-y-4">
            <a href="#hero" @click.prevent="scrollTo('hero'); closeMenu()" class="block hover:text-orange-500">Home</a>
            <NuxtLink to="/About1" @click="closeMenu()" class="block hover:text-orange-500">About</NuxtLink>
            <NuxtLink to="/Menu" @click="closeMenu()" class="block hover:text-orange-500">Menu</NuxtLink>
            <NuxtLink to="/Chefs" @click="closeMenu()" class="block hover:text-orange-500">Chefs</NuxtLink>

            <!-- Dropdown in Mobile -->
            <div>
              <button @click="isPagesOpen = !isPagesOpen" class="w-full flex justify-between items-center hover:text-orange-500">
                Pages
                <span :class="{'rotate-180': isPagesOpen}" class="transition-transform">
                  ▼
                </span>
              </button>
              <div v-if="isPagesOpen" class="pl-4 mt-2 space-y-2">
                <a href="#features" @click="closeMenu()" class="block hover:text-orange-500">Features</a>
                <a href="#blog" @click="closeMenu()" class="block hover:text-orange-500">Blog Post</a>
                <a href="#testimonials" @click="closeMenu()" class="block hover:text-orange-500">Testimonial</a>
                <a href="#404" @click="closeMenu()" class="block hover:text-orange-500">404 Error</a>
              </div>
            </div>

            <a href="#contact" @click.prevent="scrollTo('contact'); closeMenu()" class="block hover:text-orange-500">Contact</a>
          </div>
        </transition>
      </div>
    </section>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const isPagesOpen = ref(false)

const scrollTo = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  isPagesOpen.value = false
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
