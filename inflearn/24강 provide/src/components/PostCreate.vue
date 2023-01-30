<template>
  <div class="row">

    <div class="col col-2 d-grid">
      <select v-model="type" class="fomr-select">
        <option value="news"> 뉴스</option>
        <option value="notice"> 공지</option>

      </select>
    </div>
    <div class="col col-8"><input v-model="title" type="text" class="form-control"  /></div>
    <div class="col col-2 d-grid"><button class="btn btn-primary" @click="createPostTh">추가</button></div>

    <hr/>

    <hr/>
  </div>
</template>

<script>
import {ref} from 'vue';
export default {
  emits: {
    // createPost명은 emit 으로 넘기는 첫번째 함수명
    createPost: (newPost)=>{
      console.log('emits', newPost);
      if (newPost.title == '') {
        alert('제목입력');

        return false;
      }
      return true;
    },
  },
  setup(props, {emit}) {
    const createPostTh = ()=>{
      const newPost = {
        type: type.value,
        title: title.value,
      };
      emit('createPost', newPost);
      type.value ='news';
      title.value='';
    };
    const title = ref('');
    const type = ref('news');
    return {title, createPostTh, type};
  },
};
</script>

<style lang="scss" scoped>

</style>
