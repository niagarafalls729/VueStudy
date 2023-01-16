<template>
  <h1>test dd</h1>
  <h2>{{ msg }}</h2>
  <h2 v-text="msg"></h2>
  <h2>{{ msg2 }}</h2>
  <h2 v-text="msg2"></h2>
  <hr/>
  <p v-html="htmlStr"></p>
  <button @click="increment">숫자 세기: {{ count }}</button>

  <!-- single element -->
  <span v-once>This will never change: {{msg}}</span>
  <!-- the element have children -->
  <div v-once>
    <h1>comment</h1>
    <p>{{msg}}</p>
  </div>
  <!-- component -->
  <p v-once :comment="msg"></p>
  <!-- `v-for` directive -->
  <ul>
    <li v-for="i in list">일반 : {{i}}</li>
  </ul>
  <ul>
    <li v-for="i in list" v-once>v-once : {{i}}</li>
  </ul>
  <button @click="onceRefChange">onceRefChange</button>
</template>

<script setup>
import {ref, onMounted, reactive} from 'vue';

// 반응적인 상태의 속성
const count = ref(0);
const msg = ref('안녕하세요!');
const msg2 = reactive('안녕하세요!');

const htmlStr = ref('<h1>안녕 P 태그 </h1>');
const list =reactive({title: 'title', contents: '내용'});

// 속성 값을 변경하고 업데이트 할 수 있는 함수.
// eslint-disable-next-line require-jsdoc
function increment() {
  count.value++;
}
// eslint-disable-next-line require-jsdoc
function onceRefChange() {
  list.title= list.title+'z';
  console.log(list.title);
}
// 생명 주기 훅
onMounted(() => {
  console.log(`숫자 세기의 초기값은 ${ count.value } 입니다.`);
});
</script>


