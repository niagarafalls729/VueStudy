<template>
  <h2>안녕하세여</h2>

  <div class="menu">
    <a v-for="(i, x) in menu" :key="x">{{ i }}</a>

  </div>
 <div v-for="(i,x) in products" :key="x">
    <h4>{{i.name}}</h4>
    <p>{{i.price }}</p>
    <button v-on:click="fn_click(x)">신고</button>
    <span>신고수 : {{ i.cnt }}</span>
  </div> 
 
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //데이터 보관함이라 생각하면됨, 
      products: [
        { name: '1번원룸', price: 600  , cnt : 0},
        { name: '2번투룸', price: 500   , cnt : 0},
        { name: '3번쓰리룸', price: 400   , cnt : 0}
      ],
      menu: [
        'Home', 'About', 'Shop'
      ], 
    }
  },
  methods: {
    fn_click(x) { 
      //cnt ++; xxxxxx
      console.log(x)

      this.products[x].cnt ++;
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
}

.menu {
  background: darkseagreen;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
