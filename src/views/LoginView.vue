<template>
  <h1>Login</h1>
  <a :href="url">登入</a>
</template>

<script setup>
const INSTAGRAM_APP_ID = import.meta.env.VITE_INSTAGRAM_APP_ID
const INSTAGRAM_REDIRECT_URL = import.meta.env.VITE_INSTAGRAM_REDIRECT_URL

const url = `https://www.facebook.com/dialog/oauth?client_id=${INSTAGRAM_APP_ID}&display=page&extras={"setup":{"channel":"IG_API_ONBOARDING"}}&redirect_uri=${INSTAGRAM_REDIRECT_URL}&response_type=token&scope=instagram_basic,instagram_content_publish,instagram_manage_comments,instagram_manage_insights,pages_show_list,pages_read_engagement`
</script>