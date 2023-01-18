<template>
  <div>
    <form @submit.prevent="save(title,contents)">
       <input v-model="title" type="text" placeholder="title"/>
       <textarea v-model="contents" placeholder="contents"></textarea>
       <hr/>
      <button>btn</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import {watchEffect} from 'vue';
export default {


  // watch , watchEffect 차이점은 watch는 옵션안주면 처음 실행안함
  // watch 는 감시할 객체 선정해야함 watchEfect는 다 감시해서 ... 이건 잘 못 쓴다면 매우 문제일듯 ?
  //   watch, watchEffect의 차이점
  // watch : 특정 데이터가 변경되었을 때 실행, 새로운 데이터와 이전의 데이터를 가져옴 (lazy)
  // watchEffect : 의존성이 있는 데이터에 대해서 즉각적으로 실행 (immediately)

  // watch
  // 특정 반응 속성을 보고 싶거나, old value를 보고 싶을 떄 활용
  // 함수 또는 하나 이상의 반응 속성을 감시할 수 있음
  // reactive 종속성이 변경될 때만 실행됨

  // watchEffect
  // watch의 단순화 버전
  // 함수만을 값으로 가진다.
  // 정의되거나 reactived의 종속성이 변경될 때 즉시 동작한다.
  // 여러 반응 속성을 감시하고 싶고, 이전 값에 신경을 쓰지 않을 때 사용됨
  // computed() hook 처럼 동작한다.
  // 함수 내부에 있는 여러 반응값을 관찰해야 할 때마다 사용하고 그 중 하나가 업데이트 될 때 마다 반응
  setup() {
    const title =ref('');
    const contents =ref('');

    const save =(title, contents) =>{
      console.log(`title ${title}` );
      console.log('contents', contents);
    };
    watchEffect(()=>{
      console.log('watchEffect');
      console.log(title.value);
      console.log(contents.value);
      // save(title.value, contents.value);
    });

    return {title, contents, save};
  },
};
</script>

<style lang="scss" scoped>

</style>
