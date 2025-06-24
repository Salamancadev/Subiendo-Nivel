<script setup>
import GrandChild from './GrandChild.vue'

const emit = defineEmits(['deleteItem'])

function reenviarEvento() {
  emit('deleteItem')
}
</script>

<template>
  <div>
    <p>👶 Componente Hijo</p>
    <GrandChild @deleteItem="reenviarEvento" />
  </div>
</template>