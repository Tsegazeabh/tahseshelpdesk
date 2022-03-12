<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 gap-x-4 py-6">
        <div class="grayscale hover:grayscale-0 mx-auto w-[300px] h-[350px] md:h-[400px] flex flex-col justify-start items-center overflow-hidden hover:shadow-2xl hover:shadow-black/90 rounded-md">
            <div class="w-full h-[180px]">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img1.png" alt="card img">
            </div>
            <div class="text-dark p-6 flex flex-col justify-between items-start">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseService">Read more</base-button>
            </div>
        </div>
        <div class="grayscale hover:grayscale-0 mx-auto w-[300px] h-[350px] md:h-[400px] flex flex-col justify-start items-center overflow-hidden hover:shadow-2xl hover:shadow-black/90 rounded-md">
            <div class="w-full h-[180px]">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img2.png" alt="card img">
            </div>
            <div class="text-dark p-6 flex flex-col justify-between items-start">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseService">Read more</base-button>
            </div>
        </div>
        <div class="grayscale hover:grayscale-0 mx-auto w-[300px] h-[350px] md:h-[400px] flex flex-col justify-start items-center overflow-hidden hover:shadow-2xl hover:shadow-black/90 rounded-md">
            <div class="w-full h-[180px]">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img3.jpg" alt="card img">
            </div>
            <div class="text-dark p-6 flex flex-col justify-between items-start">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseService">Read more</base-button>
            </div>
        </div>
        <div class="grayscale hover:grayscale-0 mx-auto w-[300px] h-[350px] md:h-[400px] flex flex-col justify-start items-center overflow-hidden hover:shadow-2xl hover:shadow-black/90 rounded-md">
            <div class="w-full h-[180px]">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img4.jpg" alt="card img">
            </div>
            <div class="text-dark p-6 flex flex-col justify-between items-start">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseService">Read more</base-button>
            </div>
        </div>
        <div class="grayscale hover:grayscale-0 mx-auto w-[300px] h-[350px] md:h-[400px] flex flex-col justify-start items-center overflow-hidden hover:shadow-2xl hover:shadow-black/90 rounded-md">
            <div class="w-full h-[180px]">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img5.jpg" alt="card img">
            </div>
            <div class="text-dark p-6 flex flex-col justify-between items-start">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseService">Read more</base-button>
            </div>
        </div>
        <div class="grayscale hover:grayscale-0 mx-auto w-[300px] h-[350px] md:h-[400px] flex flex-col justify-start items-center overflow-hidden hover:shadow-2xl hover:shadow-black/90 rounded-md">
            <div class="w-full h-[180px]">
                <img class="w-full h-full object-cover" src="../../../../assets/images/img6.jpg" alt="card img">
            </div>
            <div class="text-dark p-6 flex flex-col justify-between items-start">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button :shade="baseService">Read more</base-button>
            </div>
        </div>
    </div>
    <div class="h-10 w-full bg-gray-200 text-white mt-4">
        <a class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20" href="#">View all</a>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import BaseButton from '../../../components/BaseButton';

    const baseService = `font-bold bg-primary text-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 hover:shadow-lg hover:shadow-gray-600 border-[#00cba9]`;



</script>

<style scoped>

</style>
