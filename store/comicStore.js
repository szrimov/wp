import { defineStore } from "pinia";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const useComicStore = defineStore("comicStore", () => {
  const getComic = async () => await $fetch(url);
  return {
    getComic,
  };
});
