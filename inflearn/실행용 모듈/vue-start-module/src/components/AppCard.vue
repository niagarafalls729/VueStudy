<!-- eslint-disable max-len -->
<template>
  <div class="card">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <!-- <span class="badge bg-secondary">{{ type=== 'news' ? '뉴스' : '공지사항'}}</span> -->
      <span class="badge bg-secondary">{{ typeName }}</span>

      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text" :class="$style.red">
        {{ contents }}
      </p>
      <!-- <a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
      <a v-else href="#" class="btn btn-outline-danger">좋아요</a> -->
      <a href="#" class="btn" :class="isLikeComputed" @click="toggleLike">좋아요</a>

    </div>

  </div>
</template>

<script>
import {computed} from 'vue';


export default {
  // 이렇게 받으면 위에 처럼 그냥 사용하면됨 . ex {{ title }}
  // setup 1번째 인자로도 받을수있음.
  props: {
    type: {
      type: String,
      default: 'news',
      validator: (value) => {
        return ['news', 'notice'].includes(value);
      },
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    isLike: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['toggleLike'],
  setup(props, context) {
    console.log('setup인자로받기', props);
    const isLikeComputed = computed(() => {
      return props.isLike ? 'btn-danger' : 'btn-outline-danger';
    });
    const typeName = computed(() => {
      return props.type === 'news' ? '뉴스' : '공지사항';
    });
    const toggleLike = () => {
      context.emit('toggleLike');
      console.log('toggleLike의 props', props);
    };
    return {isLikeComputed, typeName, toggleLike};
  },
};
</script>

<style  module>
/* 모듈로하면 위에 클래스 형태로 먹일수있음  */
/* <style module="a">로하면 클래스에 a.red 형식으로.  */
.red {
  color: red;
}
</style>
