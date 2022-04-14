<template>
    <home-layout id="homelayout">
        <slider :options="options" :img_src="allCarousel" :partners="false" :isLoading="isLoading"></slider>
        <the-header title="Our News"></the-header>
        <news-card></news-card>
        <the-header title="Our Core Competencies"></the-header>
        <competency-card></competency-card>
        <the-header title="Our Products"></the-header>
        <product-card></product-card>
        <the-header title="Our Services"></the-header>
        <service-card></service-card>
        <the-header title="Our Customers"></the-header>
        <customer-card></customer-card>
        <the-header title="Our Partners"></the-header>
        <partners-card></partners-card>
        <scroll-up></scroll-up>
        <router-view></router-view>
    </home-layout>
</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import slider from '@components/Slider';
import CompetencyCard from '@pages/public/competencies/CompetencyCard';
import NewsCard from '@pages/public/news/NewsCard';
import ProductCard from '@pages/public/products/ProductCard';
import ServiceCard from '@pages/public/services/ServiceCard';
import CustomerCard from '@pages/public/customers/CustomerCard';
import PartnersCard from '@pages/public/partners/PartnersCard';
import TheHeader from '@components/TheHeader'
import ScrollUp from '@components/ScrollUp'
import {onMounted, reactive} from 'vue';
import usePublicCarousel from "@composable/public/public_carousel";
import { notify } from "@kyvg/vue3-notification";


const { allCarousel, fetchCarousel,isLoading } = usePublicCarousel();

const options = reactive({
    rewind: true,
    gap: 0,
    type: 'loop',
    perPage: 1,
    autoplay: 'play',
    height: '38vw',
    width: '100%',
})

onMounted(()=>{
    fetchCarousel();
})

</script>
