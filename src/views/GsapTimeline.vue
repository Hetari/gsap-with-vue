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
      <button @click="PlayPause">Play/Pause</button>

      <div id="yellow-box" class="w-20 h-20 bg-yellow-500 rounded-lg" />
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Button } from "@/components";
import { gsap } from "gsap";
import { onMounted } from "vue";
// TODO:
// [x] Implement the gsap timeline

const tl: gsap.core.Timeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
  // repeatDelay: 1,
});

onMounted(() => {
  // here we can use the css selector instead of the vue refs
  tl.to("#yellow-box", {
    x: 300,
    rotate: -180,
    duration: 0.7,
    ease: "power1.inOut",
  });

  tl.fromTo(
    "#yellow-box",
    {
      // we can remove the scale here and use tl.to() only
      scale: 1,
    },
    {
      scale: 2,
      duration: 0.5,
      ease: "expo.inOut",
    }
  );

  tl.to("#yellow-box", {
    x: 600,
    borderRadius: 50,
    duration: 1,
    ease: "expo.inOut",
  });
});

/**
 * Toggle the play and pause state of the animation timeline.
 *
 * @returns void
 */
const PlayPause: () => void = () => {
  // Toggle pause state of the timeline
  tl.paused(!tl.paused());
};
</script>
