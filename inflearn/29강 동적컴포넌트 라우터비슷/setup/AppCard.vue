
<template>
  <div class="card">
    <div class="card-body">

      <h5 class="card-title mt-2">{{ props.title }}</h5>

    </div>
  </div>
</template>

<script setup>

const props = defineProps({

  title: {
    type: String,
    required: true,
  },
});

</script>

<style  module>
.red {
  color: red;
}
</style>
