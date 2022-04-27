import {createRouter, createWebHistory} from 'vue-router';
//cms

import Company from '@pages/cms/profile/Company';
import Profile from '@pages/cms/profile/Profile';
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
import ManageContactUs from '@pages/cms/contact/ManageContactUs';
import ViewRequest from '@pages/cms/contact/ViewRequest';
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
import PageNotFound from '@components/PageNotFound';
import ServicesIndex from '@pages/public/services/ServicesIndex';
import ServicesDetail from '@pages/public/services/ServicesDetail';
import PreviewService from '@pages/public/services/PreviewService';
import NewsIndex from '@pages/public/news/NewsIndex';
import NewsDetail from '@pages/public/news/NewsDetail';
import PreviewNews from '@pages/public/news/PreviewNews';
import CompetencyIndex from '@pages/public/competencies/CompetencyIndex';
import CompetencyDetail from '@pages/public/competencies/CompetencyDetail';
import PreviewCompetency from '@pages/public/competencies/PreviewCompetency';
import PrivacyPolicyIndex from '@pages/public/privacy_policy/PrivacyPolicy';
import PreviewPrivacyPolicy from '@pages/public/privacy_policy/PreviewPrivacyPolicy';
import TermsOfUseIndex from '@pages/public/terms_of_use/TermsOfUse';
import PreviewTermsOfUse from '@pages/public/terms_of_use/PreviewTermsOfUse';
import CustomersIndex from '@pages/public/customers/CustomersIndex';
import CustomersDetail from '@pages/public/customers/CustomersDetail';
import PreviewCustomer from '@pages/public/customers/PreviewCustomer';
import ContactUs from '@pages/public/contact/ContactUs';
import ProductsIndex from '@pages/public/products/ProductsIndex';
import ProductsDetail from '@pages/public/products/ProductsDetail';
import PreviewProduct from '@pages/public/products/PreviewProduct';
import AboutIndex from '@pages/public/about/AboutIndex';
import PreviewAbout from '@pages/public/about/PreviewAbout';
import PreviewCarousel from '@pages/public/carousel/PreviewCarousel';
import App from '@pages/App';
import Dashboard from '@pages/Dashboard';
import Login from '@pages/Auth/Login';
import ForgotPassword from '@pages/Auth/ForgotPassword';
import ResetPassword from '@pages/Auth/ResetPassword';
import store from "../store";
import {notify} from "@kyvg/vue3-notification";


