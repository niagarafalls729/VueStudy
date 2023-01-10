<template>
  <div>
    <!-- <div v-bind:class ="{}"></div> -->
    <!-- class에 - 같은 문자가 들어갈경우 ' 로 감싸줘야함 -->
    <div :class ="{ active: rtnValue , 'text-test' : textValue}">텍스트입니다.</div>
    <button v-on:click="btnToggle">toggle</button>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  setup() {
    const rtnValue = ref(true);
 
    // function btnToggle() {
    //   rtnValue.value ? rtnValue.value = false : rtnValue.value = true;
    // };
    // const btnToggle = function A() {
    //    rtnValue.value ? rtnValue.value = false : rtnValue.value = true;
    // };
    const btnToggle = () => {
      rtnValue.value ? rtnValue.value = false : rtnValue.value = true;
    };
    const textValue = 

    return {rtnValue, btnToggle, textValue};
  },
};
</script>

<style scoped>

.active{
font-weight: 900;

}
</style>
