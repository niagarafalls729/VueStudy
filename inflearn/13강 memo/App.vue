<template>

  <div v-once>
  <p>Once</p>
  <p>subscribers :{{ subscribers }}</p>
  <p>views :{{ views }}</p>
  </div>

  <hr/>

  <p>일반</p>
  <p>subscribers :{{ subscribers }}</p>
  <p>views :{{ views }}</p>

  <hr/>
  <div v-memo="[subscribers]">
  <p>memo</p>
  <p>v-memo="[subscribers] 할경우 subscribers 가 업데이트 되야 한번에함</p>
  <p>subscribers :{{ subscribers }}</p>
  <p>views :{{ views }}</p>
</div>
  <hr/>

  <button v-on:click="subscribers++">sub</button>
  <button v-on:click="views++">views</button>
</template>
<script>
import {ref} from 'vue';

export default {
  setup() {
    const subscribers = ref(4000);
    const views = ref(110);
    const likes = ref(40);

    return {
      subscribers, views, likes,
    };
  },
  mounted() {

  },
};
</script>

