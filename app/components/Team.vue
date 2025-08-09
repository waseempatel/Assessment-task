<template>
  <div class="container mx-auto px-4 py-10">
    <!-- Section Title -->
    <div class="mb-12 text-center max-w-3xl mx-auto">
      <h5 class="text-orange-400 text-lg uppercase font-semibold font-['Poppins'] mb-1 tracking-[0.2em]">
        <span class="mr-4">E X P E R T</span>
  <span>C H E F S</span>
      </h5>
      <h1 class="text-[3.5rem] md:text-[3.5rem] font-['Emblema_One'] text-[#222429] leading-snug">
        Let's Meet The 
      </h1>
      <h1 class="text-[3.5rem] md:text-[3.5rem] font-['Emblema_One'] text-[#222429] leading-snug">
        Expert
      </h1>
    </div>

    <!-- Team Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(member, index) in team" :key="index" class="relative group">
        <!-- Image with custom border radius -->
        <div class="overflow-hidden relative rounded-tl-[120px] rounded-tr-lg rounded-br-lg rounded-bl-lg">
          <img
            :src="member.image"
            :alt="member.name"
            class="w-full h-auto object-cover transform scale-125 transition-all duration-500 group-hover:-mt-12 group-hover:mb-12"
          />

          <!-- Overlay on hover -->
          <div
            class="absolute top-full bottom-[100px] left-0 right-0 flex items-center justify-center bg-[rgba(34,36,41,0.9)] opacity-0 group-hover:top-0 group-hover:opacity-100 transition-all duration-500"
          >
            <div class="flex space-x-2">
              <a
                v-for="(icon, idx) in member.socials"
                :key="idx"
                :href="icon.link"
                class="bg-white text-gray-800 rounded-full p-2 hover:bg-gray-200 transition"
              >
                <i :class="icon.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Info Box -->
        <div
          class="absolute bottom-0 left-0 w-full h-25 text-center py-4 bg-[rgba(34,36,41,0.9)] rounded-b-lg"
        >
          <h5 class="text-white text-lg font-semibold">{{ member.name }}</h5>
          <p class="text-sm uppercase text-gray-400 tracking-[3px] m-0">
            {{ member.role }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const team = [
  {
    name: 'John Deo',
    role: 'Master Chef',
    image: '/images/team-1.jpg',
    socials: [
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fab fa-facebook-f', link: '#' },
      { icon: 'fab fa-linkedin-in', link: '#' },
    ],
  },
  {
    name: 'John Deo',
    role: 'Assistant',
    image: '/images/team-2.jpg',
    socials: [
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fab fa-facebook-f', link: '#' },
      { icon: 'fab fa-linkedin-in', link: '#' },
    ],
  },
  {
    name: 'John Deo',
    role: 'Assistant',
    image: '/images/team-3.jpg',
    socials: [
      { icon: 'fab fa-twitter', link: '#' },
      { icon: 'fab fa-facebook-f', link: '#' },
      { icon: 'fab fa-linkedin-in', link: '#' },
    ],
  },
];
</script>
