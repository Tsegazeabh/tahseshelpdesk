<template>
    <template v-if="isLoading">
        <base-spinner></base-spinner>
    </template>
    <template v-if="latest_customer && latest_customer.length !== 0 && !isLoading">
        <the-header title="Our Customers"></the-header>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-4 py-6">
            <div v-for="customer in latest_customer" :key="customer.id" class="mx-auto rounded-md p-2 w-[200px] h-[250px] md:h-[300px] flex flex-col justify-center items-center overflow-hidden bg-gray-100">
                <a :href="customer.url" target="_blank" class="w-[80%] h-[180px]">
                    <img class="rounded-md w-full h-full object-cover" :src="getFirstImage(customer.description)" alt="card img">
                </a>
                <div class="text-dark p-6 flex flex-col justify-between items-start">
                    <router-link :to="{name:'customers.detail',params:{id: customer.id}}" class="font-bold my-3 hover:underline cursor-pointer whitespace-normal">{{ getDescriptionShort(customer.title) }}</router-link>
                </div>
            </div>
        </div>
    </template>
    <template v-else-if="(!latest_customer || latest_customer.length <= 0) && !isLoading">
        <div class="flex justify-center items-center">
            <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </template>
</template>

<script setup>
    import helpers from "@composable/helpers";
    import usePublicCustomer from "@composable/public/public_customer";
    import TheHeader from '@components/TheHeader';
    import {onMounted} from "vue";

    const { getFirstImage, getDescriptionShort } = helpers();
    const { latest_customer, latestCustomer,isLoading} = usePublicCustomer();

    onMounted(latestCustomer)
</script>

<style scoped>

</style>
