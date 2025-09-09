<template>
  <header class="m-0 p-0 border-0 w-full">
    <section class="flex flex-col lg:flex-row w-full min-h-[64px]">
      <!-- Logo / Top bar -->
      <div
        class="flex items-center justify-between px-4 py-6 bg-black lg:bg-[#FB5B21]
               w-full sm:w-[260px] md:w-[300px] lg:w-[400px] h-35"
      >
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="ml-6 mr-4 py-4 px-3 text-3xl sm:text-5xl lg:text-6xl 
                 font-['Emblema_One'] uppercase text-white whitespace-nowrap"
        >
          Chefer
        </NuxtLink>

        <!-- Hamburger Icon (mobile only) -->
        <button
          class="lg:hidden text-white text-2xl sm:text-3xl focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Right Side -->
      <div class="flex flex-col flex-1">
        <!-- Top Info Bar (desktop only) -->
       <nav class="hidden lg:flex justify-between bg-[#222429] text-[#686A6F] text-[16px] px-12 py-2 h-10">
          <div class="flex items-center space-x-2">
            <i class="fa fa-envelope pt-0.5 text-orange-500"></i>
            <p class="mb-0 text-lg">info@example.com</p>
          </div>
          <div class="flex items-center space-x-2">
            <i class="bi bi-telephone text-orange-500 mt-1"></i>
            <p class="mb-0">+012 345 6789</p>
          </div>
        </nav>

        <!-- Main Navigation (desktop) -->
        <nav
          class="hidden lg:flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-3 bg-black w-full h-25"
        >
<!-- Menu Links -->
<div class="flex flex-col lg:flex-row gap-4 lg:gap-6 text-lg lg:text-xl text-white/60">

  <NuxtLink to="/" class="block hover:text-orange-500"
    active-class="text-orange-500 font-semibold"
    exact-active-class="text-orange-500 font-semibold"
    @click="closeMenu()">Home</NuxtLink>

  <NuxtLink to="/About" class="hover:text-orange-500"
    active-class="text-orange-500 font-semibold"
    exact-active-class="text-orange-500 font-semibold">About</NuxtLink>

  <NuxtLink to="/Menu" class="hover:text-orange-500"
    active-class="text-orange-500 font-semibold"
    exact-active-class="text-orange-500 font-semibold">Menu</NuxtLink>

  <NuxtLink to="/Chefs" class="hover:text-orange-500"
    active-class="text-orange-500 font-semibold"
    exact-active-class="text-orange-500 font-semibold">Chefs</NuxtLink>

  <!-- ✅ Dropdown is inside now -->
  <div class="relative group">
    <span class="flex items-center cursor-pointer hover:text-orange-500">
      Pages
      <span
        class="ml-1 inline-block align-middle 
               border-t-[0.3em] border-r-[0.3em] border-b-0 border-l-[0.3em] 
               border-t-current border-r-transparent border-l-transparent"
      ></span>
    </span>
    <div class="absolute hidden group-hover:block bg-white text-black p-4 space-y-2 shadow-lg z-10 min-w-[150px]">
      <NuxtLink to="/features" class="block hover:text-orange-500">Feature</NuxtLink>
      <NuxtLink to="/blog" class="block hover:text-orange-500">Blog Post</NuxtLink>
      <NuxtLink to="/testimonials" class="block hover:text-orange-500">Testimonial</NuxtLink>
      <NuxtLink to="/404Error" class="block hover:text-orange-500">404 Error</NuxtLink>
    </div>
  </div>

  <!-- ✅ Contact is also inside -->
  <NuxtLink to="/contact" class="hover:text-orange-500"
    active-class="text-orange-500 font-semibold"
    exact-active-class="text-orange-500 font-semibold">Contact</NuxtLink>
