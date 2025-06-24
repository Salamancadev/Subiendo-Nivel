<script setup>
import { ref } from 'vue'
import Child from '../components/Child.vue'

const mensaje = ref('Esperando evento...')
function manejarDelete() {
  mensaje.value = '🧨 Evento recibido en el padre desde el nieto'
}
</script>

<template>
  <div>
    <h2>Ejercicio 5 – Comunicación Nieto → Padre</h2>
    <Child @deleteItem="manejarDelete" />
    <p>{{ mensaje }}</p>
  </div>
</template>