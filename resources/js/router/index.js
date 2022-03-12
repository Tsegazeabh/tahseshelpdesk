import {createRouter, createWebHistory} from 'vue-router';

import ServiceIndex from '../pages/public/services/ServiceIndex';
import NewsIndex from '../pages/public/news/NewsIndex';
import CompetencyIndex from '../pages/public/competencies/CompetencyIndex';
import TermsOfUse from '../pages/public/terms_of_use/TermsOfUse';
import PrivacyPolicy from '../pages/public/privacy_policy/PrivacyPolicy';
import CustomersIndex from '../pages/public/customers/CustomersIndex';
import Contact from '../pages/public/contact/Contact';
import ProductIndex from '../pages/public/products/ProductIndex';
import About from '../pages/public/about/About';
import App from '../pages/App';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Auth/Login';
import store from "../store";


const routes = [
    {
        path: '/',
        name: 'home',
        component: App,
        meta:{
            protected: false,
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta:{
            protected: false,
        }
    },
    {
        path: '/products',
        name: 'products.index',
        component: ProductIndex,
        meta:{
            protected: false,
        }
    },
    {
        path: '/services',
        name: 'services.index',
        component: ServiceIndex,
        meta:{
            protected: false,
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
        meta:{
            protected: false,
        }
    },
    {
        path: '/customers',
        name: 'customers.index',
        component: CustomersIndex,
        meta:{
            protected: false,
        }
    },
    {
        path: '/news',
        name: 'news.index',
        component: NewsIndex,
        meta:{
            protected: false,
        }
    },
    {
        path: '/competencies',
        name: 'competencies.index',
        component: CompetencyIndex,
        meta:{
            protected: false,
        }
    },
    {
        path: '/privacy_policy',
        name: 'privacy_policy',
        component: PrivacyPolicy,
        meta:{
            protected: false,
        }
    },
    {
        path: '/terms_of_use',
        name: 'terms_of_use',
        component: TermsOfUse,
        meta:{
            protected: false,
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta:{
            protected: false,
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta:{
            protected: true,
        }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//     const publicPages = ['/login', '/register', '/home'];
//     const authRequired = !publicPages.includes(to.path);
//     const loggedIn = localStorage.getItem('user');
//     // trying to access a restricted page + not logged in
//     // redirect to login page
//     if (authRequired && !loggedIn) {
//         next('/login');
//     } else {
//         next();
//     }
// });

router.beforeEach((to,from) => {
let authenticated = store.getters['isLoggedIn'];
console.log(authenticated)
    if (to.meta.protected && !authenticated){
        return { name: 'login' }
    }
    // else if(!to.meta.protected && authenticated){
    //     return {name: 'dashboard'}
    // }
    else{
        return true;
    }
})



export default router;
