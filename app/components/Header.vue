<template>
  <header class="bg-black text-white">
    <section class="flex flex-col lg:flex-row justify-between items-start w-full">
      <!-- Left: Logo -->
      <div class="p-4 text-center lg:text-left bg-orange-500 h-24 w-80 grid items-center">
        <NuxtLink
          to="/"
          class="text-5xl font-['Emblema_One'] uppercase text-primary"
        >
          Chefer
        </NuxtLink>
      </div>

      <!-- Right: Contact Info + Navigation -->
      <div class="flex flex-col w-full lg:w-3/4">
        <!-- Top Info -->
        <nav class="hidden lg:flex justify-between px-6 py-2 text-sm bg-black">
          <div class="flex items-center space-x-2">
            <i class="fa fa-envelope text-primary"></i>
            <p class="mb-0">info@example.com</p>
          </div>
          <div class="flex items-center space-x-2">
            <i class="fas fa-phone-alt text-primary"></i>
            <p class="mb-0">+012 345 6789</p>
          </div>
        </nav>

        <!-- Main Navigation -->
        <nav class="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-3 bg-[#111111] w-full">
          <!-- Menu Items -->
          <div class="flex flex-col lg:flex-row gap-4 lg:gap-6 text-sm uppercase font-semibold text-white">
            <a href="#hero" @click.prevent="scrollTo('hero')" class="hover:text-primary">Home</a>
            <a href="#about" @click.prevent="scrollTo('about')" class="hover:text-primary">About</a>
            <a href="#services" @click.prevent="scrollTo('services')" class="hover:text-primary">Services</a>
            <a href="#team" @click.prevent="scrollTo('team')" class="hover:text-primary">Chefs</a>

            <!-- Dropdown -->
            <div class="relative group">
              <span class="cursor-pointer hover:text-primary">Pages</span>
              <div
                class="absolute hidden group-hover:block bg-black text-white p-4 space-y-2 shadow-lg z-10 min-w-[150px] transition-all duration-300"
              >
                <a href="#features" class="block hover:text-primary">Features</a>
                <a href="#blog" class="block hover:text-primary">Blog Post</a>
                <a href="#testimonials" class="block hover:text-primary">Testimonial</a>
                <a href="#404" class="block hover:text-primary">404 Error</a>
              </div>
            </div>

            <a href="#contact" @click.prevent="scrollTo('contact')" class="hover:text-primary">Contact</a>
          </div>

          <!-- Social Icons -->
          <div class="hidden lg:flex items-center space-x-3 mt-4 lg:mt-0">
            <a href="#" class="btn-square border border-secondary rounded-full text-white hover:text-primary">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="btn-square border border-secondary rounded-full text-white hover:text-primary">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn-square border border-secondary rounded-full text-white hover:text-primary">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>

<script setup>
// Scroll smoothly to the section with given ID
const scrollTo = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
