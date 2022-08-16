<script setup lang="ts">
import { useWasmStore } from '~/store/wasm'

const goWasm = useWasmStore()
</script>

<template>
  <div>
    <p>go-wasm-vitesse</p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
