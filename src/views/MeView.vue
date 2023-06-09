<template>
<h1 class=" text-center text-2xl/loose">選擇抽獎貼文</h1>
<ul class=" mb-10">
  <li class="mb-4 last:mb-0 rounded-2xl overflow-hidden bg-white pr-4 hover:bg-primary/10" v-for="media in medias" :key="media.id">
    <router-link class="flex items-center space-x-4" :to="'/me/' + media.id">
      <figure class="w-20 shrink-0">
        <img loading="lazy" class=" object-cover aspect-square" :src="media.thumbnail_url || media.media_url" :alt="media.caption">
      </figure>
      <div>
        <p class="line-clamp-2">{{ media.caption }}</p>
        <p><i class='bx bx-like'></i>{{ media.like_count }} <i class='bx bx-comment-dots'></i>{{ media.comments_count }}</p>
      </div>
    </router-link>
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