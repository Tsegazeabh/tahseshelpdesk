<template>
    <home-layout id="homelayout">
        <slider></slider>
        <competency-index></competency-index>
        <router-view></router-view>
    </home-layout>
</template>

<script setup>
import HomeLayout from '../layouts/HomeLayout.vue';
import slider from '../components/Slider';
import CompetencyIndex from './competencies/CompetencyIndex';

</script>

<style scoped>

</style>
