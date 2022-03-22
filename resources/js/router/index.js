import {createRouter, createWebHistory} from 'vue-router';
//cms
import CreateCompetency from '@pages/cms/competencies/CreateCompetency';
import EditCompetency from '@pages/cms/competencies/EditCompetency';
import ManageCompetency from '@pages/cms/competencies/ManageCompetency';
import Competency from '@pages/cms/competencies/Competency';
import CarouselGallery from '@pages/cms/carousel_gallery/CarouselGallery';
import CreateCarouselGallery from '@pages/cms/carousel_gallery/CreateCarouselGallery';
import EditCarouselGallery from '@pages/cms/carousel_gallery/EditCarouselGallery';
import ManageCarouselGallery from '@pages/cms/carousel_gallery/ManageCarouselGallery';
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
        component: Dashboard,
        meta:{
            protected: true,
        },
        children:[
            {
                path: '',
                name: 'cms',
                component: ManageAbout,
                meta:{
                    protected: true,
                }
            },
            {
                path: 'create_about',
                name: 'create_about',
                component: CreateAbout,
                meta:{
                    protected: true,
                }
            },
            {
                path: 'edit_about',
                name: 'edit_about',
                component: EditAbout,
                meta:{
                    protected: true,
                }
            },
            {
                path: 'products',
                component: Product,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'products',
                        component: ManageProduct,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_product',
                        name: 'create_product',
                        component: CreateProduct,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_product',
                        name: 'edit_product',
                        component: EditProduct,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'services',
                component: Service,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'services',
                        component: ManageService,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_service',
                        name: 'create_service',
                        component: CreateService,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_service',
                        name: 'edit_service',
                        component: EditService,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'customers',
                component: Customer,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'customers',
                        component: ManageCustomer,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_customer',
                        name: 'create_customer',
                        component: CreateCustomer,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_customer',
                        name: 'edit_customer',
                        component: EditCustomer,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'news',
                component: News,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'news',
                        component: ManageNews,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_news',
                        name: 'create_news',
                        component: CreateNews,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_news',
                        name: 'edit_news',
                        component: EditNews,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'competencies',
                component: Competency,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'competencies',
                        component: ManageCompetency,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_competency',
                        name: 'create_competency',
                        component: CreateCompetency,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_competency',
                        name: 'edit_competency',
                        component: EditCompetency,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'privacy_policy',
                component: PrivacyPolicy,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'privacy_policy',
                        component: ManagePrivacyPolicy,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_privacy_policy',
                        name: 'create_privacy_policy',
                        component: CreatePrivacyPolicy,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_privacy_policy',
                        name: 'edit_privacy_policy',
                        component: EditPrivacyPolicy,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'terms_of_use',
                component: TermsOfUse,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'terms_of_use',
                        component: ManageTermsOfUse,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_terms_of_use',
                        name: 'create_terms_of_use',
                        component: CreateTermsOfUse,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_terms_of_use',
                        name: 'edit_terms_of_use',
                        component: EditTermsOfUse,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'partners',
                component: Partner,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'partners',
                        component: ManagePartner,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_partner',
                        name: 'create_partner',
                        component: CreatePartner,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_partner',
                        name: 'edit_partner',
                        component: EditPartner,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'carousel_gallery',
                component: CarouselGallery,
                meta:{
                    protected: true,
                },
                children:[
                    {
                        path: '',
                        name: 'carousel_gallery',
                        component: ManageCarouselGallery,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'create_carousel_gallery',
                        name: 'create_carousel_gallery',
                        component: CreateCarouselGallery,
                        meta:{
                            protected: true,
                        }
                    },
                    {
                        path: 'edit_carousel_gallery',
                        name: 'edit_carousel_gallery',
                        component: EditCarouselGallery,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'contact_us',
                name: 'contact_us',
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
