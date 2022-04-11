<template>
    <home-layout>
        <div v-if="terms_of_use && terms_of_use.length !== 0" class="flex flex-col justify-center items-center p-6 bg-gray-100 overflow-x-hidden my-4">
            <h2 class="text-center font-bold p-4 m-2 uppercase text-xl font-normal tracking-wide">Terms Of Use</h2>
            <!-- title and description -->
            <div v-for="terms in terms_of_use" :key="terms.id" class="p-6 w-[80vw] mx-auto">
                <h3 class="text-left uppercase mt-2 text-gray-600">{{ terms.title }}</h3>
                <p class="text-gray-400 text-sm mb-2">{{getDate(terms.published_at) }}</p>
                <div class="flex-wrap text-left py-2 px-4 text-gray-400" v-html="terms.description"></div>
            </div>
        </div>
        <div v-else class="flex justify-center items-center min-h-[30vh]">
            <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicTermsOfUse from '@composable/public/public_terms_of_use';
import {onMounted} from "vue";
import helpers from "@composable/helpers";

const { previewTermsOfUse, terms_of_use } = usePublicTermsOfUse();
const { getDate } = helpers();
const props = defineProps(['id']);

onMounted(previewTermsOfUse(props.id))

</script>

