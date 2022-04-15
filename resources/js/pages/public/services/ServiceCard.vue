<template>
    <template v-if="isLoading">
        <base-spinner></base-spinner>
    </template>
    <template v-if="latest_service && latest_service.length !== 0 && !isLoading">
        <the-header title="Our Services"></the-header>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 gap-y-16 py-6">
        <div v-for="service in latest_service" :key="service.id" class="mx-auto w-[300px] h-[350px] md:h-[400px] flex flex-col justify-start items-center overflow-hidden shadow-xl shadow-gray-600 rounded-md">
            <div class="w-full h-[180px]">
                <img class="w-full h-full object-cover" :src="getFirstImage(service.description)" alt="card img">
            </div>
            <div class="text-dark p-6 flex flex-col justify-between items-start w-full">
                <h2 class="font-bold my-3 whitespace-normal">{{ service.title }}</h2>
                <router-link :to="{name:'services.detail', params:{id: service.id}}" class="font-bold bg-primary text-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 hover:shadow-lg hover:shadow-gray-600 border-[#00cba9]">Read more</router-link>
            </div>
        </div>
    </div>
    <div class="h-10 w-full bg-gray-200 text-white mt-4">
        <router-link :to="{name:'services.index'}" class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20">View all</router-link>
    </div>
    </template>
    <template v-else-if="(!latest_service || latest_service.length <= 0) && !isLoading">
        <div class="flex justify-center items-center">
            <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </template>
</template>

<script setup>
    import helpers from "@composable/helpers";
    import usePublicService from "@composable/public/public_service";
    import TheHeader from '@components/TheHeader';
    import {onMounted} from "vue";

    const { getFirstImage, getTitleShortened } = helpers();
    const { latest_service, latestService, isLoading} = usePublicService();

    onMounted(latestService)

</script>

<style scoped>

</style>
