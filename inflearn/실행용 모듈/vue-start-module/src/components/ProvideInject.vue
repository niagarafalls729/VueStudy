<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">provide Inject Header</div>
      <div class="card-body">
        <Child></Child>
      </div>
      <button @click="fnBTN">provide BTN</button>
    </div>

  </div>
</template>

<script>
import { provide, ref } from 'vue';
import Child from './Child.vue';

export default {
  components: { Child },
  setup() {
    const staticMSG = ref('static$$$');
    const MSG = ref('MSG');
    const count = ref(10);

    const updateStaticMSG = (newStaticMSG) => {
      console.log('DD' + newStaticMSG);
      return staticMSG.value = newStaticMSG;
    };

    provide('provide-key-staticMSG', { staticMSG, updateStaticMSG });


    provide('provide-key-MSG', MSG);
    provide('provide-key-count', count);

    const fnBTN = () => {
      count.value++;
    };
    return { count, fnBTN };
  },
};
</script>

<style lang="scss" scoped>

</style>
