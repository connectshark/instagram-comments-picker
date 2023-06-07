import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: '',
    fb: '',
    ig: ''
  }),
  getters: {
  },
  actions: {
    setToken (token) {
      this.token = token
    }
  }
})
