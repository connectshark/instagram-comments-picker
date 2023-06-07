import { ref } from "vue"
import { useUserStore } from '../stores/user'
const INSTAGRAM_API_DOMAIN = import.meta.env.VITE_INSTAGRAM_API_DOMAIN
const INSTAGRAM_API_VERSION = import.meta.env.VITE_INSTAGRAM_API_VERSION
const URL = INSTAGRAM_API_DOMAIN + '/' + INSTAGRAM_API_VERSION

export const useMe = () => {
  const store = useUserStore()
  const loading = ref(false)
  const data = ref({})
  const getMe = async () => {
    loading.value = true
    const fetch_response = await fetch(URL + `/me?fields=id,name&access_token=${store.token}`)
    const response = await fetch_response.json()
    data.value = response
    loading.value = false
  }

  return {
    getMe,
    loading,
    data
  }
}