<template>
  <div>
    <AppCard :title="title">

    </AppCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppCard from './setup/AppCard.vue';
const title = ref('사과');

</script>

<style lang="scss" scoped>

</style>
