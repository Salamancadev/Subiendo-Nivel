<script setup>
const emit = defineEmits(['close'])

function cerrar() {
  emit('close')
}
</script>

<template>
  <div class="alerta">
    <slot />
    <button @click="cerrar">Cerrar</button>
  </div>
</template>