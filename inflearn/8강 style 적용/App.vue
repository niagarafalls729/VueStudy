<!-- eslint-disable max-len -->
<template>
  <div>
    <!-- <div v-bind:class ="{}"></div> -->
    <!-- class에 - 같은 문자가 들어갈경우 ' 로 감싸줘야함 -->
    <div :class="{ active: rtnValue, 'text-test': textValue }">
      텍스트입니다.
    </div>
    <button v-on:click="btnToggle">btnToggle</button>
    <hr />

    <div :class="classObj">OBJ 텍스트 .</div>
    <button v-on:click="btnOBJToggle">btnOBJToggle</button>

    <hr />
    <div :class="{ active: computedActive, 'text-test': computedTextTest }">
      computed 텍스트 .
    </div>
    <button v-on:click="btnComputed">computed</button>

    <hr />
    <div :style="sytleObj">sytleObj 텍스트 .</div>
    <button v-on:click="fontUp">font Size Up</button>
    <button v-on:click="fontDown">font Size Down</button>

  </div>
</template>

<script>
import {reactive, ref, computed} from 'vue';
export default {
  setup() {
    const rtnValue = ref(true);
    const textValue = ref(true);

    // function btnToggle() {
    //   rtnValue.value ? rtnValue.value = false : rtnValue.value = true;
    // };
    // const btnToggle = function A() {
    //    rtnValue.value ? rtnValue.value = false : rtnValue.value = true;
    // };
    const btnToggle = () => {
      rtnValue.value ? rtnValue.value = false : rtnValue.value = true;
      textValue.value ? textValue.value = false : textValue.value = true;
    };

    // -------------------------------------------------------------------//

    const classObj = reactive({
      'OBJactive': true,
      'OBJtextTest': true,
    });


    const btnOBJToggle = () =>{
      console.log('DDDDD');
      classObj.OBJactive ? classObj.OBJactive =false : classObj.OBJactive =true;
      // eslint-disable-next-line max-len
      classObj.OBJtextTest ? classObj.OBJtextTest=false : classObj.OBJtextTest =true;
    };


    // -------------------------------------------------------------------//
    const computedActive = ref(true);
    const computedTextTest = ref(true);

    const computedOBJ = computed({
      get() {
        return {
          'computedActive': computedActive,
          'computedTextTest': computedTextTest,
        };
      },
      set(props) {
        console.log('PROPS!', JSON.stringify(props));

        computedOBJ.value.computedActive = props[0];
        computedOBJ.value.computedTextTest = props[1];
      },
    });


    const btnComputed = () =>{
      console.log(computedOBJ);
      // eslint-disable-next-line max-len
      computedActive.value ? computedActive.value = false :computedActive.value = true;
      // eslint-disable-next-line max-len
      computedTextTest.value ? computedTextTest.value = false : computedTextTest.value = true;
      // computedOBJ.value(computedActive, computedTextTest);
      computedOBJ.value = [computedActive, computedTextTest];
    };

    // -------------------------------------------------------------------//
    // const sytleObj = reactive({
    //   color: 'red',
    //   FontSize: '13px',

    // });

    const fontSizeRef = ref(13);

    const sytleObj = computed({
      get() {
        return {
          color: 'red',
          fontSize: fontSizeRef.value+'px',
        };
      },
      set(props) {
        sytleObj.value.fontSize = fontSizeRef;
      },
    });

    const fontUp = () => {
      fontSizeRef.value++;
    };
    const fontDown = () => {
      fontSizeRef.value--;
    };

    // eslint-disable-next-line max-len
    return {rtnValue, btnToggle, textValue, classObj, btnOBJToggle, computed, btnComputed, computedActive, computedTextTest, sytleObj, fontDown, fontUp, fontSizeRef};
  },
};
</script>

<style scoped>
.active {
  font-weight: 900;
}
.text-test {
  color: red;
}
.OBJactive {
  font-style: italic;
}
.OBJtextTest {
  color: blue;
}
</style>
