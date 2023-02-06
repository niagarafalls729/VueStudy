<template>
  <div class="container py-4">

    <input type="text" ref="inputTAG" />
    <!-- <p>{{ inputTAG }}</p>
    <p>{{ inputTAG.value }}</p>
    <p v-if="inputTAG">{{ inputTAG.value }},{{ $refs.inputTAG.value }}</p> -->
    <!-- <p>{{ $refs.inputTAG.value === inputTAG }},{{ $refs.inputTAG.value === inputTAG.value }}</p> -->
    <hr />
    <!--1번 <li v-for="(fruit, idx) in fruits" :key="idx" ref="itemRefs">{{ idx }}, {{ fruit }}</li> -->
    <!-- 2번 -->
    <ul>

      <li v-for="(fruit, idx) in fruits" :key="idx" :ref="el => itemRefs.push(el.textContent)">
        {{ idx }}, {{ fruit }}
      </li>
    </ul>
    <hr />
    <TemplateRefsChild ref="child"></TemplateRefsChild>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';

export default {
  components: {
    TemplateRefsChild,
  },
  setup() {
    const inputTAG = ref(null);
    console.log('setup', inputTAG.value);
    onMounted(() => {
      inputTAG.value.value = 'hello world!';
      console.log('onMonted', inputTAG.value);

      itemRefs.value.forEach((items) => console.log('ititemsem', items));
      itemRefs.value.forEach((items) => console.log('ititemsem', items.textContent)); // 1번일때는 나옴
      console.log('childe,msg', child.value.msg);
      child.value.sayHello();
    });
    const fruits = ref(['사과', '딸기', '포도']);
    const itemRefs = ref([]);

    const child = ref(null);

    return { inputTAG, fruits, itemRefs, child };
  },
};
</script>
