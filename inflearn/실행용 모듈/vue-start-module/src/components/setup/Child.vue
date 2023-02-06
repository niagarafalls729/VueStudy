<template>
  <div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
const msg = ref('hello!');
const sayHello = () => {
  alert(msg.value);
};
defineExpose({
  // key value
  // msg: msg,
  msg: 'ddd',
  msg2: msg,
  sayHello,
});
</script>

<style lang="scss" scoped>

</style>
