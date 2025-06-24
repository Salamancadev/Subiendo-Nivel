<script setup>
import { ref } from 'vue'
import BaseAlert from '../components/BaseAlert.vue'

const mostrarAlerta = ref(true)
</script>

<template>
    <div>
        <h2>Ejercicio 6 – Componente de alerta reutilizable</h2>
        <BaseAlert v-if="mostrarAlerta" @close="mostrarAlerta = false">
            <p>Este es un mensaje de alerta</p>
        </BaseAlert>
    </div>
</template>

