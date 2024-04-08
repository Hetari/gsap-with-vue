<template>
  <main class="container">
    <h1>GsapFromTo</h1>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      The <code>gsap.fromTo()</code> method is used to animate elements from a
      new state to a new state.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      The <code>gsap.fromTo()</code> method is similar to the{" "}
      <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
      difference is that the <code>gsap.fromTo()</code> method animates elements
      from a new state to a new state, while the{" "}
      <code>gsap.from()</code> method animates elements from a new state to
      their current state, and the <code>gsap.to()</code> method animates
      elements from their current state to a new state.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      Read more about the{" "}
      <a
        href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap.fromTo() </a
      >{" "} method.
    </p>

    <div class="mt-20">
      <div ref="box" id="red-box" class="w-20 h-20 bg-red-500 rounded-lg" />
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Button } from "@/components";
// TODO:
// [x] Implement the gsap.fromTo() method
import { ref, onMounted, type Ref } from "vue";

// TODO:
// [x] Implement the gsap.fromTo() method
import { gsap } from "gsap";
const box: Ref<null> = ref(null);
onMounted(() => {
  gsap.fromTo(
    box.value,
    {
      yPercent: 150,
      borderRadius: 0,
    },
    {
      xPercent: 150,
      yPercent: 0,
      rotate: 105,
      borderRadius: 50,
      duration: 2.5,
      ease: "expo.inOut",
      repeat: -1,
      yoyo: true,
    }
  );
});
</script>
