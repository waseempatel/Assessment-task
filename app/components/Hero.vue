<template>
  <section class="bg-black text-gray-400 py-12">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <div class="flex flex-col items-center mb-10">
        <h1
          class="text-5xl md:text-8xl font-['Emblema_One'] text-gray-400 text-center"
        >
          John Doe
        </h1>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column -->
        <div class="flex flex-col items-center text-center">
          <img
            src="/images/hero-2.jpg"
            alt="Hero Left"
            class="rounded mb-4 w-full object-cover"
          />

          <!-- Arrow Centered -->
          <div class="my-4">
            <i
              class="bi bi-arrow-down animate-up-down text-[3rem] mx-auto block"
            ></i>
          </div>

          <p class="mb-4">
            Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
            Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum
            et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
            justo et tempor consetetur takimata eirmod.
          </p>
        </div>

        <!-- Center Column -->
        <div class="relative h-[300px] md:h-[500px] rounded overflow-hidden">
          <img
            src="/images/hero-1.jpg"
            alt="Hero Center"
            class="absolute inset-0 w-full h-full object-cover rounded"
          />
        </div>

        <!-- Right Column -->
        <div class="flex flex-col items-center text-center">
          <p class="mb-4">
            Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
            Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum
            et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
            justo et tempor consetetur takimata eirmod.
          </p>

          <!-- Arrow Centered -->
          <div class="my-4">
            <i
              class="bi bi-arrow-up animate-up-down text-[3rem] mx-auto block"
            ></i>
          </div>

          <img
            src="/images/hero-3.jpg"
            alt="Hero Right"
            class="rounded mt-4 w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth subtle arrow animation */
.animate-up-down {
  position: relative;
  animation: upDown 1.5s ease-in-out infinite;
}

@keyframes upDown {
  0% {
    top: 0;
  }
  50% {
    top: 10px;
  }
  100% {
    top: 0;
  }
}
</style>
