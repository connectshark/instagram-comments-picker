<template>
<header class=" backdrop-blur sticky top-0">
  <div class="px-8 w-11/12 mx-auto py-4 flex items-center justify-between">
    <router-link class="block" to="/">
      <h2 class="text-2xl/loose font-bold">IGPicker</h2>
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link v-if="!store.token" to="/login">授權</router-link>
        </li>
        <li>
          <router-link to="/me">貼文</router-link>
        </li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script setup>
import { useUserStore } from '../stores/user'

const store = useUserStore()
const navs = [
  {
    name: '授權',
    link: '/login'
  }
]
</script>