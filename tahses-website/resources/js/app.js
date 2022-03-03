require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from "vue";
import router from './router/index';


window.Alpine = Alpine;
Alpine.start();

createApp({
})
    .use(router)
    .mount('#app');



