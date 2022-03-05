<template>
    <div class="flex flex-col md:flex-row md:justify-evenly justify-center items-center space-y-6 md:space-y-1 py-6">
        <div class="w-[300px] h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-2xl shadow-black/90 rounded-lg bg-[#3f3d56]">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../assets/images/img6.jpg" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button shade="black">Read more</base-button>
            </div>
        </div>
        <div class="w-[300px] h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-2xl shadow-black/90 rounded-lg bg-[#3f3d56]">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../assets/images/img6.jpg" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button shade="black">Read more</base-button>
            </div>
        </div>
        <div class="w-[300px] h-[400px] grid grid-rows-3 grid-cols-1 overflow-hidden shadow-2xl shadow-black/90 rounded-lg bg-[#3f3d56]">
            <div class="row-span-2">
                <img class="w-full h-full object-cover" src="../../../assets/images/img6.jpg" alt="card img">
            </div>
            <div class="relative bg-white text-dark p-6">
                <h2 class="font-bold my-3">Enterprise Resource Planing(ERP)</h2>
                <base-button shade="black">Read more</base-button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import BaseButton from '../../components/BaseButton';

    const value = ref('');



</script>

<style scoped>

</style>
