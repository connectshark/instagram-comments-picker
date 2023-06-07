<template>
<h1>Setting 選取Instagram 帳號</h1>
<form @submit.prevent="submitHandler">
  <ul>
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
        v-model="selected"
      >
      <label :for="account.id" class="p-4 bg-slate-700 flex items-center">
        <img class=" w-10" :src="account.instagram_business_account.profile_picture_url" :alt="account.instagram_business_account.name">
        <div>
          <h2>{{ account.instagram_business_account.name }}</h2>
          <p>{{ account.instagram_business_account.media_count }}</p>
        </div>
      </label>
    </li>
  </ul>
  <div>
    <button type="submit">選取</button>
  </div>
</form>
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