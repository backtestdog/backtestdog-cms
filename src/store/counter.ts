import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = () => {
    return count.value * 2
  }

  const increment = () => {
    count.value++
  }

  return { count, doubleCount, increment }
})