</div>

          <!-- Social Icons -->
          <div class="hidden lg:flex items-center space-x-4 mt-4 lg:mt-0">
            <a
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-white hover:text-orange-500 hover:border-orange-500"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-white hover:text-orange-500 hover:border-orange-500"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-white hover:text-orange-500 hover:border-orange-500"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </nav>
<!-- Mobile Navigation -->
<transition name="slide-fade">
  <div
    v-if="isMenuOpen"
    class="lg:hidden bg-black text-white px-4 py-4 space-y-4 text-base sm:text-lg"
  >
    <!-- Main Links -->
    <NuxtLink
      to="/"
      class="block hover:text-orange-500"
      active-class="text-orange-500 font-semibold"
      exact-active-class="text-orange-500 font-semibold"
      @click="closeMenu()"
    >
      Home
    </NuxtLink>

    <NuxtLink
      to="/About"
      class="block hover:text-orange-500"
      active-class="text-orange-500 font-semibold"
      exact-active-class="text-orange-500 font-semibold"
      @click="closeMenu()"
    >
      About
    </NuxtLink>

    <NuxtLink
      to="/Menu"
      class="block hover:text-orange-500"
      active-class="text-orange-500 font-semibold"
      exact-active-class="text-orange-500 font-semibold"
      @click="closeMenu()"
    >
      Menu
    </NuxtLink>

    <NuxtLink
      to="/Chefs"
      class="block hover:text-orange-500"
      active-class="text-orange-500 font-semibold"
      exact-active-class="text-orange-500 font-semibold"
      @click="closeMenu()"
    >
      Chefs
    </NuxtLink>

    <!-- ✅ Dropdown for Mobile -->
    <div>
      <button
        @click="isPagesOpen = !isPagesOpen"
        class="w-full flex justify-between items-center hover:text-orange-500"
      >
        Pages
        <span :class="{ 'rotate-180': isPagesOpen }" class="transition-transform">▼</span>
      </button>

      <div v-if="isPagesOpen" class="pl-4 mt-2 space-y-2">
        <NuxtLink to="/features" @click="closeMenu()" class="block hover:text-orange-500">Feature</NuxtLink>
        <NuxtLink to="/blog" @click="closeMenu()" class="block hover:text-orange-500">Blog Post</NuxtLink>
        <NuxtLink to="/testimonials" @click="closeMenu()" class="block hover:text-orange-500">Testimonial</NuxtLink>
      </div>
    </div>

    <!-- ✅ Contact inside main block -->
    <a
      href="#contact"
      @click.prevent="scrollTo('contact'); closeMenu()"
      class="block hover:text-orange-500"
    >
      Contact
    </a>
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





