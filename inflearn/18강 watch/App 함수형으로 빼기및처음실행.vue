<template>

  <h1>{{ msg }}</h1>
  <h1>{{ reMsg }}</h1>

  <button @click="msg=msg+'!'">btn</button>
</template>
<script>
import {ref} from 'vue';
import {watch} from 'vue';

export default {
  setup() {
    const msg = ref('hello vue3');
    const reMsg = ref('');
    watch(msg, (newV, oldV)=>{
      console.log('--------------------기존 -----------------');
      console.log(newV);
      console.log(oldV);
      reMsg.value =newV.split('').reverse().join('');
      console.log('--------------------기존 -----------------');
    },
    // 세번째 객체로 immediate를 true 로 할경우 처음 한번 실행함
    {
      immediate: true,
    },
    );
    // new,old를 함수로 만들어서 빼도 됨
    const newAndOld= (newV, oldV)=>{
      console.log('--------------------함수형 -----------------');
      console.log(newV);
      console.log(oldV);
      console.log('--------------------함수형 -----------------');
    };
    watch(msg, newAndOld);

    return {
      msg, reMsg,
    };
  },
};
</script>

