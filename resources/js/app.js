require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from "vue";
import router from './router/index';
import store from './store/index';


window.Alpine = Alpine;
Alpine.start();

createApp({
})
    .use(router)
    .use(store)
    .mount('#app');



