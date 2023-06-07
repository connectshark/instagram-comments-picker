<template>
<header class=" backdrop-blur sticky top-0">
  <div class="px-8 w-11/12 mx-auto py-4 flex items-center justify-between">
    <router-link class="block" to="/">
      <h2 class="text-2xl/loose font-bold">IGPicker</h2>
    </router-link>
    <nav>
      <ul>
        <li v-for="item in navs">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script setup>
const navs = [
  {
    name: '授權',
    link: '/login'
  }
]
</script>