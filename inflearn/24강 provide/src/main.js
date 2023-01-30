import {createApp} from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);
// 전역변수 설정
// app.component('AppCard', AppCard);
app.mount('#app');
console.log('Hello');
