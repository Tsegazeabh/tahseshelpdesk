<template>
    <home-layout>
       <div class="flex flex-col justify-center items-center p-6 bg-gray-100 overflow-x-hidden">
               <h2 class="text-center font-bold p-4 m-2 uppercase text-xl font-normal tracking-wide">About Our Experienced Team</h2>
           <template v-if="about && about.length > 0" v-for="content in about" :key="content.id">
               <!-- title and description -->
               <div class="p-6 w-[80vw] mx-auto">
                   <h3 class="text-left uppercase my-2 text-gray-600">{{  content.title }}</h3>
                   <p class="flex-wrap text-left py-2 px-4 text-gray-400" v-html="content.description"></p>
               </div>
           </template>
           <template v-else>
               <h1 class="p-3 text-red-400 text-2xl">No Published Content Yet!</h1>
           </template>
           <div class="border border-2 border-primary bg-gray-400">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.492958416255!2d38.775536314772616!3d9.018714791633283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8562f5dfb7cf%3A0x4f9ddc8e1f9cf00!2sTahses%20Information%20Communication%20Technology%20And%20Consultancy%20Plc!5e0!3m2!1sen!2set!4v1648816365211!5m2!1sen!2set" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
       </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicAbout from '@composable/public/public_about';
import {onMounted} from "vue";

const { about, fetchAbout } = usePublicAbout();

onMounted(fetchAbout);

</script>

