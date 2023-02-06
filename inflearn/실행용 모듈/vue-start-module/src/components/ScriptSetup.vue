<template>
  <main>
    <div class="container py-4">

      <div class="row g-3">
        <div v-for="(post, idx) in posts" :key=post.id class="col">
          <AppCard :title="post.title" :contents="post.contents" :type="post.type" :is-like="post.isLike"
            @toggleLike="toggleLikeOfSun(post)">
          </AppCard>
          <!-- 부모에서는 값 바뀐경우 자식에서 값 재렌더링 되나 자식에서 부모는안됨  -->
          <button @click="post.isLike = !post.isLike">toggle</button>

        </div>

      </div>
    </div>
    <hr />
    <Child ref="child"></Child>
    <template v-if="child">{{ child.msg }} </template>
    <template v-if="child">{{ child.msg2 }} </template>
    <hr />
  </main>
</template>

<script setup>
import AppCard from './setup/AppCard.vue';
import Child from './setup/Child.vue';
import axios from 'axios';
import { ref } from 'vue';
const toggleLikeOfSun = (post) => {
  console.log('부모: post.isLike', post.isLike);
  post.isLike = !post.isLike;
};
const posts = ref([
  { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
  { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
  { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
]);

const child = ref('');
console.log(child.value);
const response = await axios('https://dummy.restapiexample.com/api/v1/employees');
console.log(response);

</script>

<style lang="scss" scoped>

</style>
