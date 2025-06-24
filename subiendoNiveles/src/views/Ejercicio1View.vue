<script setup>
import { ref } from 'vue'
import CounterButton from '../components/CounterButton.vue'

const count = ref(0)

function incrementar() {
  count.value++
}
</script>

<template>
  <div>
     <h2>Ejercicio 1 – Contador personalizado</h2>
    <CounterButton @increment="incrementar" />
    <p>Contador: {{ count }}</p>
  </div>    
</template>