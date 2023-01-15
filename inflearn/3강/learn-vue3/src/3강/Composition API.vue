<template>
  <div>
    <h1>Composition API</h1>
    <button v-on:click="increment()">Counter: {{ counter }}</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const counter = ref(1);

    const increment = () => {
      console.log("DDD");
      return counter.value++;
    };

    onMounted(() => {
      console.log("애플리케이션이 마운트 되었습니다!");
    });

    return {
      counter,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>
