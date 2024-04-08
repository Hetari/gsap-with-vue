<template>
  <div class="bg-slate-50 dark:bg-black min-h-screen w-full">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

// add smooth scroll to the App
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1100);
});
gsap.ticker.lagSmoothing(0);
</script>
