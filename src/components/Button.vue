<template>
  <button type="button" @click="$router.push({ name: 'home' })" class="btn">
    <slot>Go Back</slot>
  </button>
</template>

<script setup lang="ts"></script>
