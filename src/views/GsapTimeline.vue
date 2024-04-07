<template>
  <main class="container">
    <h1>GsapTimeline</h1>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      The <code>gsap.timeline()</code> method is used to create a timeline
      instance that can be used to manage multiple animations.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      The <code>gsap.timeline()</code> method is similar to the{" "}
      <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
      <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
      <code>gsap.timeline()</code> method is used to create a timeline instance
      that can be used to manage multiple animations, while the{" "}
      <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
      <code>gsap.fromTo()</code> methods are used to animate elements from their
      current state to a new state, from a new state to their current state, and
      from a new state to a new state, respectively.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      Read more about the{" "}
      <a
        href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap.timeline() </a
      >{" "} method.
    </p>

    <div class="mt-20 space-y-10">
      <button :on-click="() => {}">Play/Pause</button>

      <div id="yellow-box" class="w-20 h-20 bg-yellow-500 rounded-lg" />
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
// TODO: Implement the gsap timeline
import { Button } from "@/components";
</script>
