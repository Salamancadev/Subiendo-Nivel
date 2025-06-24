<script setup>
const emit = defineEmits(['deleteItem'])

function eliminar() {
  emit('deleteItem')
}
</script>

<template>
  <button @click="eliminar">🧒 Eliminar desde el nieto</button>
</template>