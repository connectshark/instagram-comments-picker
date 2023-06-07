<template>
<div class="w-11/12 mx-auto py-10">
  <div class=" bg-secondary p-20 rounded-3xl text-center">
    <h1 v-if="loading" class=" text-xl">正在確認授權<i class='bx bx-loader-circle bx-spin' ></i></h1>
    <div v-else-if="error">
      <p class=" text-accent text-xl mb-10">有些地方有錯！</p>
      <p>
        <router-link class=" inline-block p-4 rounded-2xl bg-primary-button" to="/login">重新授權</router-link>
      </p>
    </div>
    <div v-else>
      <h1 class="text-xl mb-10">Hello~ {{ data.name }}</h1>
      <p>稍後進入設定頁面</p>
    </div>
  </div>
  <div>

  </div>
</div>
</template>

<script setup>
import { useMe } from '../composables/useBasic'
import { useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useUserStore()
const token_str = '#access_token='
const {
  getMe,
  loading,
  data
} = useMe()

const error = ref(false)

const router = useRouter()

const route = useRoute()
const hash = route.hash
const checkHash = async () => {
  if (hash.length <= 0) {
    error.value = true
  } else {
    const access_token = hash.slice(token_str.length)
    store.setToken(access_token)
    await getMe()
    setTimeout(() => {
      router.replace('/setting')
    }, 3000)
  }
}

checkHash()
</script>