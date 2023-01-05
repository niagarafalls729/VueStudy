<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    // 템플릿 및 기타 Options API hook에 노출
    return {
      count
    }
  },
  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>