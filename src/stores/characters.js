import { defineStore } from 'pinia'

const NAMESPACE = 'characters'

export const useAlertsStore = defineStore(NAMESPACE,() => {
    const count = ref(0)
    function increment() {
      count.value++
    }
  
    return { count, increment }
  })