
<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary">{{ typeName }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text" :class="$style.red">
        {{ contents }}
      </p>
      <a href="#" class="btn" :class="isLikeComputed" @click="toggleLike">{{ isLike }}좋아요</a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
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
});
const emit = defineEmits(['toggleLike']);

console.log('자식: setup인자로받기', props.isLike);

const toggleLike = () => {
  emit('toggleLike');
  console.log('자식: toggleLike의 props', props.isLike);
};

const isLikeComputed = computed(() => {
  console.log('자식: computed prpos.isLike', props.isLike);
  return props.isLike ? 'btn btn-info' : 'btn-outline-danger';
});

const typeName = computed(() => props.type === 'news' ? '뉴스' : '공지사항');

</script>

<style  module>
.red {
  color: red;
}
</style>
