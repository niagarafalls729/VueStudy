<template>
  <h1>test dd</h1>
  {{ 감시값 }}
  <button @click="감시값++">감시값 btn</button>
</template>
<script>
import {ref, watch} from 'vue';

export default {
  setup() {
    const 감시값 = ref(0);
    // 인자명 new는  정해져있음. 주의@___@
    watch(감시값, (새로받은값, 기존값)=>{
      console.log(새로받은값+'/'+기존값);
    });

    return {
      감시값,
    };
  },
};
</script>

