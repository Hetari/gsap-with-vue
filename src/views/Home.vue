<template>
  <main class="container">
    <div class="flex flex-col">
      <h1 class="text-3xl font-bold text-zinc-800 dark:text-zinc-50">
        GSAP Animations
      </h1>
      <ol class="flex flex-col mt-10">
        <li
          v-for="(animation, index) in animations"
          :key="index"
          class="flex flex-row gap-2 p-5 hover:shadow-lg hover:dark:shadow-white/10 hover:scale-105 hover:dark:bg-zinc-800/50 hover:bg-zinc-400/50 rounded-lg cursor-pointer transition-[background-color|scale] transition-duration-200"
        >
          <p>
            <span class="text-sm font-bold text-zinc-800 dark:text-zinc-50">
              {{ index + 1 }}.
            </span>
          </p>
          <div class="flex flex-col gap-2 flex-1">
            <RouterLink
              :to="{ name: animation.pathName }"
              class="text-md font-semibold text-blue-700 dark:text-blue-600"
            >
              {{ animation.title }}
            </RouterLink>
            <p class="text-gray-600 dark:text-gray-400 text-xs">
              {{ animation.description }}
            </p>
          </div>

          <svg
            class="size-6 text-gray-600 -rotate-90"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
            />
          </svg>
        </li>
      </ol>
    </div>
    <div class="mt-20 text-end">
      <Button />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { animations } from "@/constants";
import { Button } from "@/components";
</script>
