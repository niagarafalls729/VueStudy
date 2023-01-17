<template>
  <h1>test dd</h1>
  <div>
    <input type="text" @keyup="addTodo"/>
    <ul>
      <li v-for="(todo,index) in todos" :key="index">
         {{ todo.title }} {{ todo }}
      </li>
    </ul>
  </div>
  <button @click="btn"></button>
</template>
<script>
import {reactive, ref} from 'vue';

export default {
  setup() {
    const todos = reactive([
      {title: '1번'},
      {title: '2번'},
      {title: '3번'},
      {title: '4번'},
      {title: '5번'},

    ]);
    const btn = () =>{
      console.log('D');
    };
    const addTodo = (e) => {
      // e.target.value;
      // 이렇게 if 써도 되고 태그 자체에
      // <input type="text" @keyup.enter="addTodo"/>
      // 로도 가능함.

      // ex))) @keyup.ctrl.enter 로 하면 두개 동시에 눌러야 작동함.
      if (e.key ==='Enter') {
        console.log(e.key);
        todos.push({title: e.target.value} );
        e.target.value ='';
        e.target.focus();
      }
    };
    return {
      todos, addTodo, btn,
    };
  },
  mounted() {

  },
};
</script>

