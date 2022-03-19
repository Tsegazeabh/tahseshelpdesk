<template>
    <home-layout id="homelayout">
        <notifications position="top center"/>
        <slider :options="options" :img_src="img_src" :mode="false"></slider>
        <the-header title="Our Core Competencies"></the-header>
        <competency-card></competency-card>
        <the-header title="Our News"></the-header>
        <news-card></news-card>
        <the-header title="Our Products"></the-header>
        <product-card></product-card>
        <the-header title="Our Services"></the-header>
        <service-card></service-card>
        <the-header title="Our Customers"></the-header>
        <customer-card></customer-card>
        <the-header title="Our Partners"></the-header>
        <partners-card></partners-card>
        <router-view></router-view>
    </home-layout>
</template>

<script setup>
import HomeLayout from '../layouts/HomeLayout.vue';
import slider from '../components/Slider';
import CompetencyCard from './public/competencies/CompetencyCard';
import NewsCard from './public/news/NewsCard';
import ProductCard from './public/products/ProductCard';
import ServiceCard from './public/services/ServiceCard';
import CustomerCard from './public/customers/CustomerCard';
import PartnersCard from './public/partners/PartnersCard';
import TheHeader from '../components/TheHeader'
import {reactive} from 'vue';


const options = reactive({
    rewind: true,
    gap: 0,
    type: 'loop',
    perPage: 1,
    autoplay: 'play',
    height: '38vw',
    width: '100%',
})
const img_src = reactive([
    {img:'img1.png', title:'Software as a Service (SaaS)'},
    {img:'img2.png', title:'We provide the following ICT based Trainings'},
    {img:'img3.jpg', title:'The services provided by data-center includes'},
    {img:'img4.jpg', title:'Manufacturing Process Management Information System (MPMIS)'},
    {img:'img5.jpg', title:'Construction Management Information System (CMIS)'},
    {img:'img6.jpg', title:'Land Management Information System (LMIS)'}
]);
</script>

<style scoped>

</style>
