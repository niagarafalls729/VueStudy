<template>
  <h1>test dd</h1>
  <div id="modifiers">
    <div @click="spanDiv">
      DIV 영역
        <p @click="spanP">p영역
          <span @click.stop="spanCK('span',$event)">span 태그 </span>
          <span @click="spanCK('span',$event)">span 이벤트 </span>
          <span @click="spanCK2('span',$event)">span 버블효과</span>
          <a href ="https://naver.com" @click="spanA">naver 버블</a>
          <a href ="https://naver.com" @click.prevent.stop="spanA">naver 버블</a>
        </p>
    </div>
    <a href ="https://naver.com" @click.prevent="spanA2" > naver</a>
  </div>

</template>
<script>
import {ref} from 'vue';

export default {
/* stop 을 안하면 ck 이벤트 타면서 다 탐 */
/* - `.stop` = `e.stopPropagation()` 상위 이벤트 막기 버블 효과 제거 .
- `.prevent` = `e.preventDefault()` 기본기능막기
- `.capture` = 캡처 모드를 사용할 때 이벤트 리스너를 사용 가능합니다.
- `.self` = 오로지 자기 자신만 호출할 수 있다. 즉, 타깃요소가 `self`일 때 발동된다.
- `.once` = 해당 이벤트는 **한 번만** 실행된다.
- `.passive` = 일반적으로 **[모바일 장치의 성능을 개선](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners)** 하기 위해 터치 이벤트 리스너와 함께 사용됩니다
.*/
  setup() {
    const spanDiv = ( ) =>{
      console.log('spanDiv');
      location.href='https://naver.com';
    };
    const spanP = () =>{
      console.log('spanP');
    };
    const spanCK =(msg, event)=>{
      console.log('spanCK');
      event.stopPropagation();
    };
    const spanCK2 =(msg, event)=>{
      console.log('spanCK');
    };
    const spanA =(msg, event)=>{
      console.log('spanA');
    };
    const spanA2 =(msg, event)=>{
      console.log('spanA2');
    };
    return {
      spanDiv, spanP, spanCK, spanCK2, spanA2, spanA,
    };
  },
  mounted() {

  },
};
</script>
<style scoped>
  #modifiers div,
  #modifiers p,
  #modifiers span,
  #modifiers div {
    background-color: red;
  }
  #modifiers p {
    background-color: blue;
  }
  #modifiers span {
    background-color: yellow;
    display: block
  }
</style>

