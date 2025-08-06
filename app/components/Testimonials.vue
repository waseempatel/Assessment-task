<template>
  <div class="container-fluid p-0 my-10" id="testimonials">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
      <!-- Left Image Section -->
      <div class="min-h-[500px] wow fadeIn" data-wow-delay="0.1s">
        <div class="h-full relative overflow-hidden rounded-tl-[50%]">
          <img
            src="/images/testimonial.jpg"
            alt="Testimonial"
            class="absolute w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Right Testimonial Section -->
      <div
        class="bg-[#0F172A] p-10 overflow-hidden wow fadeIn"
        data-wow-delay="0.3s"
        style="border-bottom-right-radius: 50%"
      >
        <div class="mb-8">
          <h1 class="text-[2.5rem] md:text-[3rem] font-['Emblema_One'] text-gray-400 leading-snug">
        Our Client Say
      </h1>
          
        </div>

        <!-- Testimonials Carousel -->
        <div class="space-y-10">
          <div class="testimonial-item">
            <p class="text-lg text-white mb-4">
              <i class="fa fa-quote-left text-primary me-3"></i>
              Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
              dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
              et tempor diam tempor erat dolor rebum sit ipsum.
            </p>
            <div class="flex items-center">
              <img
                src="/images/testimonial-1.jpg"
                alt="Client"
                class="rounded-full w-[90px] h-[90px] object-cover"
              />
              <div class="ps-4">
                <h5 class="text-secondary">Client Name</h5>
                <span class="text-xs uppercase tracking-[3px] text-secondary"
                  >Profession</span
                >
              </div>
            </div>
          </div>

          <div class="testimonial-item">
            <p class="text-lg text-white mb-4">
              <i class="fa fa-quote-left text-primary me-3"></i>
              Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
              dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore
              et tempor diam tempor erat dolor rebum sit ipsum.
            </p>
            <div class="flex items-center">
              <img
                src="/images/testimonial-2.jpg"
                alt="Client"
                class="rounded-full w-[90px] h-[90px] object-cover"
              />
              <div class="ps-4">
                <h5 class="text-secondary">Client Name</h5>
                <span class="text-xs uppercase tracking-[3px] text-secondary"
                  >Profession</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Optional Carousel Controls -->
        <div class="mt-[30px] flex justify-start gap-2">
          <button
            class="w-[45px] h-[45px] flex items-center justify-center text-white bg-primary text-[22px] rounded-full transition duration-500 hover:text-black"
          >
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            class="w-[45px] h-[45px] flex items-center justify-center text-white bg-primary text-[22px] rounded-full transition duration-500 hover:text-black"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can optionally add animation logic or carousel logic later
</script>
