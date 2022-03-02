require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from "vue";
import router from './router/index';
// import ServiceIndex from './components/App';
import App from './components/App';


window.Alpine = Alpine;
Alpine.start();

createApp({
})
    .use(router)
    .mount('#app');



