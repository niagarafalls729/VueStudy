<template>
<div class="card">
  <div  v-if="$slots.header" class="card-header">
    <slot name="header">header기본값</slot>
  </div>
  <div  v-if="$slots.default" class="card-body">
    <slot>기본값</slot>
  </div>
  <div v-if="$slots.footer" class="card-footer text-muted">
    <slot name="footer" child-message="childMsg" hello-message="안녕하ㅔ요">footer기본값</slot>
  </div>
</div>

</template>

<script>
import {ref} from 'vue';

export default {
  setup() {
    const childMsg = ref('footer기본값');
    return {childMsg};
  },
};
</script>

<style lang="scss" scoped>

</style>
