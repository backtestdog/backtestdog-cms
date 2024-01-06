import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

type CounterState = {
  count: Ref<number>
  doubleCount: () => number
  increment: () => void
}

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = () => {
    return count.value * 2
  }

  const increment = () => {
    count.value++
  }

  return { count, doubleCount, increment } as CounterState
})
