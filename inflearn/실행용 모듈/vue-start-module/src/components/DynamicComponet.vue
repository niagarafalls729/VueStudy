
<template>
  <button @click="log">{{ msg }}</button>
  <button @click="log2">{{ msg }}</button>
  <button @click="log3(asdfasdf)">{{ msg }}</button>
  <button @click="log4(asdfasdf)">{{ msg }}</button>
  <hr />
  <component :is="someCondition" />
  <button class="btn btn-primary me-2" @click="changeCurrentComp(Foo)">사과</button>
  <button class="btn btn-info" @click="changeCurrentComp(Bar)">바나나</button>
</template>


<script setup>
import { ref, shallowRef } from 'vue';
import Foo from './Foo.vue';
import Bar from './Bar.vue';
// variable
const msg = 'Hello!';
const asdfasdf = ref('aaa');


// functions
function log() {
  console.log(msg);
}
const log2 = () => {
  console.log(msg);
};
function log3(val) {
  console.log(msg + val);
}
const log4 = (val) => console.log(msg + val);

// 그냥 ref로하면 경고뜸
const someCondition = shallowRef(Foo);
const changeCurrentComp = (comp) => {
  console.log(JSON.stringify(comp));
  someCondition.value = comp;
};
</script>

