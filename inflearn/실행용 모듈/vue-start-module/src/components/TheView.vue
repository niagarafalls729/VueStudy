<template>
  <main>
    <div class="container py-4">
      <Mybtn @click="sayHi" class="cldclclclc" id="dididididdid"></Mybtn>
    </div>
  </main>
</template>

<script>

import Mybtn from './MyBtn.vue';
export default {
  components: {
    Mybtn,
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
