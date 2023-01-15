<template>
  <h1>reactive</h1>
    <ul>
      <template v-for="aa in items" :key=aa.id>
      <li v-if="aa.id % 2=== 0">
        {{ aa.id +'/'+aa.message }}
      </li>
    </template>
    </ul>

    <hr/>

    <h1>computed</h1>
    <ul>
      <template v-for="bb in itemsComputed" :key=bb.id>
      <li v-if="bb.id % 2=== 0">
        {{ bb.id +'/'+bb.message }}
      </li>
    </template>
    </ul>

    <hr/>
</template>
<script>
import {reactive, computed} from 'vue';

export default {
  setup() {
    const items = reactive([
      {id: 1, message: 'java'},
      {id: 2, message: 'CSS'},
      {id: 3, message: 'JS'},
      {id: 4, message: 'react'},

    ]);
    // const itemsComputed = computed(() => items.filter((bb) => bb.id % 2 ===0));
    const itemsComputed = computed(() =>{
      // items.filter((bb) => console.log(bb.id));
      items.filter((bb) => {
        return console.log(bb.id);
      });
      return items.filter((bb) => bb.id % 2 ===0 );
    });
    return {
      items,
      itemsComputed,
    };
  },
};
</script>

