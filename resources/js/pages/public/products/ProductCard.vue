<template>
    <template v-if="isLoading">
        <base-spinner></base-spinner>
    </template>
    <template v-if="latest_product && latest_product.length !== 0 && !isLoading">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16 py-6 mx-16">
            <div v-for="product in latest_product" :key="product.id" class="mx-auto w-[270px] h-[350px] md:h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-xl shadow-gray-600 rounded-fine border border-[#00cba9] border-1">
                <div class="row-span-2">
                    <img class="w-full h-full object-cover" :src="getFirstImage(product.description)" alt="card img">
                </div>
                <div class="relative bg-white text-dark p-6">
                    <h2 class="font-bold my-3 whitespace-normal">{{ product.title }}</h2>
                    <router-link :to="{name:'products.detail',params:{id: product.id}}" class="absolute -top-8 right-6 font-bold hover:bg-primary hover:text-white bg-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-[10px_5px_20px_rgba(0,0,0,0.7)] border-[#00cba9]">Read more</router-link>
                </div>
            </div>
        </div>
        <div class="h-10 w-full bg-gray-200 text-white mt-4">
            <router-link :to="{name:'products.index'}" class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20">View all</router-link>
        </div>
    </template>
    <template v-else-if="(!latest_product || latest_product.length <= 0) && !isLoading">
        <div class="flex justify-center items-center">
            <h2 class="text-2xl capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </template>
</template>

<script setup>
    import helpers from "@composable/helpers";
    import usePublicProduct from "@composable/public/public_product";
    import {onMounted} from "vue";

    const { getFirstImage,getTitleShortened} = helpers();
    const { latestProduct, latest_product, isLoading} = usePublicProduct();

    onMounted(latestProduct)

</script>

<style scoped>

</style>
