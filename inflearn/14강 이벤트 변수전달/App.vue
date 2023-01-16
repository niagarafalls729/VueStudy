<template>
  <h1>test dd</h1>
  <button @click="printEventInfo('Hello Vue3',$event)">inline Handler</button>

  <hr/>
  <!-- keyup 이벤트는 전달못하는듯 ? -->
  <!-- <input type="text" @keyup="onKeyUpEvent('keyUp',$keyUpEvent)"/>  -->

  <input type="text" @keyup="onKeyUpEvent"/>
</template>
<script>
import {ref} from 'vue';

export default {
  setup() {
    const printEventInfo = (message, event ) =>{
      console.log('message', message);
      console.log('event.target', event.target);
      console.log('event.target.tagName', event.target.tagName);
    };
    const onKeyUpEvent = ( event ) =>{
      console.log('event.target', event.target);
      console.log('event.target', event.target.value);
      console.log('event.target.tagName', event.target.tagName);
    };
    return {
      printEventInfo, onKeyUpEvent,
    };
  },
  mounted() {

  },
};
</script>


