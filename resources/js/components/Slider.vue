<template>
    <div v-if="img_src && img_src.length !== 0" class="flex justify-center">
        <Splide v-if="!partners" :options="options">
            <SplideSlide class="relative" v-for="partner in img_src" :key="partner.id">

                <img class="object-cover w-full" :src="partner.image" alt="Sample 1">
                    <div class="absolute bottom-8 left-1/4 w-[300px] md:bottom-1/3 md:left-1/4 md:w-[400px] text-white p-6 bg-[rgba(0,0,0,0.7)] rounded-md space-y-1">
                        <h1 class="font-bold md:text-lg text-sm p-1 md:p-2 md:leading-loose md:tracking-wide">{{getTitleShortened(partner.title)}}</h1>
                        <p class="md:text-md text-sm p-1 md:p-2 md:leading-loose md:tracking-wide">{{getDescriptionShort(partner.description)}}</p>
                        <button class="ml-2 py-1 md:py-2 px-3 md:px-6 bg-primary text-white rounded-md">View</button>
                    </div>

            </SplideSlide>
        </Splide>
        <Splide v-else :options="options">
                <SplideSlide class="bg-gray-200 rounded-lg overflow-hidden" v-for="partner in img_src" key="partner.img">
                <a :href="partner.url" target="_blank" class="hover:shadow-xl hover:shadow-gray-900">
                    <img class="object-cover h-3/5 w-full" :src="getFirstImage(partner.description)" alt="Sample 1">
                    <div class="text-center text-gray-600 text-sm md:text-md p-2">
                        {{ getTitleShortened(partner.title) }}
                    </div>
                </a>
                </SplideSlide>
        </Splide>
    </div>
    <div v-else class="flex justify-center items-center">
        <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import helpers from "@composable/helpers";

const { getDescriptionShort, getTitleShortened, getFirstImage } = helpers();
const props = defineProps(['options','img_src','partners'])

</script>

<style scoped>

</style>
