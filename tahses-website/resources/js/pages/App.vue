<template>
    <home-layout id="homelayout">
        <slider :options="options" :img_src="img_src" :mode="false"></slider>
        <the-header title="Our Core Competencies"></the-header>
        <competency-index></competency-index>
        <the-header title="Our News"></the-header>
        <news-index></news-index>
        <the-header title="Our Products"></the-header>
        <product-index></product-index>
        <the-header title="Our Services"></the-header>
        <service-index></service-index>
        <the-header title="Our Customers"></the-header>
        <customer-index></customer-index>
        <the-header title="Our Partners"></the-header>
        <partners-index></partners-index>
        <router-view></router-view>
    </home-layout>
</template>

<script setup>
import HomeLayout from '../layouts/HomeLayout.vue';
import slider from '../components/Slider';
import CompetencyIndex from './competencies/CompetencyIndex';
import NewsIndex from './news/NewsIndex';
import ProductIndex from './products/ProductIndex';
import ServiceIndex from './services/ServiceIndex';
import CustomerIndex from './customers/CustomerIndex';
import PartnersIndex from './partners/PartnersIndex';
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
    {img:'img1.png', title:'this is partner0'},
    {img:'img2.png', title:'this is partner1'},
    {img:'img3.jpg', title:'this is partner2'},
    {img:'img4.jpg', title:'this is partner3'},
    {img:'img5.jpg', title:'this is partner4'},
    {img:'img6.jpg', title:'this is partner5'}
]);
</script>

<style scoped>

</style>
