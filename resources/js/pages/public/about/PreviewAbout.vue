<template>
    <home-layout>
        <div class="flex flex-col justify-center items-center p-6 bg-gray-100 overflow-x-hidden">
            <h2 class="text-center font-bold p-4 m-2 uppercase text-xl font-normal tracking-wide">About Our Experienced Team</h2>
            <template v-if="about && about.length > 0" v-for="content in about" :key="content.id">
                <!-- title and description -->
                <div class="p-6 w-[80vw] mx-auto">
                    <h3 class="text-left uppercase my-2 text-gray-600">{{  content.title }}</h3>
                    <div class="flex-wrap text-left py-2 px-4 text-gray-400" v-html="content.description"></div>
                </div>
            </template>
            <template v-else>
                <h1 class="p-3 text-red-400 text-2xl">No Published Content Yet!</h1>
            </template>
        </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicAbout from '@composable/public/public_about';
import {onMounted} from "vue";

const { about, previewAbout } = usePublicAbout();
const props = defineProps(['id']);

onMounted(()=>{
    previewAbout(props.id);
});

</script>

