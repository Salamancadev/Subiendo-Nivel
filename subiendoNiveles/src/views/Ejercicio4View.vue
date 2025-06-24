<script setup>
import { ref } from 'vue'
import ConfirmDialog from '../components/ConfirmDialog.vue'

const mostrarModal = ref(false)

function confirmar() {
  alert('Confirmado')
  mostrarModal.value = false
}

function cancelar() {
  alert('Cancelado')
  mostrarModal.value = false
}
</script>

<template>
    <div>
        <h2>Ejercicio 4 – Confirmar acción con componente hijo</h2>
        <button @click="mostrarModal = true">Eliminar</button>
        <ConfirmDialog v-if="mostrarModal" @confirm="confirmar" @cancel="cancelar"/>
    </div>
</template>