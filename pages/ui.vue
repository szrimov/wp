<template>
  <div>
    <div class="buttons">
      <TheButton>1</TheButton>
      <TheButton type="secondary icon">
        <IconsStepArrow />
      </TheButton>
      <TheButton type="rounded icon">
        <IconsRewindArrow />
      </TheButton>
      <TheButton type="rounded icon icon--rotate">
        <IconsRewindArrow />
      </TheButton>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  flex-direction: column;
  max-width: 10%;
}
</style>
