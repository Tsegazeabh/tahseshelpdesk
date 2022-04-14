<template>
    <div v-if="isLoading">
        <base-spinner></base-spinner>
    </div>
    <div v-if="img_src && img_src.length !== 0 && !isLoading" class="flex justify-center">
        <Splide v-if="!partners" :options="options">
            <SplideSlide class="relative" v-for="partner in img_src" :key="partner.id">

                <img class="object-cover w-full" :src="partner.image" alt="Sample 1">
                    <div class="absolute bottom-2 left-10 md:bottom-10 md:left-10 w-[80%] text-white p-3 bg-[rgba(0,0,0,0.7)] rounded-md">
                        <h1 class="font-bold md:text-lg text-sm p-1 md:p-2 md:leading-loose md:tracking-wide whitespace-normal">{{partner.title}}</h1>
                        <router-link :to="{name:'preview_carousel', params:{id:partner.id}}" class="py-1 md:py-2 px-3 md:px-6 bg-primary text-white text-sm md:text-md rounded-md">View</router-link>
                    </div>

            </SplideSlide>
        </Splide>
        <Splide v-else :options="options">
                <SplideSlide class="bg-gray-200 rounded-lg overflow-hidden" v-for="partner in img_src" key="partner.img">
                <a :href="partner.url" target="_blank" class="hover:shadow-xl hover:shadow-gray-900">
                    <img class="object-fit h-3/5 w-full" :src="getFirstImage(partner.description)" alt="Sample 1">
                    <div class="text-center text-gray-600 text-sm md:text-md py-2 flex justify-center items-center my-auto">
                        {{ partner.title }}
                    </div>
                </a>
                </SplideSlide>
        </Splide>
    </div>
    <div v-else-if="(!img_src || img_src.length <= 0) && !isLoading" class="flex justify-center items-center">
        <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import helpers from "@composable/helpers";

const { getFirstImage } = helpers();
const props = defineProps(['options','img_src','partners','isLoading'])

</script>

<style scoped>

</style>
