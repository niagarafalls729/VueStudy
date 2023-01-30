<template>
  <div class="card">
    <div class="card-header">Deep Card Header</div>
    <div class="card-body">
      <p>sMSG ::: {{ sMSG }},</p>
      <p v-model="myVal.get()">sMSG ::: ,</p>
      <p>MSG ::: {{ MSG }}</p>
      <p>count ::: {{ count }}</p>
      <p>{{ DeepValue }}</p>
      <input v-model="newDeepValue" type="text" />
      <button @click="updateChildStaticMSG(newDeepValue)">fnUpdateMSG</button>
    </div>
  </div>
  <div>

  </div>
</template>

<script>
import { inject } from 'vue';
import { ref, computed } from 'vue';
export default {
  setup() {
    const { sMSG, updateStaticMSG } = inject('provide-key-staticMSG');

    const myVal = computed({
      get() {
        return sMSG.value;
      },
      set(val) {
        sMSG.value = val;
      },
    });

    const MSG = inject('provide-key-MSG');
    // 이렇게 직접하지말고 부모컴포넌트에서 하는게 좋다.
    // MSG.value = MSG.value + '11';
    const DeepValue = ref('DeepValue');
    const newDeepValue = ref('');
    const updateChildStaticMSG = (newDeepValue) => {
      DeepValue.value = newDeepValue;
      sMSG.val = newDeepValue;
    };

    const count = inject('provide-key-count');

    return { newDeepValue, sMSG, MSG, count, DeepValue, updateChildStaticMSG, myVal };
  },
};
</script>

<style lang="scss" scoped>

</style>
