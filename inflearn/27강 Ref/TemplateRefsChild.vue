<template>
  <div>
    <!-- <h1>TemplateRefsChild {{ $parent }}</h1> -->

    <ul>
      <li v-for="fruit in $parent.fruits" :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const msg = ref('hello!~~!~@');
    const sayHello = () => {
      alert('msg.value', msg.value);
    };
    return { msg, sayHello };
  },
};
</script>

<style lang="scss" scoped>

</style>
