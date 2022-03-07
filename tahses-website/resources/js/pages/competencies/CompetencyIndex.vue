<template>
<!--    competency cards-->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 gap-x-4 py-6">
        <div class="m-3 w-[300px] h-[300px] md:h-[350px] grid grid-cols-1 grid-rows-2 shadow-xl shadow-gray-600 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]">
                <img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt="">
            </div>
            <div class="flex flex-col justify-between items-end">
                <h3 class="pl-4 my-3 mx-3 text-center">Web-based Applications and Web Portals</h3>
                <base-button :shade="baseCompetency">Read more</base-button>
            </div>
        </div>
        <div class="m-3 w-[300px] h-[300px] md:h-[350px] grid grid-cols-1 grid-rows-2 shadow-xl shadow-gray-600 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]">
                <img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt="">
            </div>
            <div class="flex flex-col justify-between items-end">
                <h3 class="pl-4 my-3 mx-3 text-center">Web-based Applications and Web Portals</h3>
                <base-button :shade="baseCompetency">Read more</base-button>
            </div>
        </div>
        <div class="m-3 w-[300px] h-[300px] md:h-[350px] grid grid-cols-1 grid-rows-2 shadow-xl shadow-gray-600 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]">
                <img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt="">
            </div>
            <div class="flex flex-col justify-between items-end">
                <h3 class="pl-4 my-3 mx-3 text-center">Web-based Applications and Web Portals</h3>
                <base-button :shade="baseCompetency">Read more</base-button>
            </div>
        </div>
        <div class="m-3 w-[300px] h-[300px] md:h-[350px] grid grid-cols-1 grid-rows-2 shadow-xl shadow-gray-600 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]">
                <img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt="">
            </div>
            <div class="flex flex-col justify-between items-end">
                <h3 class="pl-4 my-3 mx-3 text-center">Web-based Applications and Web Portals</h3>
                <base-button :shade="baseCompetency">Read more</base-button>
            </div>
        </div>
        <div class="m-3 w-[300px] h-[300px] md:h-[350px] grid grid-cols-1 grid-rows-2 shadow-xl shadow-gray-600 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]">
                <img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt="">
            </div>
            <div class="flex flex-col justify-between items-end">
                <h3 class="pl-4 my-3 mx-3 text-center">Web-based Applications and Web Portals</h3>
                <base-button :shade="baseCompetency">Read more</base-button>
            </div>
        </div>
        <div class="m-3 w-[300px] h-[300px] md:h-[350px] grid grid-cols-1 grid-rows-2 shadow-xl shadow-gray-600 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]">
                <img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt="">
            </div>
            <div class="flex flex-col justify-between items-end">
                <h3 class="pl-4 my-3 mx-3 text-center">Web-based Applications and Web Portals</h3>
                <base-button :shade="baseCompetency">Read more</base-button>
            </div>
        </div>
    </div>
    <div class="h-10 w-full bg-gray-200 text-white mt-4">
        <a class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20" href="#">View all</a>
    </div>

</template>

<script setup>
    import { ref } from 'vue';
    import  BaseButton from '../../components/BaseButton';

    const baseCompetency = `float-right font-bold hover:bg-[#00cba9] hover:text-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-lg shadow-gray-600 border-[#00cba9]`;



</script>

<style scoped>

</style>
