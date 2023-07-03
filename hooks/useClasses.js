import { computed } from "vue";

export function useClasses(type) {
  const classes = computed(() => [...type.split(" ")]);
  console.log("classes", classes);

  return {
    classes,
  };
}
