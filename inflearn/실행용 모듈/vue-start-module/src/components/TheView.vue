<template>
  <main>
    <div class="container py-4">
      <div class="row g-3">
        <div class="col"><AppCard></AppCard></div>
        <div class="col"><AppCard></AppCard></div>
        <div class="col"><AppCard></AppCard></div>
        <div class="col"><AppCard></AppCard></div>
        <div class="col"><AppCard></AppCard></div>
        <div class="col"><AppCard></AppCard></div>
      </div>
    </div>
  </main>
</template>

<script>
import AppCard from "./AppCard.vue";

export default {
  components: {
    AppCard,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
