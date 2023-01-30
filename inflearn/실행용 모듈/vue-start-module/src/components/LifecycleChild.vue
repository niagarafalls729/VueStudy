<template>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';
export default {
  setup() {
    console.log('[child~] setup');
    onBeforeMount(() => {
      console.log('[child~] onBeforeMount');
    });
    onMounted(() => {
      console.log('[child~] onMounted');
    });
    onBeforeUnmount(() => {
      console.log('[child~] onBeforeUnmount');
    });
    onUnmounted(() => {
      console.log('[child~] onUnmounted');
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
