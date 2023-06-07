import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user'
const INSTAGRAM_API_DOMAIN = import.meta.env.VITE_INSTAGRAM_API_DOMAIN
const INSTAGRAM_API_VERSION = import.meta.env.VITE_INSTAGRAM_API_VERSION
const URL = INSTAGRAM_API_DOMAIN + '/' + INSTAGRAM_API_VERSION

export default function ({ postId }) {
  const store = useUserStore()
  const loading = ref(false)
  const post = ref({})
  const getComments = async () => {
    loading.value = true
    const fetch_response = await fetch(URL + '/' + postId + `?fields=comments{text,user,timestamp,username,id},caption,comments_count,media_type,media_url,shortcode,thumbnail_url&access_token=${store.token}`)
    const res = await fetch_response.json()
    post.value = res
    loading.value = false
  }

  onMounted(getComments)

  return {
    loading,
    post
  }
}