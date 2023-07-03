<template>
  <a
    v-if="href"
    role="button"
    :class="[buttonClasses, { disabled }]"
    :href="href"
    :target="target"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    class="button-component"
  >
    <slot></slot>
  </a>
  <NuxtLink
    v-else-if="to"
    role="button"
    :to="to"
    :class="[buttonClasses, { disabled }]"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    class="button-component"
  >
    <slot></slot
  ></NuxtLink>
  <button
    v-else
    :type="native"
    role="button"
    :class="[buttonClasses, { disabled }]"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    :disabled="disabled"
    class="button-component"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { toRefs } from "vue";
import { useClasses } from "@/hooks/useClasses";

const props = defineProps({
  type: {
    type: String,
    default: () => "primary",
  },
  native: {
    type: String,
    default: "button", // button, submit, confirm
  },
  // Значение атрибута href (только для ссылок с тегом "a")
  href: {
    type: String,
    default: undefined,
  },
  // Значение атрибута to (только для ссылок с тегом "nuxt-link")
  to: {
    type: String,
    default: undefined,
  },
  // Значение атрибута target (только для ссылок с тегом "a")
  target: {
    type: String,
    default: "_blank", // _blank, _self
  },
  // Состояние неактивности
  disabled: Boolean,
});
const emit = defineEmits(["click"]);
const { disabled, type } = toRefs(props);
const { classes } = useClasses(type.value);
const buttonClasses = computed(() =>
  classes.value.map((el) => `button-type-${el}`)
);
const click = (e) => !disabled && $emit("click", e);
</script>

<style lang="scss" scoped src="./index.scss"></style>
