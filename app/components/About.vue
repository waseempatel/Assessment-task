<template>
   <section id="about" class="bg-white py-25 px-4 md:px-8">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-stretch gap-12">
        <!-- Left Column: Images -->
        <div class="relative w-full lg:w-5/12 min-h-[500px]">
          <div
            class="absolute top-0 left-0 animate-spin-slow"
            style="width: 160px; height: 160px"
          >
            <img
              src="/images/about-round.jpg"
              alt="Rotating"
              class="w-full h-full"
            />
          </div>
          <img
            src="/images/about.jpg"
            alt="About"
            class="overflow-hidden relative w-150 l-135 rounded-tl-[250px] rounded-tr-lg rounded-br-lg rounded-bl-lg"
          />
        </div>

        <!-- Right Column: Content -->
        <div class="lg:w-7/12 flex flex-col justify-center">
          <!-- Subheading -->
          <h5 class="uppercase font-semibold text-orange-400 text-[30px] tracking-[0.2em] mb-4 font-['Poppins']">
            About Us
          </h5>

          <!-- Main Heading -->
          <h1 class="text-[3.5rem] md:text-[4rem] leading-tight font-['Emblema_One'] text-[#222429] mb-6">
            Cooking Together<br />With The Expert
          </h1>

          <!-- Description -->
          <p class="text-gray-600 text-base leading-relaxed mb-8">
            Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut.
            Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea
            rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat,
            ipsum sed at ipsum eirmod labore lorem.
          </p>

          <!-- Feature Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Card 1 -->
            <div class="bg-[#f8f9fa] rounded-xl p-6 text-left h-full">
              <div class="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-4">
                <img
                  src="/images/feature-1.png"
                  alt="Master Chefs"
                  class="w-20 h-20 object-contain"
                />
              </div>
              <h4 class="text-lg font-bold mb-2 text-[#222429]">Master Chefs</h4>
              <p class="text-gray-600 text-sm leading-relaxed">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, 
                tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore.
              </p>
            </div>

            <!-- Card 2 -->
            <div class="bg-[#f8f9fa] rounded-xl p-6 text-left h-full">
              <div class="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mb-4">
                <img
                  src="/images/feature-3.png"
                  alt="Quality Food"
                  class="w-20 h-20 object-contain"
                />
              </div>
              <h4 class="text-lg font-bold mb-2 text-[#222429]">Quality Food</h4>
              <p class="text-gray-600 text-sm leading-relaxed">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, 
                tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JS logic needed
</script>

<style scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 12s linear infinite;
}
</style>
