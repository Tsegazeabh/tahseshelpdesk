<template>
    <home-layout id="homelayout">
        <slider></slider>
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
import TheHeader from '../components/TheHeader'

</script>

<style scoped>

</style>
