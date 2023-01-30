<template>
  <main>
    <div class="container py-4">
      <PostCreate @createPost="fn_createPost"></PostCreate>
      <hr/>
      <div class="row g-3">
        <div v-for="(post, idx) in posts" :key=post.id class="col">
          <PostItem :title="post.title" :contents="post.contents" :type="post.type" :is-like="post.isLike"
            @toggleLike="toggleLikeOfSun(post)">
          </PostItem>
          <!-- 부모에서는 값 바뀐경우 자식에서 값 재렌더링 되나 자식에서 부모는안됨  -->
          <button @click="post.isLike = !post.isLike">toggle</button>

        </div>

      </div>
      <hr/>
      <!--클래스는 자식 클래스와 합처짐-->
      <LabelInput
      v-model="userName"
      label="이름z"
      class="parent-class"
      style="color: red"
      id="parent-id"></LabelInput>
    </div>
  </main>
</template>

<script>
import PostItem from './PostItem.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import Mybtn from './MyBtn.vue';
import {reactive, ref} from 'vue';
export default {
  components: {
    PostItem, PostCreate, LabelInput, Mybtn,
  },

  setup() {
    // 이렇게 자식에서 부모로 값 전달가능함
    // 여기서 존나 웃긴게 react였다면 개쌉지랄할텐데 객체 그냥 넘겨봤는데 그 객체만 잘 변경됨
    const toggleLikeOfSun = (post) => {
      console.log('부모값의 post.isLike', post.isLike);
      post.isLike = !post.isLike;
    };
    const posts = reactive([
      {id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news'},
      {id: 2, title: '제목2', contents: '내용2', isLike: false, type: 'news'},
      {id: 3, title: '제목3', contents: '내용3', isLike: false, type: 'news'},
      {id: 4, title: '제목4', contents: '내용4', isLike: false, type: 'notice'},
      {id: 5, title: '제목5', contents: '내용5', isLike: true, type: 'notice'},
    ]);

    const fn_createPost = (자식에게전달받은값1, 자식에게전달받은값2, 자식에게전달받은값3)=>{
      console.log('DDDDDD'+JSON.stringify(자식에게전달받은값1));
      자식에게전달받은값1.contents = '';
      자식에게전달받은값1.isLike = false;

      const max = posts.reduce((previous, current) => {
        return previous.id > current.id ? previous.id:current.id;
      });
      console.log('max', max+1);
      // 자식에게전달받은값1.id = posts.id.max;
      자식에게전달받은값1.id = max+1;
      posts.push(자식에게전달받은값1);
    };
    const userName = ref('');
    // eslint-disable-next-line camelcase
    return {posts, toggleLikeOfSun, fn_createPost, userName};
  },
};
</script>

<style lang="scss" scoped>

</style>
