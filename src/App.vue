<script setup>
import HeaderWrapper from './components/HeaderWrapper.vue'
import FooterWrapper from './components/FooterWrapper.vue'
</script>

<template>
<HeaderWrapper/>
<main>
  <router-view />
</main>
<FooterWrapper/>
</template>
