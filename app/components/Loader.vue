<template>
  <div v-if="loading" class="loader-overlay">
    <div class="spinner"></div>
  </div>
</template>

<script setup>
import { useState } from '#app'

// Global reactive state for loader
const loading = useState('loading', () => false)
</script>

<style>
.loader-overlay {
  position: fixed;
  inset: 0;
  background: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid #ddd;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
