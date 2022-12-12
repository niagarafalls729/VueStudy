<template>
  <h2>안녕하세여</h2>
  <div v-for="(i,x) in products" :key="x">
    <h4>{{i.name}} </h4>
    <p>{{i.price}} 만원</p>
    
  </div>
    <p>{{x}}인덱스값</p>
    <p v-if="x < 10"> 끝입니다. </p>
    <p v-else> 더보기 .</p>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      //데이터 보관함이라 생각하면됨, 
      products : [
         { name : '1번원룸'  , price : 600}, 
         { name : '2번투룸'  , price : 500}, 
         { name : '3번쓰리룸'  , price : 400}
    
      ],


    }
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
