<template>
  <main class="container">
    <h1>GsapFrom</h1>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      The <code>gsap.from()</code> method is used to animate elements from a new
      state to their current state.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      The <code>gsap.from()</code> method is similar to the{" "}
      <code>gsap.to()</code> method, but the difference is that the{" "}
      <code>gsap.from()</code> method animates elements from a new state to
      their current state, while the <code>gsap.to()</code> method animates
      elements from their current state to a new state.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      Read more about the{" "}
      <a
        href="https://greensock.com/docs/v3/GSAP/gsap.from()"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap.from() </a
      >{" "} method.
    </p>

    <div class="mt-20">
      <div id="green-box" class="w-20 h-20 bg-green-500 rounded-lg" />
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
// TODO: Implement the gsap.from() method
import { Button } from "@/components";
</script>
