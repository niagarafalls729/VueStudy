<template>
  <h1>양방향 바인딩</h1>
  <!--단방향 -->
  <input
    type="text"
    :value="inputVal"
    @input="
      (e) => {
        inputVal = e.target.value;
      }
    "
  />
  <div>inputVal : {{ inputVal }}</div>

  <hr />
  <!--양방향 -->
  <input type="text" v-model="inputVal2" />
  <div>inputVal2 : {{ inputVal2 }}</div>

  <hr />
  <textarea :value="textArea">{{ textArea }}</textarea>
  <textarea
    :value="textArea"
    @keyup="
      (e) => {
        textArea = e.target.value;
      }
    "
    >{{ textArea }}</textarea
  >
  <div>{{ textArea }}</div>
  <hr />
  <textarea v-model="textArea2">{{ textArea2 }}</textarea>
  <div>{{ textArea2 }}</div>

  <hr />
  <label for="chkVal">{{ chkVal }}</label
  ><br />
  <!--단방향-->
  <input
    type="checkbox"
    :checked="chkVal"
    @change="
      (e) => {
        chkVal = e.target.checked;
      }
    "
  />
  <!--양방향-->
  <input type="checkbox" v-model="chkVal" />

  <hr />
  {{ radioVal }}
  <label>
    <input
      type="radio"
      value="O"
      :checked="radioVal === 'O'"
      v-on:change="
        (e) => {
          radioVal = e.target.value;
        }
      "
    />
    O형
  </label>
  <label>
    <input
      type="radio"
      value="A"
      :checked="radioVal === 'A'"
      v-on:change="
        (e) => {
          radioVal = e.target.value;
        }
      "
    />
    A형
  </label>

  <hr />

  <label>
    <input type="radio" v-model="radioVal" :value="'O'" />
    O
  </label>
  <label>
    <input type="radio" v-model="radioVal" :value="'A'" />
    A
  </label>

  <hr/>
  <p>{{ selectVal }}</p>
  <select v-model="selected" @change="(e)=>{selectVal = e.target.value}">

  <!-- 인라인 객체 리터럴 -->
  <option :value="aa.value" v-for="(aa, index) in selectReactive" key="index" >{{aa.title}}</option>
  </select>

  <h2>chk 다중 {{ chkMVal }}</h2>
<!--이거 존나웃긴게 ref로해야함, 이유는 에러같은데 모름. 어떤색히가 홈페이지에 글올린거봄.-->

  <input type="checkbox" value="HTML"  v-model="chkMVal" v-on:change="(e)=>{chkMVal.push(e.target.value)}"/>
  <input type="checkbox" value="CSS" v-model="chkMVal"/>
  <input type="checkbox" value="JS" v-model="chkMVal"/>
</template>
<script>
import {ref} from 'vue';
import {reactive} from 'vue';
export default {
  setup() {
    const inputVal = ref(null);
    const inputVal2 = ref(null);
    const textArea = ref(null);
    const textArea2 = ref(null);
    const chkVal = ref(true);
    const radioVal = ref('O');
    const chkMVal = reactive([]);
    const selectVal = ref(null);

    const selectReactive = reactive([
      {title: 1, value: 'ㄱ'},
      {title: 2, value: 'ㄴ'},
      {title: 3, value: 'ㄷ'},
      {title: 4, value: 'ㄹ'},
    ]);
    return {
      inputVal,
      inputVal2,
      textArea,
      textArea2,
      chkVal,
      radioVal,
      selectReactive,
      selectVal, chkMVal,
    };
  },
};
</script>

