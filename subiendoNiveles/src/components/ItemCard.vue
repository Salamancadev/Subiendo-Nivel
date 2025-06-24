<script setup>
const props = defineProps(['id', 'name'])
const emit = defineEmits(['delete'])

function handleDelete() {
  emit('delete', props.id)
}
</script>

<template>
  <div>
    <span>{{ name }}</span>
    <button @click="handleDelete">Eliminar</button>
  </div>
</template>