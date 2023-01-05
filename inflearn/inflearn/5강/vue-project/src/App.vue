<template>
  <h1>탬플릿 문법</h1>
  <h2>{{msg}}</h2>
  <p v-once>{{msg}}</p>
  <button v-on:click="nnn">btn</button>



  <hr>
  <p>{{rowHTML}}</p>
  <p v-html="rowHTML"></p>
  <hr>
  <div title="안녕하세요 ">마우스를 올려보세요</div>
  <div v-bind:title="DynamicTitle" v-on:mouseover="mover">마우스를 올려보세요</div>
  <input type="text" v-bind:value="able" v-bind:disabled="able"/>
  <button v-on:click="ableBool">able Test</button>

  <hr>
  <!--오브젝트 형식으로 넣는것도 가능.-->
  <input v-bind="obj"/>
  <hr>
  <h2>JS</h2>
  {{msg.split('')}}
  {{ able ? '예' : '아니오'}} 

</template>

<script>
  
import {ref } from 'vue';

export default { 
  setup() {
    //const count = ref(0)
    const msg = ref( ' 안녕하세요 ! ' );
    const rowHTML = ref('<strong>안녕하세요 </strong>');
    const DynamicTitle = ref("안녕하세여!");
    const able = ref(true);
    const obj = ref({
      type: 'text',
      value: '234',

    });
    return {
      msg  ,
      rowHTML,
      DynamicTitle,
      able,
      obj,
    }
  },
  mounted() {
  },
  methods: {
    ableBool(){
      console.log("DD")
      this.able == true ? this.able = false : this.able = true;

    },
    mover(){
      this.DynamicTitle = this.DynamicTitle + " 1 ";
    },
    nnn() {
         this.msg = this.msg + " :: ! ";
      },
  }
}
</script>

