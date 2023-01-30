<template>
  <button class="fancy-btn">
    <!-- 값이 삽입될 위치. -->
    <slot :fancy="fancyMSG">값이 안올경우 이값이 출력</slot>
  </button>

  <div>

  </div>
</template>

<script>
import {ref} from 'vue';
export default {

  setup() {
    const fancyMSG = ref('fancy Mesaage');
    return {fancyMSG};
  },
};
</script>

<style   scoped>
.fancy-btn {
color: #fff;
background: linear-gradient(315deg, #42d392 25%, #647eff);
border: none;
padding: 5px 12px;
margin: 5px;
border-radius: 8px;
cursor: pointer;
}
</style>
