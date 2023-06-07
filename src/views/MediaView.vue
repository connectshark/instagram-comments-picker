<template>
  <h1>抽獎貼文</h1>
  <h2>{{ post.shortcode }}</h2>
</template>

<script setup>
import { useRoute } from 'vue-router'
import useMedia from '../composables/useMedia'

const route = useRoute()
const postId = route.params.postId
const {
  post,
  loading
} = useMedia({
  postId
})

</script>