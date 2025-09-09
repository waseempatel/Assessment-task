<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="bg-[#1D1F23] text-[var(--secondary-color)]/60 py-18">
    <h1 class="text-8xl text-center font-['Emblema_One']">{{ title }}</h1>
  </section>
</template>


