<template>
  <section class="bg-[#1D1F23] text-white py-24">
    <h1 class="text-6xl text-center font-['Emblema_One']">{{ title }}</h1>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
