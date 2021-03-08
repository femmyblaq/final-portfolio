import Vue from 'vue';
import App from './App.vue';
import 'animate.css';
import AOS from "aos"
import 'aos/dist/aos.css';

AOS.init();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')




const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.navbar-menu');


menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    navLinks.classList.toggle('active')
})
