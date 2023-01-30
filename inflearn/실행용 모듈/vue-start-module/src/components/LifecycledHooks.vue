<template>
  <div class="container py-4">
    <input type="text" ref="inputTAG" value="hello!!!" />
    <hr />
    <p>{{ visible }}</p>
    <button @click="visible = !visible">toggle</button>
    <LifecycleChild v-if="visible"></LifecycleChild>
    <p>{{ CNT }}</p>
    <button @click="CNT++;">CNT++</button>
    <!-- <p ref="MSG" v-bind:value="MSG"></p> -->
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';
export default {
  components: { LifecycleChild },
  setup() {
    console.log('1 setup');
    const inputTAG = ref(null);
    const CNT = ref(1);
    const MSG = ref('');
    const visible = ref(false);
    onBeforeMount(() => {
      console.log('4 onBeforeMount' + inputTAG.value);
    });
    onMounted(() => {
      console.log('5 onMounted' + JSON.stringify(inputTAG.value._value));
    });
    onBeforeUpdate(() => {
      console.log('  onBeforeUpdate', CNT.value);
    });
    onUpdated(() => {
      console.log('  onUpdated', CNT.value);
    });


    return { inputTAG, CNT, MSG, visible };
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
