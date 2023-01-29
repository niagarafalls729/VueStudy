<template>
  <div>
    <button class="btn btn-primary" @click="$emit('createPost','자식의 전달값a','자식의 전달값b','자식의 전달값c')">1번째방법</button>
    <button class="btn btn-primary" @click="createPostSe">2번쨰 방법</button>
    <button class="btn btn-primary" @click="createPostTh">3번쨰 방법</button>
    <hr/>
    <input v-model="title" type="text" class="form-control"  />
    <hr/>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  emits: {
    // createPost명은 emit 으로 넘기는 첫번째 함수명
    createPost: (NewTitle)=>{
      console.log('emits', NewTitle);
      return true;
    },
  },
  setup(props, {emit}) {
    const createPostSe = ()=>{
      // 이렇게하려면 setup(props, context) {
      context.emit('createPost', '자식의 전달값a', '자식의 전달값b', title.value);
    };
    const createPostTh = ()=>{
      emit('createPost', title.value);
    };
    const title = ref('');
    return {createPostSe, title, createPostTh};
  },
};
</script>

<style lang="scss" scoped>

</style>
