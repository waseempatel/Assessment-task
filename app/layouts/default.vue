<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <slot /> <!-- Page content will be injected here -->
    <Footer />
  </div>
</template>

