<template>
  <div>
    {{ msg }}
    <button @click="sayHello">BTN</button>
    <hr />
    <p>{{ message }}</p>
    <input type="text" v-model="message" />
    <AppCard type="news" title="제모옥" contents="sodydhd" isLike='false'></AppCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppCard from './setup/AppCard.vue';
console.log('hello world');
const msg = 'hello world';
const message = ref('');
const sayHello = () => {
  alert('helloWOlrd');
};
const toggleLike = (post) => {
  console.log('부모값의 post.isLike', post.isLike);
  post.isLike = !post.isLike;
};
</script>

<style lang="scss" scoped>

</style>
