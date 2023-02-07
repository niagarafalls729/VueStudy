<template>
  <div class="container py-4">
    <button class="btn btn-primary me-2" @click="changeCurrentComp(DynamicApple)">사과</button>
    <button class="btn btn-info" @click="changeCurrentComp(DynamicBanana)">바나나</button>
    <hr />
    <component :is="currentComp"></component>
    <hr />
    <button @click="fnObjChange(obj1)">{{ obj1 }}</button>
    <button @click="fnObjChange(obj2)">{{ obj2 }}</button>

  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';


import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

// 둘다가능
// const currentComp = ref(DynamicApple);
const currentComp = shallowRef(DynamicApple);
const changeCurrentComp = (comp) => (currentComp.value = comp);

const obj1 = ref({ name: '홍길동' });
// 이건 val 이 안바뀌면 재렌더링안함
const obj2 = shallowRef({ name: '홍길동' });

const fnObjChange = (val) => {
  console.log(val);
  return val.name = val.name + '!';
};

</script>

<style lang="scss" scoped>

</style>
