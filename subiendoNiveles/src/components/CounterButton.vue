<script setup>
const emit = defineEmits(['increment'])

function handleClick() {
  emit('increment')
}
</script>

<template>
  <button @click="handleClick">Incrementar</button>
</template>