<template>
  <div>{{ message }}</div>
  <hr/>
  <!-- <div>{{ messageRef }}</div> -->
  <button v-on:click="addMSG">add</button>
</template>

<script>
import { reactive } from "vue";
import { ref } from "vue";
export default {
  setup() {
    const message = reactive("Hello Vue!!!");
    const messageRef = ref("Hello Vue!!!");
    return { message,
      //messageRef 
    };
  },
  methods: {
    addMSG() {
      console.log("this.message ::: " + this.message);
      console.log( typeof this.message)
      this.message = this.message + "@@";
    //  this.messageRef = this.messageRef + "$$";
    },
  },
};
</script>

<style>
</style>