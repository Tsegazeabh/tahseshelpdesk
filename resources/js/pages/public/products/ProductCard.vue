<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 gap-x-4 py-6">
        <div class="mx-auto w-[300px] h-[350px] md:h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-xl shadow-gray-600 rounded-fine border border-[#00cba9] border-1">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img6.jpg" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseProduct">Read more</base-button>
            </div>
        </div>
        <div class="mx-auto w-[300px] h-[350px] md:h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-xl shadow-gray-600 rounded-fine border border-[#00cba9] border-1">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img5.jpg" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseProduct">Read more</base-button>
            </div>
        </div>
        <div class="mx-auto w-[300px] h-[350px] md:h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-xl shadow-gray-600 rounded-fine border border-[#00cba9] border-1">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img4.jpg" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseProduct">Read more</base-button>
            </div>
        </div>
        <div class="mx-auto w-[300px] h-[350px] md:h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-xl shadow-gray-600 rounded-fine border border-[#00cba9] border-1">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img3.jpg" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseProduct">Read more</base-button>
            </div>
        </div>
        <div class="mx-auto w-[300px] h-[350px] md:h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-xl shadow-gray-600 rounded-fine border border-[#00cba9] border-1">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img2.png" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseProduct">Read more</base-button>
            </div>
        </div>
        <div class="mx-auto w-[300px] h-[350px] md:h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-xl shadow-gray-600 rounded-fine border border-[#00cba9] border-1">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img1.png" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseProduct">Read more</base-button>
            </div>
        </div>
    </div>
    <div class="h-10 w-full bg-gray-200 text-white mt-4">
        <a class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20" href="#">View all</a>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import  BaseButton from '../../../components/BaseButton';

    const baseProduct = `absolute -top-8 right-6 font-bold hover:bg-primary hover:text-white bg-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-[10px_5px_20px_rgba(0,0,0,0.7)] border-[#00cba9]`;



</script>

<style scoped>

</style>
