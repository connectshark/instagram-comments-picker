<template>
<div class=" bg-secondary p-20 rounded-3xl text-center">
  <h1 class=" text-xl mb-20">選取要抽獎的Instagram帳號</h1>
  <form @submit.prevent="submitHandler">
    <div v-if="loading">
      <i class='bx bx-loader-circle bx-spin' ></i>
    </div>
    <ul v-else>
      <li v-for="account in list" :key="account.id">
        <input
          required
          type="radio"
          name="fanspage"
          :id="account.id"
          :value="{
            fb:account.id,
            ig:account.instagram_business_account.id
          }"
          class=" sr-only peer"
          v-model="selected"
        >
        <label :for="account.id" class="p-4 flex items-center text-left rounded-2xl cursor-pointer bg-background peer-checked:bg-primary/20">
          <img class=" aspect-square w-10 mr-8" :src="account.instagram_business_account.profile_picture_url" :alt="account.instagram_business_account.name">
          <div>
            <h2>{{ account.instagram_business_account.username }}</h2>
            <p>{{ account.instagram_business_account.media_count }}</p>
          </div>
        </label>
      </li>
    </ul>
    <div class=" pt-20">
      <button :disabled="loading" class=" disabled:bg-primary-button/80 inline-block bg-primary-button p-4 rounded-2xl" type="submit">選取</button>
    </div>
  </form>
</div>
</template>



<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import useAccounts from '../composables/useAccounts'
import { useRouter } from 'vue-router'

const store = useUserStore()

const {
  loading,
  list
} = useAccounts()

const selected = ref(null)


const router = useRouter()
const submitHandler = async () => {
  store.fb = selected.value.fb
  store.ig = selected.value.ig
  router.replace('/me')
}
</script>