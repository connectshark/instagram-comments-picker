import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user'
const INSTAGRAM_API_DOMAIN = import.meta.env.VITE_INSTAGRAM_API_DOMAIN
const INSTAGRAM_API_VERSION = import.meta.env.VITE_INSTAGRAM_API_VERSION
const URL = INSTAGRAM_API_DOMAIN + '/' + INSTAGRAM_API_VERSION

export default function () {
  const store = useUserStore()
  const loading = ref(false)

  const list = ref([])

  const getAccounts = async () => {
    loading.value = true
    const fetch_response = await fetch(URL + `/me/accounts?fields=instagram_business_account{id,media_count,profile_picture_url,name,username},picture,name&access_token=${store.token}`)
    const res = await fetch_response.json()
    list.value = res.data.filter(fansPage => fansPage.instagram_business_account)
    loading.value = false
  }

  onMounted(getAccounts)

  return {
    list,
    loading
  }
}