<template>
  <section class="bg-white py-10 px-4">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-8 items-center">
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
        <div class="w-full lg:w-7/12">
          <div class="mb-6">
            <h5 class="text-primary text-lg font-semibold uppercase">
              About Us
            </h5>
            <h1 class="text-4xl lg:text-5xl font-bold leading-tight">
              Cooking Together With The Expert
            </h1>
          </div>
          <p class="text-gray-600 mb-6">
            Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo
            at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea
            rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet
            amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Card 1 -->
            <div class="bg-gray-100 rounded-lg p-6 text-center">
              <img
                src="/images/feature-1.png"
                alt="Master Chefs"
                class="w-20 h-20 mx-auto mb-4 rounded-full bg-primary p-2"
              />
              <h4 class="text-xl font-semibold mb-2">Master Chefs</h4>
              <p class="text-gray-600 text-sm">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
              </p>
            </div>

            <!-- Card 2 -->
            <div class="bg-gray-100 rounded-lg p-6 text-center">
              <img
                src="/images/feature-3.png"
                alt="Quality Food"
                class="w-20 h-20 mx-auto mb-4 rounded-full bg-primary p-2"
              />
              <h4 class="text-xl font-semibold mb-2">Quality Food</h4>
              <p class="text-gray-600 text-sm">
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
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
