<template>
<h1>留言抽獎</h1>
<form @submit.prevent>
  <label for="number" class="block">抽取人數</label>
  <input type="number" name="" id="number" min="1" :max="post.comments_count" v-model="form.number">
</form>
<div class=" text-center" v-if="loading">
  <p>讀取留言中<i class='bx bx-loader-circle bx-spin bx-md' ></i></p>
</div>

<p v-else-if="post.comments_count === 0">無留言</p>
<table v-else class="table-fixed w-full bg-white">
  <caption class="caption-top">貼文留言</caption>
  <thead>
    <tr class="border-b">
      <th class="p-3">名稱</th>
      <th class="p-3">留言</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="comment in post.comments.data" :key="comment.id" class="border-b text-xs last:border-none">
      <td class="p-2 text-left">{{ comment.username }}</td>
      <td class="p-2 text-left">{{ comment.text }}</td>
    </tr>
  </tbody>
</table>
</template>

<script setup>
import { useRoute } from 'vue-router'
import useMedia from '../composables/useMedia'
import { reactive } from 'vue'

const form = reactive({
  number: 1
})

const route = useRoute()
const postId = route.params.postId
const {
  post,
  loading
} = useMedia({
  postId
})

</script>