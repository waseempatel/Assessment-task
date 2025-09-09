export default defineNuxtRouteMiddleware((to, from) => {
  const loading = useState('loading')

  if (process.client) {
    // Show loader on route change
    loading.value = true

    // Hide loader when navigation is done
    nextTick(() => {
      setTimeout(() => {
        loading.value = false
      }, 600) // adjust delay if needed
    })
  }
})
