<template>
  <div>{{ count }}</div>
  <button @click="increment">點擊加一</button>
</template>

<script setup lang="ts">
import { type Ref } from 'vue'
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

type CounterStore = {
  count: Ref<number>
  doubleCount: () => number
  increment: () => number
}

const counterStore: CounterStore = useCounterStore()

const { count } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<style></style>
