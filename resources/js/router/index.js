import {createRouter, createWebHistory} from 'vue-router';
//cms
import CreateCompetency from '@pages/cms/competencies/CreateCompetency';
import EditCompetency from '@pages/cms/competencies/EditCompetency';
import ManageCompetency from '@pages/cms/competencies/ManageCompetency';
import Competency from '@pages/cms/competencies/Competency';
import CreateNews from '@pages/cms/news/CreateNews';
import EditNews from '@pages/cms/news/EditNews';
import ManageNews from '@pages/cms/news/ManageNews';
import News from '@pages/cms/news/News';
import CreatePartner from '@pages/cms/partners/CreatePartner';
import EditPartner from '@pages/cms/partners/EditPartner';
import ManagePartner from '@pages/cms/partners/ManagePartner';
import Partner from '@pages/cms/partners/Partner';
import CreateTermsOfUse from '@pages/cms/terms_of_use/CreateTermsOfUse';
import EditTermsOfUse from '@pages/cms/terms_of_use/EditTermsOfUse';
import ManageTermsOfUse from '@pages/cms/terms_of_use/ManageTermsOfUse';
import TermsOfUse from '@pages/cms/terms_of_use/TermsOfUse';
import CreatePrivacyPolicy from '@pages/cms/privacy_policy/CreatePrivacyPolicy';
import EditPrivacyPolicy from '@pages/cms/privacy_policy/EditPrivacyPolicy';
import ManagePrivacyPolicy from '@pages/cms/privacy_policy/ManagePrivacyPolicy';
import PrivacyPolicy from '@pages/cms/privacy_policy/PrivacyPolicy';
import CreateCustomer from '@pages/cms/customers/CreateCustomer';
import EditCustomer from '@pages/cms/customers/EditCustomer';
import ManageCustomer from '@pages/cms/customers/ManageCustomer';
import Customer from '@pages/cms/customers/Customer';
import ContactCms from '@pages/cms/contact/Contact';
import ManageAbout from '@pages/cms/about/ManageAbout';
import EditAbout from '@pages/cms/about/EditAbout';
import CreateAbout from '@pages/cms/about/CreateAbout';
import ManageService from '@pages/cms/services/ManageService';
import EditService from '@pages/cms/services/EditService';
import CreateService from '@pages/cms/services/CreateService';
import Service from '@pages/cms/services/Service';
import Product from '@pages/cms/products/Product';
import ManageProduct from '@pages/cms/products/ManageProduct';
import EditProduct from '@pages/cms/products/EditProduct';
import CreateProduct from '@pages/cms/products/CreateProduct';
//public
import ServiceIndex from '../pages/public/services/ServiceIndex';
import NewsIndex from '../pages/public/news/NewsIndex';
import CompetencyIndex from '../pages/public/competencies/CompetencyIndex';
// import TermsOfUse from '../pages/public/terms_of_use/TermsOfUse';
// import PrivacyPolicy from '../pages/public/privacy_policy/PrivacyPolicy';
import CustomersIndex from '../pages/public/customers/CustomersIndex';
import Contact from '../pages/public/contact/Contact';
import ProductIndex from '../pages/public/products/ProductIndex';
import About from '../pages/public/about/About';
import Partners from '../pages/public/partners/PartnersIndex';
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
        path: '/login',
        name: 'login',
        component: Login,
        meta:{
            protected: false,
        }
    },
    {
        path: '/cms',
        name: 'dashboard',
        component: Dashboard,
        meta:{
            protected: true,
        },
        children:[
            {
                path: '',
                component: ManageAbout,
                meta:{
                    protected: true,
                }
            },
            {
                path: 'create_about',
                name: 'about.create',
                component: CreateAbout,
                meta:{
                    protected: true,
                }
            },
            {
                path: 'edit_about',
                name: 'about.edit',
                component: EditAbout,
                meta:{
                    protected: true,
                }
            },
            {
                path: 'products',
                name: 'products.index',
                component: Product,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'products.manage',
                        component: ManageProduct,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_product',
                        name: 'products.create',
                        component: CreateProduct,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_product',
                        name: 'products.edit',
                        component: EditProduct,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'services',
                name: 'services.index',
                component: Service,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'services.manage',
                        component: ManageService,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_service',
                        name: 'services.create',
                        component: CreateService,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_service',
                        name: 'services.edit',
                        component: EditService,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'customers',
                name: 'customers.index',
                component: Customer,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'customers.manage',
                        component: ManageCustomer,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_customer',
                        name: 'customers.create',
                        component: CreateCustomer,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_customer',
                        name: 'customers.edit',
                        component: EditCustomer,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'news',
                name: 'news.index',
                component: News,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'news.manage',
                        component: ManageNews,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_news',
                        name: 'news.create',
                        component: CreateNews,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_news',
                        name: 'news.edit',
                        component: EditNews,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'competencies',
                name: 'competencies.index',
                component: Competency,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'competencies.manage',
                        component: ManageCompetency,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_competency',
                        name: 'competencies.create',
                        component: CreateCompetency,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_competency',
                        name: 'competencies.edit',
                        component: EditCompetency,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'privacy_policy',
                name: 'privacy_policy.index',
                component: PrivacyPolicy,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'privacy_policy.manage',
                        component: ManagePrivacyPolicy,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_privacy_policy',
                        name: 'privacy_policy.create',
                        component: CreatePrivacyPolicy,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_privacy_policy',
                        name: 'privacy_policy.edit',
                        component: EditPrivacyPolicy,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'terms_of_use',
                name: 'terms_of_use.index',
                component: TermsOfUse,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'terms_of_use.manage',
                        component: ManageTermsOfUse,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_terms_of_use',
                        name: 'terms_of_use.create',
                        component: CreateTermsOfUse,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_terms_of_use',
                        name: 'terms_of_use.edit',
                        component: EditTermsOfUse,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'partners',
                name: 'partners.index',
                component: Partner,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'partners.manage',
                        component: ManagePartner,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_partner',
                        name: 'partners.create',
                        component: CreatePartner,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_partner',
                        name: 'partners.edit',
                        component: EditPartner,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'contact_us',
                name: 'contact.index',
                component: ContactCms,
                meta:{
                    protected: true,
                }
            },
        ]
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
