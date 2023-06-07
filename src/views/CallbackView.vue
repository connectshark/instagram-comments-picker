<template>
<h1>Hi</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useUserStore } from '../stores/user'

const store = useUserStore()
const token_str = '#access_token='

const route = useRoute()
const access_token = route.hash.slice(token_str.length)

store.setToken(access_token)


</script>