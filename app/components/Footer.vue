<template>
  <footer>
    <!-- Top Footer -->
    <div class="w-full bg-[#1f1f1f] text-secondary px-5">
      <div class="flex flex-col lg:flex-row gap-8 py-12">
        <!-- Left Column -->
        <div class="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Get In Touch -->
          <div>
            <h3 class="text-white text-xl font-semibold mb-4">Get In Touch</h3>
            <div class="flex items-start mb-2">
              <i class="bi bi-geo-alt text-primary me-2 mt-1"></i>
              <p class="m-0 text-white">123 Street, New York, USA</p>
            </div>
            <div class="text-white flex items-start mb-2">
              <i class="bi bi-envelope-open text-primary me-2 mt-1"></i>
              <p class="m-0">info@example.com</p>
            </div>
            <div class="text-white flex items-start mb-2">
              <i class="bi bi-telephone text-primary me-2 mt-1"></i>
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
            <h3 class="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul class="flex flex-col space-y-2 text-white">
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Food Menu</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Our Chefs</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a></li>
            </ul>
          </div>

          <!-- More Links -->
          <div>
            <h3 class="text-white text-xl font-semibold mb-4">More Links</h3>
            <ul class="flex flex-col space-y-2 text-white">
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Food Menu</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Our Chefs</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a></li>
              <li><a href="#" class="text-secondary flex items-center"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="w-full lg:w-1/3 bg-[#111111] p-8 flex flex-col justify-center items-center text-center">
          <h3 class="text-white text-2xl font-semibold mb-4">Newsletter</h3>
          <h6 class="text-white uppercase text-light mb-2 font-semibold">Subscribe Our Newsletter</h6>
          <p class="text-white text-sm text-secondary mb-4">Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
          <form action="#" class="w-full">
            <div class="flex">
              <input type="text" class="w-full p-3 border border-white focus:outline-none" placeholder="Your Email">
              <button class="btn btn-primary px-4">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="w-full lg:bg-[#111111] py-4 px-5">
      <div class="flex flex-col lg:flex-row justify-between items-center text-center">
        <p class="text-secondary mb-2 lg:mb-0">
          &copy; <a class="text-white font-bold" href="#">Your Site Name</a>. All Rights Reserved.
          Distributed by <a class="text-white font-bold" href="https://themewagon.com">ThemeWagon</a>
        </p>
        <p class="text-light">
          Designed by <a class="text-white font-bold" href="https://htmlcodex.com" target="_blank">HTML Codex</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed unless dynamic behavior is introduced
</script>

<style scoped>
/* Additional custom styling if needed */
</style>
