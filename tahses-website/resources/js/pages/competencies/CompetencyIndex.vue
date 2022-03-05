<template>
<!--    competency cards-->
    <div class="block md:flex flex-wrap justify-evenly items-center space-y-6 md:space-y-0 py-6">
        <div class="w-[300px] h-[350px] grid grid-cols-1 grid-rows-2 shadow-2xl shadow-black/50  rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]"><img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt=""></div>
            <div class="flex flex-col justify-between items-end">
                <h3 class="pl-4 my-3 mx-auto">Web-based Applications and Web Portals</h3>
                <button class="float-right font-bold hover:bg-[#00cba9] hover:text-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-2xl shadow-black/50 border-[#00cba9]">Read More</button>
            </div>
        </div>
        <div class="w-[300px] h-[350px] grid grid-cols-1 grid-rows-2 shadow-2xl shadow-black/50 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
        <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]"><img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt=""></div>
        <div class="flex flex-col justify-between items-end">
            <h3 class="pl-4 my-3 mx-auto">Web-based Applications and Web Portals</h3>
            <button class="float-right font-bold hover:bg-[#00cba9] hover:text-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-2xl shadow-black/50 border-[#00cba9]">Read More</button>
        </div>
        </div>
        <div class="w-[300px] h-[350px] grid grid-cols-1 grid-rows-2 shadow-2xl shadow-black/50 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
        <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]"><img class="w-full h-full object-cover" src="../../../assets/images/img2.png" alt=""></div>
        <div class="flex flex-col justify-between items-end">
            <h3 class="pl-4 my-3 mx-auto">Web-based Applications and Web Portals</h3>
            <button class="float-right font-bold hover:bg-[#00cba9] hover:text-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-2xl shadow-black/80 border-[#00cba9]">Read More</button>
        </div>
    </div>
    </div>
    <div class="h-10 w-full bg-gray-200 text-white mt-4">
        <a class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20" href="#">View all</a>
    </div>

</template>

<script setup>
    import { ref } from 'vue';

    const value = ref('');



</script>

<style scoped>

</style>
