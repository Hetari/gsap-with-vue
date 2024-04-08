<template>
  <main class="container">
    <h1 id="text" class="opacity-0 translate-y-10">GsapText</h1>

    <p class="mt-5 text-gray-800 dark:text-gray-500 para">
      We can use same method like <code>gsap.to()</code>,{" "}
      <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
      <code>gsap.timeline()</code> to animate text.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500 para">
      Using these methods we can achieve various text animations and effects
      like fade in, fade out, slide in, slide out, and many more.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500 para">
      For more advanced text animations and effects, you can explore the GSAP
      TextPlugin or other third-party libraries that specialize in text
      animations.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500 para">
      Read more about the{" "}
      <a
        href="https://greensock.com/docs/v3/Plugins/TextPlugin"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        TextPlugin </a
      >{" "} plugin.
    </p>

    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
import { Button } from "@/components";
import { TextPlugin } from "gsap/all";
import gsap from "gsap";
import { onMounted } from "vue";

// TODO:
// [x] Implement gsap text animation

onMounted(() => {
  gsap.registerPlugin(TextPlugin);
  gsap.to("#text", {
    duration: 1,
    opacity: 1,
    y: 0,
    text: {
      value: "Your new text",
      speed: 0.5,
      preserveSpaces: true,
    },
    ease: "back.inOut(5)",
  });
});
</script>