const routes = [
    {
        path: '/',
        name: 'home',
        component: App,
        meta:{
            protected: false,
            public: true
        },
    },
    {
        path: '/about_index',
        name:'about.index',
        component: AboutIndex,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/preview_about/:id',
        name: 'preview_about',
        props: true,
        component: PreviewAbout,
        meta:{
            protected: true,
        }
    },
    {
        path: '/products_index',
        name:'products.index',
        component: ProductsIndex,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/products_detail/:id',
        props:true,
        name:'products.detail',
        component: ProductsDetail,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/preview_product/:id',
        name: 'preview_product',
        props: true,
        component: PreviewProduct,
        meta:{
            protected: true,
        }
    },
    {
        path: '/news_index',
        name:'news.index',
        component: NewsIndex,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/news_detail/:id',
        props:true,
        name:'news.detail',
        component: NewsDetail,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/preview_news/:id',
        name: 'preview_news',
        props: true,
        component: PreviewNews,
        meta:{
            protected: true,
        }
    },
    {
        path: '/competencies_index',
        name:'competencies.index',
        component: CompetencyIndex,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/competencies_detail/:id',
        props:true,
        name:'competencies.detail',
        component: CompetencyDetail,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/preview_competency/:id',
        name: 'preview_competency',
        props: true,
        component: PreviewCompetency,
        meta:{
            protected: true,
        }
    },
    {
        path: '/services_index',
        name:'services.index',
        component: ServicesIndex,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/services_detail/:id',
        props:true,
        name:'services.detail',
        component: ServicesDetail,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/preview_service/:id',
        name: 'preview_service',
        props: true,
        component: PreviewService,
        meta:{
            protected: true,
        }
    },
    {
        path: '/customers_index',
        name:'customers.index',
        component: CustomersIndex,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/customers_detail/:id',
        props:true,
        name:'customers.detail',
        component: CustomersDetail,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/preview_customer/:id',
        name: 'preview_customer',
        props: true,
        component: PreviewCustomer,
        meta:{
            protected: true,
        }
    },
    {
        path: '/contact_us',
        name:'contact_us.index',
        component: ContactUs,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/privacy_policy',
        name:'privacy_policy.index',
        component: PrivacyPolicyIndex,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/preview_privacy_policy/:id',
        name: 'preview_privacy_policy',
        props: true,
        component: PreviewPrivacyPolicy,
        meta:{
            protected: true,
        }
    },
    {
        path: '/terms_of_use',
        name:'terms_of_use.index',
        component: TermsOfUseIndex,
        meta:{
            protected: false,
            public: true
        }
    },
    {
        path: '/preview_terms_of_use/:id',
        name: 'preview_terms_of_use',
        props: true,
        component: PreviewTermsOfUse,
        meta:{
            protected: true,
        }
    },
    {
        path: '/preview_carousel/:id',
        name: 'preview_carousel',
        props: true,
        component: PreviewCarousel,
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
            isLogin: true
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot_password',
        component: ForgotPassword,
        meta:{
            protected: false,
            isForgotPassword: true
        }
    },
    {
        path: '/reset-password/:token',
        name: 'reset_password',
        props: true,
        component: ResetPassword,
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
        beforeEnter:(to,from)=>{
            if (from.name === 'login'){
                notify({
                    title: "Well-come To Tahses CMS 🎉",
                    type:"success"
                });
            }
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
                path: 'edit_about/:id',
                name: 'edit_about',
                props: true,
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
                        path: 'edit_product/:id',
                        name: 'edit_product',
                        props: true,
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
                        path: 'edit_service/:id',
                        name: 'edit_service',
                        props: true,
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
                        path: 'edit_customer/:id',
                        name: 'edit_customer',
                        props: true,
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
                        path: 'edit_news/:id',
                        name: 'edit_news',
                        props: true,
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
                        path: 'edit_competency/:id',
                        name: 'edit_competency',
                        props: true,
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
                        path: 'edit_privacy_policy/:id',
                        name: 'edit_privacy_policy',
                        props: true,
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
                        path: 'edit_terms_of_use/:id',
                        name: 'edit_terms_of_use',
                        props: true,
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
                        path: 'edit_partner/:id',
                        name: 'edit_partner',
                        props: true,
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
                        path: 'edit_carousel_gallery/:id',
                        name: 'edit_carousel_gallery',
                        props: true,
                        component: EditCarouselGallery,
                        meta:{
                            protected: true,
                        }
                    },
                ]
            },
            {
                path: 'contact_us',
                component: ContactCms,
                meta:{
                    protected: true,
                },
                children: [
                    {
                        path: '',
                        name: 'contact_us',
                        component: ManageContactUs,
                        meta:{
                            protected: true
                        }
                    },
                    {
                        path: 'view_request/:id',
                        name: 'view_request',
                        component: ViewRequest,
                        props: true,
                        meta:{
                            protected: true
                        }
                    }
                ]
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profile,
                meta:{
                    protected: true,
                }
            },
            {
                path: 'company_information',
                name: 'company_info',
                component: Company,
                meta:{
                    protected: true,
                }
            },
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to,from) => {
    if (localStorage.getItem('auth_token') !== null){
        let token = localStorage.getItem('auth_token');
        let payload = {token:token}
        store.commit('setAuth', payload);
    }

    let is_authenticated = store.getters['isLoggedIn'];
    if (to.meta.protected && !is_authenticated){
        return { name: 'login', replace: true }
    }

    else if(to.meta.isLogin && is_authenticated){
        return { name:'cms', replace:true};
    }

    else if(to.meta.isForgotPassword && is_authenticated){
        return { name:'cms', replace:true};
    }

    else{
        return true;
    }

})



export default router;
