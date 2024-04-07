<template>
  <main class="container">
    <h1>GsapStagger</h1>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      GSAP stagger is a feature that allows you to apply animations with a
      staggered delay to a group of elements.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      By using the stagger feature in GSAP, you can specify the amount of time
      to stagger the animations between each element, as well as customize the
      easing and duration of each individual animation. This enables you to
      create dynamic and visually appealing effects, such as staggered fades,
      rotations, movements, and more.
    </p>

    <p class="mt-5 text-gray-800 dark:text-gray-500">
      Read more about the{" "}
      <a
        href="https://gsap.com/resources/getting-started/Staggers"
        target="_blank"
        rel="noreferrer noopener nofollow"
      >
        Gsap Stagger </a
      >{" "} feature.
    </p>

    <div class="mt-20">
      <div class="flex gap-5">
        <div class="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
        <div class="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
        <div class="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
        <div class="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
        <div class="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
        <div class="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
        <div class="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
      </div>
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
// TODO: Implement the gsap.stagger() method
import { Button } from "@/components";
</script>
