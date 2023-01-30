<template>
  <main>
    <div class="container py-4">
      <Mybtn @click="sayHi" class="cldclclclc" id="dididididdid"></Mybtn>
      <LabelInput label="이름" label1="label1"></LabelInput>
    </div>
  </main>
</template>

<script>

import LabelInput from './LabelInput.vue';
import Mybtn from './MyBtn.vue';

export default {
  components: {
    Mybtn, LabelInput,
  },

  setup() {
    const sayHi = () => {
      console.log('hi');
    };
    return {sayHi};
  },
};
</script>

<style lang="scss" scoped>

</style>
