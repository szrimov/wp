<template>
  <div class="error-page">
    <h1>Что-то пошло не&nbsp;так</h1>
    <div>{{ error.statusMessage }}</div>
    <div>{{ error.statusCode }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
const { error } = toRefs(props);
</script>

<style lang="scss" scoped src="./error.scss"></style>
