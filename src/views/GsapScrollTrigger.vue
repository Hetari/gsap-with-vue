<template>
  <main class="container">
    <h1>GsapScrollTrigger</h1>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      Gsap Scroll Trigger is a plugin that allows you to create animations that
      are triggered by the scroll position of the page.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      With ScrollTrigger, you can define various actions to be triggered at
      specific scroll points, such as starting or ending an animation, scrubbing
      through animations as the user scrolls, pinning elements to the screen,
      and more.{" "}
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      Read more about the{" "}
      <a
        href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        gsap scroll trigger </a
      >{" "} method.
    </p>

    <div class="w-full h-[70vh] flex justify-center items-center flex-col">
      <p class="text-center text-gray-800 dark:text-gray-500">
        Scroll down to see the animation
      </p>

      <svg
        class="animate-bounce mt-5"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="blue"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7 7 7-7" />
      </svg>
    </div>

    <div class="mt-20 w-full h-screen" ref="scrollRef">
      <div
        id="scroll-pink"
        class="scroll-box w-20 h-20 rounded-lg bg-pink-500"
      />
      <div
        id="scroll-orange"
        class="scroll-box w-20 h-20 rounded-lg bg-orange-500"
      />
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>
<script setup lang="ts">
import { Button } from "@/components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMounted, ref } from "vue";

// TODO:
// [x] Implement the gsap scroll trigger

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Define a ref for the parent element
const scrollRef = ref<HTMLElement | null>(null);

onMounted(() => {
  // Ensure the scrollRef has been initialized
  if (scrollRef.value) {
    // Select all child elements with the class ".scroll-box" and add it into gsap array
    const boxes: HTMLElement[] = gsap.utils.toArray(scrollRef.value.children);

    boxes.forEach((box) => {
      gsap.set(box, {
        opacity: 0,
      });

      gsap.to(box, {
        x: 100,
        duration: 1,
        scale: 1.5,
        opacity: 1,
        yoyo: true,
        scrollTrigger: {
          trigger: box,
          start: "bottom 80%",
          end: "top 20%",
          scrub: true,
        },
        ease: "circ.inOut",
      });
    });
  }
});
</script>
