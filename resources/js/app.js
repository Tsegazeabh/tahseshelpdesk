require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from "vue";
import router from './router/index';
import store from './store/index';
import Notifications from '@kyvg/vue3-notification';
import Pagination from '@components/Pagination';

window.Alpine = Alpine;
Alpine.start();

const app = createApp({
})
    app.use(router)
    app.use(store)
    app.use(Notifications)
    app.component('Pagination',Pagination)
    app.mount('#app');



