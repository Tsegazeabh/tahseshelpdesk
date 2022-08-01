require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from "vue";
import router from './router/index';
import store from './store/index';
import Notifications from '@kyvg/vue3-notification';
import BaseSpinner from '@components/BaseSpinner';


window.Alpine = Alpine;
Alpine.start();

const app = createApp({
})
    app.use(router)
    app.use(store)
    app.use(Notifications)
    app.component('BaseSpinner',BaseSpinner)
    app.mount('#app');



