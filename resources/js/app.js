require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from "vue";
import router from './router/index';
import store from './store/index';
import Notifications from '@kyvg/vue3-notification';
import CKEditor from '@ckeditor/ckeditor5-vue';



window.Alpine = Alpine;
Alpine.start();

createApp({
})
    .use(router)
    .use(store)
    .use(Notifications)
    .use(CKEditor)
    .mount('#app');



