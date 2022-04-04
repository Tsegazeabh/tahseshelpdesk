<template>
    <nav class="flex mb-4 py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <router-link :to="{name:'cms'}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Cms
                </router-link>
            </li>
            <li>
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <router-link :to="{name:'carousel_gallery'}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Carousel Gallery</router-link>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Edit Carousel Gallery</span>
                </div>
            </li>
        </ol>
    </nav>
    <div class="mt-8">
        <div class="mt-4">
            <div class="p-6 bg-white rounded-md shadow-md">
                <h2 class="text-lg text-gray-700 font-semibold capitalize">Edit Terms Of Use</h2>

                <form @submit.prevent="submitForm">
                    <div class="grid grid-cols-1 gap-6 mt-4">
                        <div>
                            <label class="text-gray-700" for="title">Title</label>
                            <p v-if="errors.title && errors.title.length > 0" class="text-red-600 text-sm py-1">
                                <span v-for="(error,index) in errors.title" :key="index">{{ error }} </span>
                            </p>
                            <input v-model="carousel.title" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" id="title">
                        </div>

                        <div>
                            <label class="text-gray-700">Description</label>
                            <p v-if="errors.description && errors.description.length > 0" class="text-red-600 text-sm py-1">
                                <span v-for="(error,index) in errors.description" :key="index">{{ error }} </span>
                            </p>
                            <input v-model="carousel.description" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" id="description">
                        </div>

                        <div class="flex items-center">
<!--                            <img :src="carousel.image" alt="Free unsplash image" width="40" height="40">-->
                            <label class="block focus:outline-none">
                                <span class="sr-only">Choose profile photo</span>
                                <input @change="Upload" type="file" class="block w-full text-sm text-slate-500
                                  file:mr-4 file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-violet-50 file:text-violet-700
                                  hover:file:bg-violet-100
                                "/>
                            </label>
                        </div>
                    </div>

                    <div class="flex justify-end mt-4">
                        <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, onMounted} from "vue";
import useCarousel from "@composable/carousel_gallery";


const { errors, carousel, getCarousel, updateCarousel } = useCarousel();

const props = defineProps(['id']);

onMounted(()=>{
    getCarousel(props.id);
});

//upload image
function Upload(event) {
    carousel.value.image = event.target.files[0];
}

// form submit method
const submitForm = async() =>{
    await updateCarousel(props.id);
}

</script>

<style scoped>

</style>
