<script lang="ts">
export default {};
</script>

<template>
  <div class="home-page-container">
    <p class="home-page-top-text title-text">A web game like werewolf, but nsfw.</p>
  </div>
</template>

<style scoped>
.home-page-top-text {
  color: var(--var-font-color);
  line-height: 60px;
  padding: 15px;
  font-size: 35px;
  text-align: center;
}

.home-page-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: FadeIn 450ms;
}
</style>
