<template>
  <h1>test dd</h1>
  <h1>{{ x }}</h1>
  <h1>{{ y }}</h1>

  <button @click="x++; y++;">btn</button>
  <hr/>

  <h1>{{ obj.cnt }}</h1>

  <button @click="obj.cnt++">btn</button>

</template>
<script>
import {ref, watch} from 'vue';
import {reactive} from 'vue';

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    // watch(watchVal, (새로받은값, 기존값)=>{
    //   console.log(새로받은값+'/'+기존값);
    // });
    // watch(
    //     ()=>x.value+y.value,
    //     (sum, oldValue)=>{
    //       console.log('sum ', sum);
    //       console.log('oldValue ', oldValue);
    //     },
    // );
    // watch(
    //     ()=>{
    //       return x.value+y.value;
    //     },
    //     (sum, oldValue)=>{
    //       console.log('sum ', sum);
    //       console.log('oldValue ', oldValue);
    //     },
    // );
    // watch(
    //     function() {
    //       return x.value+y.value;
    //     },
    //     (sum, oldValue)=>{
    //       console.log('sum ', sum);
    //       console.log('oldValue ', oldValue);
    //     },
    // );
    // watch(
    //     function() {
    //       return x.value+y.value;
    //     },
    //     (sum, oldValue)=>{
    //       console.log('sum ', sum);
    //       console.log('oldValue ', oldValue);
    //     },
    // );
    // 감시인자 , 그다음 새로운값, 올드값
    watch([x, y], ([newX, newY], [oldX, oldY] )=>{
      console.log('new' + newX, newY);
      console.log('old' + oldX, oldY);
    });

    const obj = reactive({
      cnt: 0,
    });
    // 여기서는 new , old 같음 왜냐하면 같은 객체를 감시하니깐.
    watch(obj, (newObj, oldObj)=>{
      console.log('new' + JSON.stringify(newObj));
      console.log('old' + JSON.stringify(oldObj));
    });
    // obj 형식에서 따로 하나의 key 값만 감시하고 싶다면 이렇게
    watch(()=>obj.cnt, (newObj, oldObj)=>{
      console.log('new' + JSON.stringify(newObj));
      console.log('old' + JSON.stringify(oldObj));
    });

    return {x, y, obj};
  },
  methods: {

  },
};
</script>

