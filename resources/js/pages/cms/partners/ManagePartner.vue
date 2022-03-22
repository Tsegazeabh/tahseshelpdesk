<template>
    <bread-crumb></bread-crumb>
    <div class="flex items-center justify-between">
        <div class="relative mx-4 lg:mx-0">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>

            <input class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Search">
        </div>
        <router-link  :to="{name:'create_partner'}" class="float-right p-2 bg-gray-400 text-white hover:bg-gray-500 rounded-md">Create</router-link>
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
import BreadCrumb from '@components/BreadCrumb';



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

</script>

<style scoped>

</style>
