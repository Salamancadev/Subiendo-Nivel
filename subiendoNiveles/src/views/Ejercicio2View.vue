<script setup>
import { ref } from 'vue'
import ItemCard from '../components/ItemCard.vue'

const items = ref([
  { id: 1, name: 'Item A' },
  { id: 2, name: 'Item B' },
  { id: 3, name: 'Item C' },
])

function eliminarItem(id) {
  items.value = items.value.filter(item => item.id !== id)
}
</script>

<template>
    <div>
        <h2>Ejercicio 2 – Eliminar elemento de una lista</h2>
        <ItemCard v-for="item in items" :key="item.id" :id="item.id" :name="item.name" @delete="eliminarItem"/>
    </div>

</template>