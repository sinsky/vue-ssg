<script setup lang="ts">
import { useHead } from "@unhead/vue";

useHead({
  title: "Thank You",
  meta: [
    {
      name: "description",
      content: "Thank you for your submission.",
    },
  ],
});
</script>

<template>
  <div class="thanks-container">
    <h1>Thank You!</h1>
    <p>Your submission has been received.</p>
    <p>We appreciate your cooperation with the survey.</p>
    <router-link to="/" class="back-button"> Back to Home </router-link>
  </div>
</template>

<style scoped>
.thanks-container {
  max-width: 600px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

p {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.back-button {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #45a049;
}
</style>
