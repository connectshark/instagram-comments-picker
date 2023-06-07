import { onMounted, ref } from 'vue'
import { useUserStore } from '../stores/user'
const INSTAGRAM_API_DOMAIN = import.meta.env.VITE_INSTAGRAM_API_DOMAIN
const INSTAGRAM_API_VERSION = import.meta.env.VITE_INSTAGRAM_API_VERSION
const URL = INSTAGRAM_API_DOMAIN + '/' + INSTAGRAM_API_VERSION

export default function () {
  const store = useUserStore()
  const loading = ref(false)

  const medias = ref([])
  const media_count = ref(null)
  const hasNext = ref(false)
  const nextUrl = ref('')

  const getIG = async () => {
    loading.value = true
    const fetch_response = await fetch(URL + `/${store.ig}?fields=media_count,media{caption,comments_count,id,like_count,media_type,permalink,media_url,thumbnail_url},name,profile_picture_url&access_token=${store.token}`)
    const res = await fetch_response.json()
    medias.value = res.media.data
    media_count.value = res.media_count
    if (res.media.paging?.next) {
      hasNext.value = true
      nextUrl.value = res.media.paging.next
    }
    loading.value = false
  }

  const getNext = async () => {
    loading.value = true
    hasNext.value = false
    const fetch_response = await fetch(nextUrl.value)
    const res = await fetch_response.json()
    res.data.forEach(item => {
      medias.value.push(item)
    })
    if (res.paging?.next) {
      hasNext.value = true
      nextUrl.value = res.paging.next
    }
    loading.value = false
  }

  onMounted(getIG)

  return {
    medias,
    media_count,
    loading,
    hasNext,
    getNext
  }
}