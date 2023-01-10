<template>
  <h1>test dd</h1>
  <button v-on:click="state.count++">CLICK {{ state.count }}</button>
  <br />
  <button v-on:click="increment">CLICK {{ state.count }}</button>
  <br />
  <button v-on:click="increment_Methood">CLICK {{ state.count }}</button>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });
    const increment = () => { 
      state.count++;
    };

    return {
      state,
      increment,
    };
  },
  mounted() {},
  methods: {
    increment_Methood() {
      this.state.count++;
    },
  },
};
</script>

