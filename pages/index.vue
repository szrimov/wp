<template>
  <section class="content-page wrapper">
    <h2 class="content__title">Bad Map Projection: Liquid Resize</h2>
    <TheControls />
    <div class="conent__comic">Comic</div>
    <div v-for="item in comic" :key="item.id">
      {{ item }}
    </div>
    <TheControls />
  </section>
</template>

<script setup>
import { useComicStore } from "@/store/comicStore";
const { getComic } = useComicStore();
const { data: comic, error: comicError } = await useAsyncData("comic", () =>
  getComic()
);
comicError.value && throwError(comicError.value);
</script>

<style scoped src="./index.scss"></style>
