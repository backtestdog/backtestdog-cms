<template>
  <div>{{ counterStore.name }}</div>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()
</script>

<style></style>
