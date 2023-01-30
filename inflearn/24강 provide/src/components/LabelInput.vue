<template>
  <div class="child-class">
    <label class="form-label"  >{{label}}</label>
    <label  >/{{label1}}</label>
    <input v-model="value" type="text" class="form-control"/>
  </div>
</template>

<script>
import {computed} from 'vue';
export default {
  props: ['modelValue', 'label', 'label1'],
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });
    return {value};
  },
};
</script>

