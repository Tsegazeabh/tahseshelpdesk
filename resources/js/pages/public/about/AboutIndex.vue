<template>
    <home-layout>
       <div class="flex flex-col justify-center items-center p-6 bg-gray-100 overflow-x-hidden">
               <h2 class="text-center font-bold p-4 m-2 uppercase text-xl font-normal tracking-wide">About Our Experienced Team</h2>
           <template v-if="isLoading">
               <base-spinner></base-spinner>
           </template>
           <template v-if="about && about.length !== 0 && !isLoading" v-for="content in about" :key="content.id">
               <!-- title and description -->
               <div class="p-6 w-[80vw] mx-auto">
                   <h3 class="text-left uppercase my-2 text-gray-600">{{  content.title }}</h3>
                   <p class="flex-wrap text-left py-2 px-4 text-gray-400" v-html="content.description"></p>
               </div>
           </template>
           <template v-else-if="(!about || about.length <= 0) && !isLoading">
               <h1 class="p-3 text-red-400 text-2xl">No Published Content Yet!</h1>
           </template>
           <div class="border border-2 border-primary bg-gray-400">
                   <iframe :src="constants.map_source" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
       </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicAbout from '@composable/public/public_about';
import {onBeforeMount, onMounted, ref} from "vue";
import helpers from "@composable/helpers";

const { constants } = helpers();
const { about, fetchAbout, isLoading } = usePublicAbout();

onMounted(fetchAbout)
</script>

