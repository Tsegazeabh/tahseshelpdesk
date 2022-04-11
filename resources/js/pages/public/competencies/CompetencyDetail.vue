<template>
    <home-layout>
        <div class="grid grid-cols-3">
            <div class="col-span-3 md:col-span-2 py-16 px-16">
                <h2 class="capitalize my-2 text-gray-700 text-md font-semibold my-0">{{competency.title}}</h2>
                <p class="text-gray-400 text-sm my-0">{{getDate(competency.published_at) }}</p>
                <div class="mt-3 ">
                    <div class="text-gray-500 description" v-html="competency.description">
                    </div>
                </div>
            </div>
            <div class="col-span-3 md:col-span-1 pt-16 px-4 bg-gray-100 mb-0 pb-0">
                <h2 class="capitalize my-2 text-gray-800 font-bold text-md">Related Contents</h2>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
                <div v-if="allCompetency && allCompetency.length !== 0 && !isLoading" class="overflow-x-hidden overflow-y-auto space-y-4 max-h-[70vh] w-full bg-gray-200 rounded-md p-2">
                    <template v-for="competencies in allCompetency" :key="competencies.id">
                        <button v-if="competencies.id !== competency.id" @click="navigate(competencies)" class="flex bg-white h-32 overflow-hidden rounded-md">
                            <div class="h-full w-1/4">
                                <img :src="getFirstImage(competencies.description)" alt="image" class="w-full h-full object-cover">
                            </div>
                            <div class="p-2 w-3/4 h-full flex flex-col justify-start text-left">
                                <div>
                                    <h3 class="text-sm lg:text-lg text-gray-700 font-normal my-1 uppercase ">{{ getTitleShortened(competencies.title) }}</h3>
                                    <p class="text-xs lg:text-base text-gray-500 capitalize leading-tight">{{getDescriptionShort(competencies.description)}}</p>
                                </div>
                                <div class="flex justify-start items-end w-full h-full">
                                    <p class="text-xs text-primary capitalize"><i class="mr-2 fas fa-calendar-alt"></i>{{getDate(competencies.published_at)}}</p>
                                </div>
                            </div>
                        </button>
                    </template>
                </div>
                <div v-else-if="(!allCompetency || allCompetency.length <= 0) && !isLoading" class="flex justify-center items-center">
                    <h2 class="text-2xl capitalize text-pink-600">There Is No Published Content!</h2>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center w-full my-6">
            <div class="w-[40vw] bg-gray-200 p-6 rounded-md text-center shadow-md shadow-gray-600">
                <h3 class="text-md md:text-lg tracking-wider text-primary my-2">Contact Us For More Information.</h3>
                <router-link :to="{name:'contact_us.index'}" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><i class="fas fa-leaf mr-2"></i> Contact Us</router-link>
            </div>
        </div>
    </home-layout>
</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicCompetency from "@composable/public/public_competency";
import {onMounted} from "vue";
import helpers from "@composable/helpers";
import {useRouter} from "vue-router";

const { competency, allCompetency, getCompetency, fetchCompetency, isLoading } = usePublicCompetency();
const { getDate, getFirstImage, getTitleShortened, getDescriptionShort, getDescriptionShortened } = helpers();
const router = useRouter();

const props = defineProps(['id']);

onMounted(getCompetency(props.id),fetchCompetency());

function navigate(competencies){
    competency.value = competencies;
    router.push({name: 'competencies.detail', params: {id: competencies.id}});
}

</script>

<style scoped>

</style>
