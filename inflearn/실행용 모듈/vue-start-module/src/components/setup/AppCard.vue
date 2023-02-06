
<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary">{{ typeName }}</span>

      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text" :class="$style.red">
        {{ contents }}
      </p>
      <a href="#" class="btn" :class="isLikeComputed" @click="toggleLike(props)">좋아요</a>

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

console.log('setup인자로받기', props);
const isLikeComputed = computed(() => {
  return props.isLike ? 'btn-danger' : 'btn-outline-danger';
});
const typeName = computed(() => {
  return props.type === 'news' ? '뉴스' : '공지사항';
});
const toggleLike = (props) => {
  console.log('toggleLike의 props', props);
  console.log(props.isLike);
  emit('toggleLike');
};

</script>

<style  module>
.red {
  color: red;
}
</style>
