<script setup>
import HeaderWrapper from './components/HeaderWrapper.vue'
import FooterWrapper from './components/FooterWrapper.vue'
</script>

<template>
<HeaderWrapper/>
<main class="w-11/12 mx-auto py-10 min-h-hh">
  <router-view />
</main>
<FooterWrapper/>
</template>
