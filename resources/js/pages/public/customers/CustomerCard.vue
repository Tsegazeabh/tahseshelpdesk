<template>
    <template v-if="latest_customer && latest_customer.length !== 0">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-4 py-6">
            <div v-for="customer in latest_customer" :key="customer.id" class="mx-auto rounded-md p-2 w-[200px] h-[250px] md:h-[300px] flex flex-col justify-center items-center overflow-hidden bg-gray-100">
                <a :href="customer.url" target="_blank" class="w-[80%] h-[180px]">
                    <img class="rounded-md w-full h-full object-cover" :src="getFirstImage(customer.description)" alt="card img">
                </a>
                <div class="text-dark p-6 flex flex-col justify-between items-start">
                    <router-link :to="{name:'customers.detail',params:{id: customer.id}}" class="font-bold my-3 hover:underline cursor-pointer">{{ getTitleShortened(customer.title) }}</router-link>
                </div>
            </div>
        </div>
<!--        <div class="h-10 w-full bg-gray-200 text-white mt-4">-->
<!--            <router-link :to="{name:'customers.index'}" class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20">View all</router-link>-->
<!--        </div>-->
    </template>
    <template v-else>
        <div class="flex justify-center items-center">
            <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </template>
</template>

<script setup>
    import helpers from "@composable/helpers";
    import usePublicCustomer from "@composable/public/public_customer";
    import {onMounted} from "vue";

    const { getFirstImage, getTitleShortened } = helpers();
    const { latest_customer, latestCustomer} = usePublicCustomer();

    onMounted(latestCustomer)
</script>

<style scoped>

</style>
