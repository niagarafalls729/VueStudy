<template>
  <h1>reactive</h1>
  <h1>ref는단일객체</h1>
  <h1>{{myRef}}</h1>
  <button v-on:click="Up">myRef Up</button>
  <button v-on:click="Down">myRef Down</button>

  <hr/>
  <h1>reactive는오브젝트</h1>
  <h1>{{myReactive}}</h1>
  <button v-on:click="reactiveUp">myRef Up</button>
  <button v-on:click="reactiveDown">myRef Down</button>


</template>
<script>
import {reactive, ref} from 'vue';

export default {
  setup() {
    const myRef = ref(0);
    const myReactive = reactive({title: 'ㅇㅇㅇㅇ', contents: '333', cnt: 0});

    const Up = ()=> {
      console.log('DD');
      myRef.value++;
    };
    const Down =()=>{
      myRef.value--;
    };

    //* ***************************************//

    const reactiveUp = () =>{
      myReactive.cnt ++;
    };
    const reactiveDown = () =>{
      myReactive.cnt --;
    };

    return {
      myRef, myReactive, Up, Down, reactiveDown, reactiveUp,
    };
  },
};
</script>


