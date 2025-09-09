<script setup>
import { ref, onMounted } from "vue";
import { getBlog } from "@/services/blogservices";

const blogs = ref([]);

onMounted(async () => {
  blogs.value = await getBlog();
});
</script>

<template>
  <section id="blog" class="bg-[var(--secondary-color)] text-[var(--dark-color)] py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <!-- Section Header -->
    <div class="max-w-4xl mx-auto text-center mb-12" v-if="blogs.length > 0">
      <h5
        class="uppercase font-semibold mb-2 text-[var(--primary-color)] text-sm sm:text-base md:text-lg tracking-[0.2em]"
      >
        {{ blogs[0]?.title }}
      </h5>

      <!-- First line of subtitle -->
      <h1
        class="text-2xl sm:text-4xl lg:text-6xl font-['Emblema_One'] text-[var(--dark-color)] leading-snug"
      >
        {{ blogs[0]?.subtitle?.split(" ").slice(0, 2).join(" ") }}
      </h1>

      <!-- Second line of subtitle -->
<h1
  class="text-2xl sm:text-4xl lg:text-6xl font-['Emblema_One'] text-[var(--dark-color)] leading-snug"
>
  {{
    blogs[0]?.subtitle
      ?.split(" ")
      .slice(2)
      .join(" ")
      .replace(/^from/, "From")
  }}
</h1>
    </div>

    <!-- Blog Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
    >
      <div
        v-for="(blog, index) in blogs"
        :key="blog.id"
        class="blog-item bg-gray-900 rounded shadow-lg overflow-hidden"
      >
        <div class="overflow-hidden rounded-t h-48 sm:h-64 md:h-80">
          <img
            :src="blog.imageUrl"
            :alt="'Blog ' + (index + 1)"
            class="transition-transform duration-500 hover:scale-125 w-full h-full object-cover"
          />
        </div>
        <div
          class="bg-[var(--dark-color)] flex items-center p-4 sm:p-6 rounded-b flex-col sm:flex-row text-center sm:text-left"
        >
          <!-- Date Block -->
          <div
            class="text-gray-400 border-b sm:border-b-0 sm:border-r border-gray-700 pb-2 sm:pb-0 sm:pr-4 sm:mr-4 mb-2 sm:mb-0"
          >
            <span class="block text-base sm:text-lg font-semibold">{{ blog.day.toString().padStart(2, '0') }}</span>
            <h6 class="text-[var(--primary-color)] uppercase text-xs sm:text-sm">{{ blog.month }}</h6>
            <span class="block text-xs sm:text-sm">{{ blog.year }}</span>
          </div>
          <!-- Blog Title -->
          <a
            href="#"
            class="text-[var(--secondary-color)] text-base sm:text-lg font-['Emblema_One'] leading-snug hover:text-yellow-500 transition-colors"
          >
            {{ blog.content }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
