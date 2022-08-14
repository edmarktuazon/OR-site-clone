<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { default as TheFooter } from "./components/TheFooter.vue";
import { default as TheNavigation } from "./components/TheNavigation.vue";
import { default as ThePopupModal } from "./components/ThePopupModal.vue";
</script>

<template>
  <ThePopupModal />
  <TheNavigation />
  <RouterView></RouterView>
  <TheFooter />
</template>
