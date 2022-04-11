<template>
    <nav class="flex mb-4 py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <router-link :to="{name:'cms'}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Cms
                </router-link>
            </li>
            <li class="inline-flex items-center">
                <router-link :to="{name:'contact_us'}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    Contact Us Request
                </router-link>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">View Request</span>
                </div>
            </li>
        </ol>
    </nav>

        <div class="flex flex-col w-full">
            <div class="mx-4 p-6">
                <h3 class="text-md font-medium">From:<span class="ml-3 text-gray-700">{{request.full_name}}</span></h3>
                <h5 class="text-sm font-sm"><span class="text-gray-600">{{request.email}}</span></h5>
                <p class="p-4 text-gray-500 font-normal text-base">{{request.comment}}</p>
                <h3 class="text-md font-medium">Phone:<span class="ml-3 text-gray-700">{{request.phone}}</span></h3>
                <h3 class="text-md font-medium">Place:<span class="ml-3 text-gray-700">{{request.place}}</span></h3>
            </div>
        </div>


</template>

<script setup>
    import { onMounted } from 'vue';
    import useContactUs from '@composable/contact_us';

    const { request, getRequest } = useContactUs();
    const props = defineProps(['id']);
    onMounted(getRequest(props.id));
    console.log('request: ',request.value);

</script>

<style scoped>

</style>
