 <template>
  <div>
    <button class="btn btn-primary" v-bind="$attrs">myBTN</button>
  </div>
 </template>

<script>
export default {
  // 이걸안하면 div 를 클릭해도 이벤트가 발생함으로 추가해야함
  // 단 추가하고나서 v-bind로 attrs로 값을 가져와야함,
  // f-b 이런식이면 $attrs['f-b']로해야함.
  inheritAttrs: false,
  setup(props, context) {
    console.log(context.attrs);
    return {};
  },
};
</script>

 <style lang="scss" scoped>

 </style>
