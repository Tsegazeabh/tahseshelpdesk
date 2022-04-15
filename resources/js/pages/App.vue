<template>
    <home-layout id="homelayout">
        <slider :options="options" :img_src="allCarousel" :partners="false" :isLoading="isLoading"></slider>
        <news-card></news-card>
        <competency-card></competency-card>
        <product-card></product-card>
        <service-card></service-card>
        <customer-card></customer-card>
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
