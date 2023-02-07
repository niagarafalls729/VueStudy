<template>
  <div>
    <AppCard :title="title">

    </AppCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppCard from './setup/AppCard.vue';
const title = ref('바나나');

</script>

<style lang="scss" scoped>

</style>
