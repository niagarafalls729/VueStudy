<template>
  <div class="container py-4">
    <input type="text" ref="inputTAG" value="hello!!!" />
    <LifecycleChild></LifecycleChild>
    <p>{{ CNT }}</p>
    <button @click="CNT++;">CNT++</button>
    <!-- <p ref="MSG" v-bind:value="MSG"></p> -->
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';
export default {
  components: { LifecycleChild },
  setup() {
    console.log('1 setup');
    const inputTAG = ref(null);
    const CNT = ref(1);
    const MSG = ref('');
    onBeforeMount(() => {
      console.log('4 onBeforeMount' + inputTAG.value);
    });
    onMounted(() => {
      console.log('5 onMounted' + JSON.stringify(inputTAG.value._value));
    });
    onBeforeUpdate(() => {
      console.log('  onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('  onUpdated');
    });
    return { inputTAG, CNT, MSG };
  },
  beforeCreate() {
    console.log('2 beforeCreate');
  },
  created() {
    console.log('3 created');
  },

};
</script>

<style lang="scss" scoped>

</style>