<template>
  <header class="m-0 p-0 border-0 w-full">
    <section class="flex flex-col lg:flex-row w-full min-h-[64px]">
      <!-- Logo / Top bar -->
      <div
        class="flex items-center justify-between px-4 py-6 bg-black lg:bg-[#FB5B21]
               w-full sm:w-[260px] md:w-[300px] lg:w-[400px] h-35"
      >
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="ml-6 mr-4 py-4 px-3 text-3xl sm:text-5xl lg:text-6xl 
                 font-['Emblema_One'] uppercase text-white whitespace-nowrap"
        >
          Chefer
        </NuxtLink>

        <!-- Hamburger Icon (mobile only) -->
        <button
          class="lg:hidden text-white text-2xl sm:text-3xl focus:outline-none"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Right Side -->
      <div class="flex flex-col flex-1">
        <!-- Top Info Bar (desktop only) -->
        <nav class="hidden lg:flex justify-between bg-[#222429] text-[#686A6F] text-[16px] px-12 py-2 h-10">
          <div class="flex items-center space-x-2">
            <i class="fa fa-envelope pt-0.5 text-orange-500"></i>
            <p class="mb-0 text-lg">info@example.com</p>
          </div>
          <div class="flex items-center space-x-2">
            <i class="bi bi-telephone text-orange-500 mt-1"></i>
            <p class="mb-0">+012 345 6789</p>
          </div>
        </nav>

        <!-- Main Navigation (desktop) -->
        <nav
          class="hidden lg:flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-3 bg-black w-full h-25"
        >
          <!-- Menu Links (from DB) -->
          <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 text-lg lg:text-xl text-white/60">
            <NuxtLink
              v-for="item in navItems"
              :key="item.id"
              :to="item.link"
              class="hover:text-orange-500"
              active-class="text-orange-500 font-semibold"
              exact-active-class="text-orange-500 font-semibold"
              @click="closeMenu()"
            >
              {{ item.label }}
            </NuxtLink>

            <!-- ✅ Pages dropdown (static) -->
            <div class="relative group">
              <span class="flex items-center cursor-pointer hover:text-orange-500">
                Pages
                <span
                  class="ml-1 inline-block align-middle 
                         border-t-[0.3em] border-r-[0.3em] border-b-0 border-l-[0.3em] 
                         border-t-current border-r-transparent border-l-transparent"
                ></span>
              </span>
              <div class="absolute hidden group-hover:block bg-white text-black p-4 space-y-2 shadow-lg z-10 min-w-[150px]">
                <NuxtLink to="/features" class="block hover:text-orange-500">Feature</NuxtLink>
                <NuxtLink to="/blog" class="block hover:text-orange-500">Blog Post</NuxtLink>
                <NuxtLink to="/testimonials" class="block hover:text-orange-500">Testimonial</NuxtLink>
                <NuxtLink to="/404Error" class="block hover:text-orange-500">404 Error</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Social Icons -->
          <div class="hidden lg:flex items-center space-x-4 mt-4 lg:mt-0">
            <a
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-white hover:text-orange-500 hover:border-orange-500"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-white hover:text-orange-500 hover:border-orange-500"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full border border-gray-500 text-white hover:text-orange-500 hover:border-orange-500"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </nav>

        <!-- Mobile Navigation -->
        <transition name="slide-fade">
          <div
            v-if="isMenuOpen"
            class="lg:hidden bg-black text-white px-4 py-4 space-y-4 text-base sm:text-lg"
          >
            <!-- Main Links (from DB) -->
            <NuxtLink
              v-for="item in navItems"
              :key="item.id"
              :to="item.link"
              class="block hover:text-orange-500"
              active-class="text-orange-500 font-semibold"
              exact-active-class="text-orange-500 font-semibold"
              @click="closeMenu()"
            >
              {{ item.label }}
            </NuxtLink>

            <!-- ✅ Pages dropdown (static) -->
            <div>
              <button
                @click="isPagesOpen = !isPagesOpen"
                class="w-full flex justify-between items-center hover:text-orange-500"
              >
                Pages
                <span :class="{ 'rotate-180': isPagesOpen }" class="transition-transform">▼</span>
              </button>

              <div v-if="isPagesOpen" class="pl-4 mt-2 space-y-2">
                <NuxtLink to="/features" @click="closeMenu()" class="block hover:text-orange-500">Feature</NuxtLink>
                <NuxtLink to="/blog" @click="closeMenu()" class="block hover:text-orange-500">Blog Post</NuxtLink>
                <NuxtLink to="/testimonials" @click="closeMenu()" class="block hover:text-orange-500">Testimonial</NuxtLink>
                <NuxtLink to="/404Error" @click="closeMenu()" class="block hover:text-orange-500">404 Error</NuxtLink>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getNavBar } from "@/services/navbarservices";

const isMenuOpen = ref(false);
const isPagesOpen = ref(false);
const navItems = ref([]);

// fetch menu items from DB
onMounted(async () => {
  try {
    const data = await getNavBar();
    // filter only Home, About, Menu, Chefs, Contact
    navItems.value = data.filter(item =>
      ["Home", "About", "Menu", "Chefs", "Contact"].includes(item.label)
    );
  } catch (err) {
    console.error("Error loading NavBar:", err);
  }
});

const closeMenu = () => {
  isMenuOpen.value = false;
  isPagesOpen.value = false;
};
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


