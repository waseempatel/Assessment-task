<template>
  <footer>
    <!-- Top Footer -->
    <div class="w-full bg-[#1f1f1f] text-secondary px-5">
      <div class="flex flex-col lg:flex-row items-stretch gap-25 py-10">
        <!-- Left Column -->
        <div class="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-20">
          <!-- Get In Touch -->
          <div>
             <h3 class="text-white text-xl md:text-2xl font-['Emblema_One'] leading-snug">
  Get In Touch
</h3>

            <div class=" flex items-start mb-2 mt-6">
              <i class="bi bi-geo-alt text-primary me-2 mt-1 text-orange-500"></i>
              <p class="m-0 text-white/60">123 Street, New York, USA</p>
            </div>
            <div class=" text-white/60 flex items-start mb-2">
              <i class="bi bi-envelope-open text-primary me-2 mt-1 text-orange-500"></i>
              <p class="m-0">info@example.com</p>
            </div>
            <div class="text-white/60 flex items-start mb-2">
              <i class="bi bi-telephone text-primary me-2 mt-1 text-orange-500"></i>
              <p class="m-0">+012 345 67890</p>
            </div>
            <div class="flex mt-4 space-x-2">
              <a href="#" class="btn btn-primary btn-square rounded-full text-white bg-orange-500"><i class="fab fa-twitter"></i></a>
              <a href="#" class="btn btn-primary btn-square rounded-full text-white bg-orange-500"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="btn btn-primary btn-square rounded-full text-white bg-orange-500"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="btn btn-primary btn-square rounded-full text-white bg-orange-500"><i class="fab fa-instagram"></i></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-white text-xl md:text-2xl font-['Emblema_One'] leading-snug">
  Quick Links
</h3>
            <ul class="flex flex-col space-y-2 text-white/60">
              <li><a href="#" class="text-secondary flex items-center mt-6"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Home</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>About Us</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Food Menu</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Our Chefs</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Latest Blog</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Contact Us</a></li>
            </ul>
          </div>

          <!-- More Links -->
          <div>
            <h3 class="text-white text-xl md:text-2xl font-['Emblema_One'] leading-snug">
  More Links
</h3>
            <ul class="flex flex-col space-y-2 text-white/60">
              <li><a href="#" class="text-secondary flex items-center mt-6"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Home</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>About Us</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Food Menu</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Our Chefs</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Latest Blog</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-orange-500 me-2"></i>Contact Us</a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
   <div class="w-full lg:w-1/3 bg-[#111111] p-8 flex flex-col justify-center items-center text-center h-[300px] min-h-full">
  <h3 class="text-white text-xl md:text-2xl font-['Emblema_One'] leading-snug">
    Newsletter
  </h3>
  <h6 class="text-white uppercase font-semibold mb-2 mt-5">
    Subscribe Our Newsletter
  </h6>
  <p class="text-white text-sm mb-4 leading-snug">
    Amet justo diam dolor rebum lorem sit stet sea<br />
    <span class="text-white">justo kasd</span>
  </p>

  <form action="#" class="w-80">
    <div class="flex w-full">
      <input
        type="email"
        class="w-full px-4 py-3 text-sm border border-white focus:outline-none bg-white text-black rounded-tl-xl rounded-bl-xl"
        placeholder="Your Email"
      />
      <button
      type="submit"
        class="text-[20px] px-2 py-3 bg-orange-500 text-white font-['Emblema_One'] rounded-tr-xl rounded-br-xl hover:bg-orange-600 transition-all whitespace-nowrap"
      >
        Sign Up
      </button>
    </div>
  </form>
</div>
      </div>
    </div>

    <!-- Bottom Footer -->
 <div class="w-full bg-[#111111] py-8 px-4 md:px-55">
  <div class="flex flex-col lg:flex-row justify-between items-center text-center text-sm">
    
    <!-- Left Side -->
    <p class="text-white text-base md:text-lg mb-2 lg:mb-0">
      &copy; <span class="font-bold">Your Site Name</span>. 
      <span class="text-secondary">All Rights Reserved. Distributed by </span> 
      <a class="font-bold text-white\60" href="https://themewagon.com" target="_blank">ThemeWagon</a>
    </p>

    <!-- Right Side -->
    <p class="text-white text-base md:text-lg mb-2 lg:mb-0">
      <span class="text-secondary">Designed by </span> 
      <a class="font-bold text-white" href="https://htmlcodex.com" target="_blank">HTML Codex</a>
    </p>

  </div>
</div>
  </footer>
</template>

<script setup>
// No script needed unless dynamic behavior is introduced
</script>

<style scoped>
/* No extra styles needed currently */
</style>
