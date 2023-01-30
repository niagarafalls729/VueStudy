<template>
  <div>

  </div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue';
export default {
  setup() {
    console.log('[child~] setup');
    onBeforeMount(() => {
      console.log('[child~] onBeforeMount');
    });
    onMounted(() => {
      console.log('[child~] onMounted');
    });
    return {};
  },
};
</script>

<style lang="scss" scoped>

</style>
