import {createRouter, createWebHistory} from 'vue-router';

import ServiceIndex from '../pages/services/ServiceIndex';
import App from '../pages/App';


const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/service',
        name: 'service.index',
        component: ServiceIndex
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
