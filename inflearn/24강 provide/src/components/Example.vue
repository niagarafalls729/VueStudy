<template>
  <main>
    <div class="container py-4">
      <Mybtn @click="sayHi" class="cldclclclc" id="dididididdid"></Mybtn>
      <LabelInput label="이름" label1="label1"></LabelInput>
    </div>
    <hr/>
    <FancyBTN>click <span style="color: red;">@@@@</span></FancyBTN>
    <!--기본값 출력.-->
    <FancyBTN></FancyBTN>

    <FancyBTN>
      <template v-slot="obj">{{obj.fancy }}</template>
    </FancyBTN>
    <FancyBTN>
      <template v-slot="{fancy}">{{ fancy }}</template>
    </FancyBTN>


    <AppCard2>
      <!-- 가장 기본 -->
      <template v-slot:header>header header</template>
      <template v-slot:default>defalut body</template>
      <!-- 이렇게 값 전달가능  -->
      <!-- <template v-slot:footer>{{slotArgs}}</template> -->
      <!-- 이렇게도 slot의 key 값을 전달해서도 해결 가능.  -->
      <!-- <template #[slotArgs]>zzz</template> -->

      <!-- <template #header>header header</template>
      <template #default>defalut body</template>
      <template #footer>footer footer</template> -->
      <!-- 으로 사용도 가능 -->

      <template #[slotArgs]="obj">{{obj.helloMessage}}</template>
      <!--자식에서 값 넘긴거로도 사용가능.-->
    </AppCard2>
    <hr/>
    <!-- 밑과 같은 방식으로 예를들어 게시글 본문만 가져오고 싶다면 slot에 v-if 를 추가해버리면됨 -->
    <AppCard2 >
      게시글 입니다
    </AppCard2>
  </main>
</template>

<script>

import LabelInput from './LabelInput.vue';
import Mybtn from './MyBtn.vue';
import FancyBTN from './FancyBTN.vue';
import AppCard2 from './AppCard2.vue';
import {ref} from 'vue';
export default {
  components: {
    Mybtn, LabelInput, FancyBTN, AppCard2,
  },

  setup() {
    const sayHi = () => {
      console.log('hi');
    };
    const slotArgs = ref('footer');
    return {sayHi, slotArgs};
  },
};
</script>

<style lang="scss" scoped>

</style>
