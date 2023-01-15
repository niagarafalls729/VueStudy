<template>
  <h1 v-if="visible">test true</h1>
  <h1 v-else>test false</h1>
  <button v-on:click="visible =!visible">visible =!visible</button>

  <h1>{{type}}</h1>
<hr/>
<h1> V if</h1>
  <h2 v-if="type ==='A'">A 입니다</h2>
  <h3 v-else-if="type ==='B'">B 입니다</h3>
  <h4 v-else-if="type ==='C'">C 입니다</h4>
  <h4 v-else>그외 입니다</h4>


  <hr/>
  <h1> V show</h1>
  <h2 v-show="type ==='A'">A 입니다</h2>

  <h4 v-show="type !=='A'">그외 입니다</h4>

  <hr/>
  <button v-on:click="fun_type">fun_type</button>
</template>
<script>
import {ref} from 'vue';

export default {
  setup() {
    const visible = ref(true);
    const type = ref('A');
    const fun_type = () => {
      console.log('DD');
      if (type.value == 'A') {
        type.value ='B';
      } else if (type.value =='B') {
        type.value ='C';
      } else if (type.value =='C') {
        type.value ='D';
      } else if (type.value =='D') {
        type.value ='A';
      }
    };

    return {
      visible,
      type,
      fun_type,
    };
  },

};
</script>

