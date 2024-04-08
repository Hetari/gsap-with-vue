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
      <div ref="box" id="green-box" class="w-20 h-20 bg-green-500 rounded-lg" />
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Button } from "@/components";
import { ref, onMounted, type Ref } from "vue";

// TODO:
// [x] Implement the gsap.from() method
import { gsap } from "gsap";
const box: Ref<null> = ref(null);
onMounted(() => {
  gsap.from(box.value, {
    xPercent: 150,
    rotate: 105,
    duration: 2.5,
    ease: "power1.inOut",
    // comment out the following line to see the difference:
    repeat: -1,
    yoyo: true,
  });
});
</script>
