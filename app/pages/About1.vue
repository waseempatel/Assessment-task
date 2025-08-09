<template>
<Header />
  <div>
    <HeroBanner title="About" />
    <section>
      <About />
    </section>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
import HeroBanner from '~/components/HeroBanner.vue'
import About from '~/components/About.vue'
</script>
