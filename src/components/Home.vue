<template>
  <div>{{ count }}</div>
  <button @click="increment">點擊加一</button>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()

const { count } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<style></style>
