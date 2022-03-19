<template>
    <nav class="flex py-3 mb-4 px-5 text-gray-700 rounded-lg border bg-gray-800 border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <!--                            <li class="inline-flex items-center">-->
            <!--                                <router-link to="/cms" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">-->
            <!--                                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>-->
            <!--                                    Dashboard-->
            <!--                                </router-link>-->
            <!--                            </li>-->
            <li v-for="(path,index) in pathStack" :key="path" aria-current="page">
                <div v-if="index === pathStack.length-1 && path !== ''" class="inline-flex items-center text-sm font-medium text-gray-400">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    <span v-if="path !== '' && 'cms'" class="ml-1 text-sm font-medium md:ml-2 text-gray-500">{{ path }}</span>
                </div>
            </li>
        </ol>
    </nav>
    <div class="flex items-center justify-between">
        <div class="relative mx-4 lg:mx-0">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>

            <input class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Search">
        </div>
        <router-link  :to="{ name: 'customers.create'}" class="float-right p-2 bg-gray-400 text-white hover:bg-gray-500 rounded-md">Create</router-link>
    </div>

    <div class="flex flex-col mt-6 w-full">
        <ag-grid-vue
            style="width: 100%; height: 300px"
            class="ag-theme-alpine"
            :columnDefs="columnDefs"
            :rowData="rowData">
        </ag-grid-vue>
    </div>

</template>

<script setup>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {ref, onMounted, reactive} from 'vue';
import { AgGridVue } from "ag-grid-vue3";
import {useRoute, useRouter} from "vue-router";



const  columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
];
const rowData = [
    { make: "Toyota", model: "<button>Edit</button>", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
];

const router = useRouter();
const route = useRoute();
const path = ref(route.path);
const pathStack = path.value.split('/');
console.log(pathStack);
</script>

<style scoped>

</style>
