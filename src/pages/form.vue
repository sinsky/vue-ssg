<script setup lang="ts">
import { useHead } from "@unhead/vue";

useHead({
  title: "form",
  meta: [
    {
      name: "description",
      content: "Please cooperate with the survey.",
    },
  ],
});

import { useRouter } from "vue-router";

const router = useRouter();

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const myForm = event.target as HTMLFormElement;
  const formData = new FormData(myForm) as any;

  fetch(location.href, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => router.push("/thank-you/"))
    .catch((error) => alert(error));
};
</script>

<template>
  <h1>Survey</h1>
  <form
    name="demo survey"
    method="POST"
    style="display: flex; flex-direction: column; gap: 2rem"
    netlify
    @submit="handleSubmit"
    netlify-honeypot="bot-field"
  >
    <div style="display: hidden">
      <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
    </div>
    <div class="form-col">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div class="form-col">
      <label for="message">Message</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </div>
    <div class="form-last"><button type="submit">Submit</button></div>
  </form>
</template>

<style>
.form-col {
  gap: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
}
.form-last {
  display: flex;
  justify-content: flex-end;
}
</style>
