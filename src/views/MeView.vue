<template>
<h1 class=" text-2xl/loose">選擇抽獎貼文</h1>
<ul class=" grid grid-cols-3 gap-4">
  <li v-for="media in medias" :key="media.id">
    <router-link :to="'/me/' + media.id">
      <figure>
        <img loading="lazy" class=" object-cover aspect-square" :src="media.thumbnail_url || media.media_url" :alt="media.caption">
      </figure>
    </router-link>
    <p><i class='bx bx-like'></i>{{ media.like_count }} <i class='bx bx-comment-dots'></i>{{ media.comments_count }}</p>
    <p class=" line-clamp-1">{{ media.caption }}</p>
  </li>
</ul>
<div class=" text-center" v-if="loading">
  <i class='bx bx-loader-circle bx-spin bx-md' ></i>
</div>
<div class=" text-center" v-if="hasNext">
  <button @click="getNext" class=" bg-slate-800 text-white p-3 rounded" type="button">讀取更多貼文</button>
</div>
</template>

<script setup>
import useProfile from '../composables/useProfile'


const {
  loading,
  medias,
  hasNext,
  getNext
} = useProfile()

</script>