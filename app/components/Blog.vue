<template>
  <section id="blog" class="bg-white text-black py-20 px-4 md:px-8">
    <div class="max-w-4xl mx-auto text-center mb-12">
     <h5
        class="uppercase font-semibold mb-2 text-[#fb5b21] text-[20px] font-['Poppins']"
      >
        OUR BLOG
      </h5>
        <h1 class="text-[2.5rem] md:text-[3rem] font-['Emblema_One'] text-[#222429] leading-snug">
        Latest Articles
      </h1>
      <h1 class="text-[2.5rem] md:text-[3rem] font-['Emblema_One'] text-[#222429] leading-snug">
        From Food Blog
      </h1>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
    >
      <!-- Blog Card 1 -->
      <div class="blog-item bg-gray-900 rounded shadow-lg overflow-hidden">
        <div class="overflow-hidden rounded-t">
          <img
            src="/images/menu-3.jpg"
            alt="Blog 1"
            class="transition-transform duration-500 hover:scale-125 w-full object-cover"
          />
        </div>
        <div class="bg-black flex items-center p-6 rounded-b">
          <div
            class="text-center text-gray-400 border-r border-gray-700 pr-4 mr-4"
          >
            <span class="block text-lg font-semibold">01</span>
            <h6 class="text-yellow-500 uppercase text-sm">January</h6>
            <span class="block text-sm">2045</span>
          </div>
          <a
            href="#"
            class="text-white text-lg font-medium leading-snug hover:text-yellow-500 transition-colors"
          >
            Sed amet tempor amet sit kasd sea lorem
          </a>
        </div>
      </div>

      <!-- Blog Card 2 -->
      <div class="blog-item bg-gray-900 rounded shadow-lg overflow-hidden">
        <div class="overflow-hidden rounded-t">
          <img
            src="/images/menu-5.jpg"
            alt="Blog 2"
            class="transition-transform duration-500 hover:scale-125 w-full object-cover"
          />
        </div>
        <div class="bg-black flex items-center p-6 rounded-b">
          <div
            class="text-center text-gray-400 border-r border-gray-700 pr-4 mr-4"
          >
            <span class="block text-lg font-semibold">01</span>
            <h6 class="text-yellow-500 uppercase text-sm">January</h6>
            <span class="block text-sm">2045</span>
          </div>
          <a
            href="#"
            class="text-white text-lg font-medium leading-snug hover:text-yellow-500 transition-colors"
          >
            Sed amet tempor amet sit kasd sea lorem
          </a>
        </div>
      </div>

      <!-- Blog Card 3 -->
      <div class="blog-item bg-gray-900 rounded shadow-lg overflow-hidden">
        <div class="overflow-hidden rounded-t">
          <img
            src="/images/menu-7.jpg"
            alt="Blog 3"
            class="transition-transform duration-500 hover:scale-125 w-full object-cover"
          />
        </div>
        <div class="bg-black flex items-center p-6 rounded-b">
          <div
            class="text-center text-gray-400 border-r border-gray-700 pr-4 mr-4"
          >
            <span class="block text-lg font-semibold">01</span>
            <h6 class="text-yellow-500 uppercase text-sm">January</h6>
            <span class="block text-sm">2045</span>
          </div>
          <a
            href="#"
            class="text-white text-lg font-medium leading-snug hover:text-yellow-500 transition-colors"
          >
            Sed amet tempor amet sit kasd sea lorem
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript needed for static blog layout
</script>

<style scoped>
/* Optional: You can define reusable classes globally */
</style>
