<template>
  <div>
    <h1>dd1</h1>
    <h2>{{teacher.name}}</h2>
    <p>{{teacher.lectures.length > 0 ? '있음': '없음'}}</p>
    <p>{{hasLecture}}</p>
    <p>{{existLecture()}}</p>
    <hr/>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>

import {reactive, computed, ref} from 'vue';
export default {
  setup() {
    const teacher = reactive({
      name: '김지수',
      lectures: ['HTML', 'CSS', 'JS'],
      // lectures: [],
    });

    // const hasLecture = computed() => {teacher.lectures.length > 0 ? 'Yes' : 'No';}

    const hasLecture = computed(() => {
      return teacher.lectures.length > 0 ? 'Yes' : 'No';
    });
    // 함수로 선언가능
    const existLecture = () =>{
      return teacher.lectures.length > 0 ? 'Yes' : 'No';
    };

    const firstName = ref('kim');
    const lastName = ref('jisu');

    // const fullName = computed(()=>{
    //   return firstName.value + ' / ' + lastName.value;
    // });
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value;
      },
      set(value) {
        console.log('SET value', value.split(' '));
        // 구조분해 할당.
        [firstName.value, lastName.value] = value.split(' ');
      },
    });

    console.log('console 출려력', fullName.value.split(' '));

    fullName.value = '지수 김';


    return {
      teacher,
      hasLecture,
      existLecture,
      fullName,
    };
  },

};
</script>

<style lang="scss" scoped>
</style>
