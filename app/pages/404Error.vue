<template>
  <div>
    <HeroBanner
      title="404 Error"
      subtitle="Oops! Page not found"
      bgImage="/images/error-bg.jpg"
      :breadcrumbs="[
        { label: 'Home', link: '/' },
        { label: '404 Error' }
      ]"
    />

    <section class="py-16 text-center bg-[var(--secondary-color)]">
      <div class="flex justify-center">
        <span class="text-[var(--primary-color)] text-6xl"><i class="bi bi-exclamation-triangle display-1 text-9xl"></i></span>
      </div>
      <h1 class="mt-6 text-8xl font-['Emblema_One'] text-gray-800">404</h1>
      <h2 class="mt-2 text-4xl font-['Emblema_One'] text-gray-700">Page Not Found</h2>
      <p class="mt-4 text-gray-500 max-w-xl mx-auto">
            We’re sorry, the page you have looked for does not exist in our website! Maybe
      </p>
         <p class="mt-1 text-gray-500 max-w-xl mx-auto">   go to our home page or try to use a search?</p>
      <div class="mt-8">
        <NuxtLink
          to="/"
          class="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-[var(--secondary-color)] px-8 py-4 rounded-full font-['Emblema_One'] shadow-lg transition"
        >
          Go Back To Home
        </NuxtLink>
      </div>
    </section>

<section id="services">
      <Services />
    </section>
  </div>
</template>

