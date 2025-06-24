<script setup>
const emit = defineEmits(['confirm', 'cancel'])

function aceptar() {
  emit('confirm')
}

function cancelar() {
  emit('cancel')
}
</script>

<template>
  <div class="modal">
    <p>¿Estás seguro?</p>
    <button @click="aceptar">Aceptar</button>
    <button @click="cancelar">Cancelar</button>
  </div>
</template>