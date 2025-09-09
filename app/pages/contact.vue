<script setup>
import { ref } from "vue";
import { sendContactForm } from "@/services/contactservices";

const name = ref("");
const email = ref("");
const subject = ref("");
const messageText = ref("");
const statusMessage = ref("");
const loading = ref(false);

const handleSubmit = async () => {
  if (!name.value || !email.value || !subject.value || !messageText.value) {
    statusMessage.value = "All fields are required.";
    return;
  }

  loading.value = true;
  statusMessage.value = "";

  try {
    const res = await sendContactForm({
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: messageText.value,
    });

    statusMessage.value = res.message || "Message sent successfully!";
    // clear form
    name.value = "";
    email.value = "";
    subject.value = "";
    messageText.value = "";
  } catch (err) {
    statusMessage.value = err.response?.data || "Failed to send message. Try again.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <HeroBanner title="Contact" />
    
<!-- Contact Section -->
<section class="py-20 bg-[var(--secondary-color)]" id="contact">
  <div class="text-center mb-16">
    <h5 class="font-poppins text-[var(--primary-color)] uppercase text-[20px] [word-spacing:5px] mb-3 tracking-[10px]">
      Contact Us
    </h5>
    <h2 class="text-6xl font-['Emblema_One'] mb-4">Get In Touch</h2>
    <p class="text-gray-600 max-w-2xl mx-auto">
      The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. 
      <a href="#" class="text-[var(--primary-color)] font-semibold">Download Now.</a>
    </p>
  </div>

  <!-- Contact Info -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
    <div class="bg-gray-100 h-48 flex flex-col justify-center items-center p-6 rounded-lg text-center shadow">
      <div class="bg-[var(--primary-color)] p-3 rounded-full mb-3">
        <i class="fas fa-map-marker-alt text-[var(--secondary-color)] text-xl"></i>
      </div>
      <h3 class="font-['Emblema_One'] text-lg mb-1">Visit Us</h3>
      <p class="text-gray-600">123 Street, New York, USA</p>
    </div>

    <div class="bg-gray-100 h-48 flex flex-col justify-center items-center p-6 rounded-lg text-center shadow">
      <div class="bg-[var(--primary-color)] p-3 rounded-full mb-3">
        <i class="fas fa-envelope text-[var(--secondary-color)] text-xl"></i>
      </div>
      <h3 class="font-['Emblema_One'] text-lg mb-1">Email Us</h3>
      <p class="text-gray-600">info@example.com</p>
    </div>

    <div class="bg-gray-100 h-48 flex flex-col justify-center items-center p-6 rounded-lg text-center shadow">
      <div class="bg-[var(--primary-color)] p-3 rounded-full mb-3">
        <i class="fas fa-phone text-[var(--secondary-color)] text-xl"></i>
      </div>
      <h3 class="font-['Emblema_One'] text-lg mb-1">Call Us</h3>
      <p class="text-gray-600">+012 345 6789</p>
    </div>
  </div>

  <!-- Form + Map -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
    <!-- Contact Form -->
    <div class="bg-gray-100 p-8 rounded-lg shadow h-full">
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input v-model="name" type="text" placeholder="Your Name"
            class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />
          <input v-model="email" type="email" placeholder="Your Email"
            class="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />
        </div>
        <input v-model="subject" type="text" placeholder="Subject"
          class="w-full p-3 rounded border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required />
        <textarea v-model="messageText" placeholder="Message" rows="5"
          class="w-full p-3 rounded border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" required></textarea>
        <button type="submit" :disabled="loading"
          class="w-full bg-[var(--primary-color)] text-[var(--secondary-color)] font-['Emblema_One'] py-3 rounded hover:bg-[var(--primary-color)] transition">
          {{ loading ? "Sending..." : "Send Message" }}
        </button>
        <p v-if="statusMessage" class="mt-3 text-sm text-green-600">{{ statusMessage }}</p>
      </form>
    </div>

    <!-- Google Map -->
    <div class="rounded-lg overflow-hidden shadow h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.4383542224!2d-74.11808605000001!3d40.705825449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzIxLjAiTiA3NMKwMDcnMTUuMCJX!5e0!3m2!1sen!2sus!4v1614887689000!5m2!1sen!2sus"
        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>
  </div>
</section>

    <section id="services">
      <Services />
    </section>
  </div>
</template>



   