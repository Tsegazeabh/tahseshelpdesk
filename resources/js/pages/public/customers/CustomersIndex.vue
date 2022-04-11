<template>
    <home-layout>
        <div class="flex flex-col justify-center items-center p-6 bg-gray-100 overflow-x-hidden">
            <template v-if="isLoading">
                <base-spinner></base-spinner>
            </template>
            <template v-if="allCustomer && allCustomer.length !== 0 && !isLoading">
                <h2 class="text-center font-bold p-4 m-2 uppercase text-xl font-normal tracking-wide">All The list Goes Below</h2>
                <div class="w-[80vw] mx-auto flex justify-end">
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-600">
                            <svg class="w-6 h-6" fill="#fefefe" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input v-model="search_key" type="text" id="email-adress-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  " placeholder="Search">
                    </div>
                </div>
                <!-- two cards horizontally -->
                <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center p-6 space-y-16 sm:space-y-4 h-full">
                    <div v-for="customer in filterCustomer" :key="customer.id" class="mt-4 overflow-hidden flex flex-col md:flex-row h-96 w-64 md:w-[40vw] md:h-72 bg-gray-200 rounded-md shadow-md shadow-gray-600 mr-4">
                        <div class="w-full h-2/5 md:w-1/3 md:h-full border-gray-200 md:border-r-8 bg-gray-300">
                            <img class="w-full h-full rounded-t-md md:rounded-l-md md:rounded-r-none object-cover" :src="getFirstImage(customer.description)" alt="image name">
                        </div>
                        <div class="flex flex-col justify-between items-start h-3/5 md:h-full w-full md:w-2/3 p-4 bg-white">
                            <div class="w-full">
                                <h3 class="font-normal capitalize text-base lg:text-lg text-gray-800">{{getTitleShortened(customer.title)}}</h3>
                                <p class="text-wrap flex-wrap text-sm md:text-base py-3 text-gray-500 capitalize">{{getDescriptionShortened(customer.description)}}</p>
                            </div>
                            <div class="flex justify-between items-center py-1 w-full">
                                <div>
                                    <p class="text-gray-400 text-xs md:text-sm py-2"><i class="text-xs fas fa-calendar"></i> {{customer.published_at}}</p>
                                </div>
                                <div>
                                    <router-link :to="{name:'customers.detail', params:{id: customer.id}}" class="py-1 px-2 lg:py-2 lg:px-4 rounded-md text-white hover:bg-primary bg-primary/90 hover:text-white text-white font-normal float-right text-sm md:text-md lg:text-base">View</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center mx-auto w-full">
                        <section v-if="allCustomer && allCustomer.length !== 0 && meta.total > 5" class="py-2 w-full bg-white flex justify-center items-center mx-auto">
                            <div class="flex flex-col items-center">
                        <span class="text-sm text-gray-700">
                        Showing <span class="font-semibold text-gray-900">{{meta.from}}</span> to <span class="font-semibold text-gray-900">{{meta.to}}</span> of <span class="font-semibold text-gray-900">{{ meta.total }}</span> Entries
                        </span>

                                <div class="inline-flex mt-2 xs:mt-0">
                                    <button @click="paginate(pageNumber - 1)" :class="{'bg-gray-400 cursor-not-allowed hover:bg-gray-400': pageNumber <= 1}"  class="py-1 px-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900"
                                            :disabled="pageNumber <= 1">
                                        Prev
                                    </button>

                                    <span v-for="(item,index) in Math.ceil(meta.total / meta.per_page)" :key="index">
                                <button @click="paginate(index+1)" class="py-1 px-2 hover:bg-gray-300" :class="{'bg-gray-400 text-white': pageNumber === index+1}">{{index+1}}</button>
                            </span>
                                    <button @click="paginate(pageNumber + 1)" :class="{'bg-gray-400 cursor-not-allowed hover:bg-gray-400': pageNumber >= meta.last_page}" class="py-1 px-2 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900"
                                            :disabled="pageNumber >= meta.last_page">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </section>
                        <!--               end pagination -->
                    </div>

                </div>
            </template>
            <template v-else-if="(!allCustomer || allCustomer.length <= 0) && !isLoading">
                <div class="min-h-[30vh]">
                    <h2 class="text-2xl capitalize text-pink-600">There Is No Published Content!</h2>
                </div>
            </template>
        </div>
    </home-layout>

</template>

<script setup>
import HomeLayout from '@layouts/HomeLayout.vue';
import usePublicCustomer from '@composable/public/public_customer';
import helpers from "@composable/helpers";
import {computed, onMounted, ref} from "vue";

const search_key = ref('');
const pageNumber = ref(0);

const { allCustomer, fetchCustomer, isLoading, meta } = usePublicCustomer();
const { getFirstImage, getTitleShortened, getDescriptionShortened } = helpers();

onMounted(fetchCustomer);

function paginate(pageNum){
    pageNumber.value = pageNum;
    fetchCustomer(pageNum);
}

const filterCustomer = computed(() => {
    return allCustomer.value.filter((customer) => {
        return (
            customer.title
                .toLowerCase()
                .indexOf(search_key.value.toLowerCase()) !== -1
        );
    });
});

</script>
