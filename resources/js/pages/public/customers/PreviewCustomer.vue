<template>
    <home-layout>
        <div class="grid grid-cols-3">
            <div v-for="custome in customer" :key="custome.id" class="col-span-3 md:col-span-2 py-16 px-16">
                <h2 class="capitalize my-2 text-gray-800 text-md font-semibold my-0">{{custome.title}}</h2>
                <p class="text-gray-400 text-sm my-0">{{getDate(custome.published_at) }}</p>
                <div class="mt-3 ">
                    <div class="text-gray-700 description" v-html="custome.description">
                    </div>
                </div>
            </div>
            <div class="col-span-3 md:col-span-1 pt-16 px-4 bg-gray-100 mb-0 pb-0">
                <h2 class="capitalize my-2 text-gray-800 font-bold text-md">Related Contents</h2>
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
import usePublicCustomer from "@composable/public/public_customer";
import {onMounted} from "vue";
import helpers from "@composable/helpers";
import {useRouter} from "vue-router";

const { customer, previewCustomer } = usePublicCustomer();
const { getDate } = helpers();

const props = defineProps(['id']);

onMounted(previewCustomer(props.id));

</script>

<style scoped>

</style>
