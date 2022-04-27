<template>
    <home-layout>
        <div class="flex flex-col justify-center items-center p-6 bg-gray-100 overflow-x-hidden">
            <h2 class="text-center font-bold p-4 m-2 uppercase text-xl font-normal tracking-wide">What is New?</h2>
            <template v-if="isLoading">
                <base-spinner></base-spinner>
            </template>
            <template v-if="allCarousel && allCarousel.length !== 0 && !isLoading" v-for="content in allCarousel" :key="content.id">
                <!-- title and description -->
                <div class="p-6 w-[80vw] mx-auto">
                    <h2 class="capitalize my-2 text-gray-800 text-md font-semibold my-0">{{  content.title }}</h2>
                    <p class="text-gray-400 text-sm my-0">{{getDate(content.published_at) }}</p>
                    <div class="mt-3 ">
                        <div class="text-gray-700 description" v-html="content.description">
                        </div>
                    </div>
                </div>
            </template>
            <template v-else-if="(!allCarousel || allCarousel.length <= 0) && !isLoading">
                <h1 class="p-3 text-red-400 text-2xl">No Published Content Yet!</h1>
            </template>
        </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicCarousel from "@composable/public/public_carousel";
import {onMounted} from "vue";
import helpers from "@composable/helpers";

const { getDate } = helpers();
const { allCarousel, previewCarousel, isLoading } = usePublicCarousel();
const props = defineProps(['id']);

onMounted(()=>{
    previewCarousel(props.id);
});

</script>

