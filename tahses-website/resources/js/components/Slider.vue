<template>
    <div>
        <Splide v-if="!partners" :options="options">
            <SplideSlide v-for="partner in img_src" key="partner.img">
                <img class="object-cover w-full" :src="'/images/'+partner.img" alt="Sample 1">
            </SplideSlide>
        </Splide>
        <Splide v-else :options="options">
            <SplideSlide v-for="partner in img_src" key="partner.img">
                <div class="splide__slide__container">
                    <img class="object-cover w-full" :src="'/images/'+partner.img" alt="Sample 1">
                    <h3>{{partner.title}}</h3>
                </div>
            </SplideSlide>
        </Splide>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
const props = defineProps(['options','img_src','partners'])
console.log(props.img_src)

</script>

<style scoped>

</style>
