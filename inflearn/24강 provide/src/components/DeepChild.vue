<template>
  <div class="card">
    <div class="card-header">Deep Card Header</div>
    <div class="card-body">
      <p>sMSG1 ::: {{ staticMSG }},</p>
      <p>MSG : : : {{ MSG }}</p>
      <p>count ::: {{ count }}</p>
      <input v-model="newDeepValue" type="text" />
      <button @click="fnUpdateMSG">fnUpdateMSG</button>

    </div>
  </div>
  <div>

  </div>
</template>

<script>
import { inject } from 'vue';
import { ref } from 'vue';
export default {
  setup() {
    // const { staticMSG ,} = inject('provide-key-staticMSG');
    // 기본적으로 구조 분해로 할당받을때는 key 값을 동일시하자.
    const { staticMSG, updateStaticMSG } = inject('provide-key-staticMSG');
    const fnUpdateMSG = () => {
      updateStaticMSG(newDeepValue.value);
    };
    const MSG = inject('provide-key-MSG');
    // 이렇게 직접하지말고 부모컴포넌트에서 하는게 좋다.
    // MSG.value = MSG.value + '11';
    const newDeepValue = ref('');
    const count = inject('provide-key-count');
    const myVal = inject('myVal-key');
    return { myVal, fnUpdateMSG, newDeepValue, MSG, count, staticMSG };
  },
};
</script>
