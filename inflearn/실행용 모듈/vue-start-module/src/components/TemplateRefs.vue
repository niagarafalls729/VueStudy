<template>
  <div class="container py-4">

    <input type="text" ref="inputTAG" />
    <p>{{ inputTAG }}</p>
    <p>{{ inputTAG.value }}</p>
    <p v-if="inputTAG">{{ inputTAG.value }},{{ $refs.inputTAG.value }}</p>
    <p>{{ $refs.inputTAG.value === inputTAG }},{{ $refs.inputTAG.value === inputTAG.value }}</p>

  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    const inputTAG = ref(null);
    console.log('setup', inputTAG.value);
    onMounted(() => {
      inputTAG.value.value = 'hello world!';
      console.log('onMonted', inputTAG.value);
    });

    return { inputTAG };
  },
};
</script>
