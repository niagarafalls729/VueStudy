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
import { provide, ref, computed } from 'vue';
import Child from './Child.vue';

export default {
  components: { Child },
  setup() {
    const staticMSG = ref('Provide=static$$$');
    const MSG = ref('Provide=MSG');
    const count = ref(10);

    const updateStaticMSG = (newStaticMSG) => {
      console.log('updateStaticMSG');
      myVal.value = newStaticMSG;
      return staticMSG.value = newStaticMSG;
    };

    const fnBTN = () => {
      count.value++;
    };
    const myVal = computed({
      get: () => {
        return staticMSG;
      },
      set: (val) => {
        console.log('val', val);
        staticMSG.value = val;
      },
    });
    provide('myVal-key', myVal);

    provide('provide-key-staticMSG', { staticMSG, updateStaticMSG });
    provide('provide-key-MSG', MSG);
    provide('provide-key-count', count);

    return { count, fnBTN, myVal };
  },
};
</script>

<style lang="scss" scoped>

</style>
