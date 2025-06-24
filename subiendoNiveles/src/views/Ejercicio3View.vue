<script setup>
import { ref } from 'vue'
import TextInput from '../components/TextInput.vue'

const nombre = ref('')
</script>

<template>
    <div>
        <h2>Ejercicio 3 – Componente de formulario con v-model</h2>
        <TextInput v-model="nombre" />
        <p>Nombre ingresado: {{ nombre }}</p>
    </div>
</template>