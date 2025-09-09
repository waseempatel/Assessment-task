<script setup>
import { ref } from "vue";
import { subscribeNewsLetter } from "@/services/newsletterservices";

const email = ref("");
const message = ref("");
const loading = ref(false);

const handleSubmit = async () => {
  if (!email.value) {
    message.value = "Please enter your email.";
    return;
  }

  loading.value = true;
  message.value = "";

  try {
    const res = await subscribeNewsLetter(email.value);
    message.value = res.message || "Subscribed successfully!";
    email.value = ""; // clear field
  } catch (err) {
    message.value = err.response?.data || "Subscription failed. Try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <footer>
    <!-- Top Footer -->
    <div class="w-full bg-[#1f1f1f] text-secondary px-4 sm:px-5">
      <div class="flex flex-col lg:flex-row items-stretch gap-10 sm:gap-16 py-10">
        
        <!-- Left Column -->
        <div class="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-20">
          
          <!-- Get In Touch -->
          <div>
            <h3 class="text-[var(--secondary-color)] text-xl md:text-2xl font-['Emblema_One'] leading-snug">Get In Touch</h3>

            <div class="flex items-start mb-2 mt-6">
              <i class="bi bi-geo-alt text-[var(--primary-color)] me-2 mt-1"></i>
              <p class="m-0 text-[var(--secondary-color)]/60">123 Street, New York, USA</p>
            </div>
            <div class="flex items-start mb-2">
              <i class="bi bi-envelope-open text-[var(--primary-color)] me-2 mt-1"></i>
              <p class="m-0 text-[var(--secondary-color)]/60">info@example.com</p>
            </div>
            <div class="flex items-start mb-2">
              <i class="bi bi-telephone text-[var(--primary-color)] me-2 mt-1"></i>
              <p class="m-0 text-[var(--secondary-color)]/60">+012 345 67890</p>
            </div>

            <div class="flex mt-4 space-x-2">
              <a href="#" class="p-2 rounded-full bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--primary-color)] transition"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="p-2 rounded-full bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--primary-color)] transition"><i class="fab fa-twitter"></i></a>
              <a href="#" class="p-2 rounded-full bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--primary-color)] transition"><i class="fab fa-linkedin-in"></i></a>
              <a href="#" class="p-2 rounded-full bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--primary-color)] transition"><i class="fab fa-instagram"></i></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-[var(--secondary-color)] text-xl md:text-2xl font-['Emblema_One'] leading-snug">Quick Links</h3>
            <ul class="flex flex-col space-y-2 text-[var(--secondary-color)]/60 mt-6">
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Home</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>About Us</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Food Menu</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Our Chefs</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Latest Blog</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Contact Us</a></li>
            </ul>
          </div>

          <!-- More Links -->
          <div>
            <h3 class="text-[var(--secondary-color)] text-xl md:text-2xl font-['Emblema_One'] leading-snug">More Links</h3>
            <ul class="flex flex-col space-y-2 text-[var(--secondary-color)]/60 mt-6">
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Home</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>About Us</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Food Menu</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Our Chefs</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Latest Blog</a></li>
              <li><a href="#" class="flex items-center hover:text-[var(--secondary-color)]"><i class="bi bi-arrow-right text-[var(--primary-color)] me-2"></i>Contact Us</a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="w-full lg:w-1/3 bg-[#111111] p-6 sm:p-8 flex flex-col justify-center items-center text-center rounded-lg">
        <h3 class="text-[var(--secondary-color)] text-xl md:text-2xl font-['Emblema_One']">Newsletter</h3>
        <h6 class="text-[var(--secondary-color)] uppercase font-semibold mb-2 mt-5">Subscribe Our Newsletter</h6>
         <p class="text-[var(--secondary-color)] text-sm mb-4 leading-snug">
            Amet justo diam dolor rebum lorem sit stet sea<br />
            <span class="text-[var(--secondary-color)]">justo kasd</span>
          </p>

          <form @submit.prevent="handleSubmit" class="w-full max-w-xs">
    <div class="flex flex-col sm:flex-row w-full">
      <input
        v-model="email"
        type="email"
        required
        class="w-full px-4 py-3 text-sm border border-[var(--secondary-color)] focus:outline-none bg-[var(--secondary-color)] text-[var(--dark-color)] rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
        placeholder="Your Email"
      />
      <button
        type="submit"
        :disabled="loading"
        class="mt-2 sm:mt-0 text-[16px] px-4 py-3 bg-[var(--primary-color)] text-[var(--secondary-color)] font-['Emblema_One'] rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none hover:bg-[var(--primary-color)] transition-all whitespace-nowrap"
      >
        {{ loading ? "..." : "Sign Up" }}
      </button>
    </div>
    <p v-if="message" class="mt-3 text-sm text-green-400">{{ message }}</p>
  </form>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="w-full bg-[#111111] py-6 px-4">
      <div class="flex flex-col lg:flex-row justify-between items-center text-center text-sm space-y-2 lg:space-y-0">
        <p class="text-[var(--secondary-color)] text-sm sm:text-base">
          &copy; <span class="font-bold">Your Site Name</span>
          <span class="text-secondary"> All Rights Reserved. Distributed by </span>
          <a class="font-bold text-[var(--secondary-color)]/60 hover:text-[var(--secondary-color)]" href="https://themewagon.com" target="_blank">ThemeWagon</a>
        </p>
        <p class="text-[var(--secondary-color)] text-sm sm:text-base">
          <span class="text-secondary">Designed by </span>
          <a class="font-bold text-[var(--secondary-color)] hover:text-[var(--primary-color)]" href="https://htmlcodex.com" target="_blank">HTML Codex</a>
        </p>
      </div>
    </div>
  </footer>
</template>



