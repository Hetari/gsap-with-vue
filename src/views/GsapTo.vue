<template>
  <main class="container">
    <h1>GsapTo</h1>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      The <code>gsap.to()</code> method is used to animate elements from their
      current state to a new state.
    </p>
    <p class="mt-5 text-gray-800 dark:text-gray-500">
      The <code>gsap.to()</code> method is similar to the{" "}
      <code>gsap.from()</code> method, but the difference is that the{" "}
      <code>gsap.to()</code> method animates elements from their current state
      to a new state, while the <code>gsap.from()</code> method animates
      elements from a new state to their current state.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      Read more about the{" "}
      <a
        href="https://greensock.com/docs/v3/GSAP/gsap.to()"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap.to() </a
      >{" "} method.
    </p>

    <div class="mt-20">
      <div ref="box" id="blue-box" class="size-20 bg-blue-500 rounded-lg" />
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { Button } from "@/components";

// TODO:
// [x] Implement the gsap.to() method
import { gsap } from "gsap";
const box: Ref<null> = ref(null);
onMounted(() => {
  gsap.fromTo(
    box.value,
    {
      x: 0,
    },
    {
      xPercent: 150,
      rotate: 105,
      duration: 2.5,
      ease: "circ.inOut",
      repeat: -1,
      yoyo: true,
    }
  );
});
</script>
