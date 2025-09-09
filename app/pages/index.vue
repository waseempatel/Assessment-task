<template>
  <div>
    <section id="hero">
      <Hero />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="facts">
      <Facts />
    </section>
    <section id="feature">
      <Feature />
    </section>
    <section id="menu">
      <Menu />
    </section>
    <section id="team">
      <Team />
    </section>
    <section id="testimonials">
      <Testimonials />
    </section>
    <section id="blog">
      <Blog />
    </section>
    <section id="services">
      <Services />
    </section>
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Facts from "~/components/Facts.vue";
import Feature from "@/components/Feature.vue";
import Menu from "@/components/Menu.vue";
import Team from "@/components/Team.vue";
import Testimonials from "@/components/Testimonials.vue";
import Blog from "@/components/Blog.vue";
import Services from "@/components/Services.vue";
</script>
