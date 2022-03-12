<template>
    <div class="block grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 py-6">
        <div class="relative h-[300px] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded-fine shadow-[10px_10px_20px_rgba(0,0,0,0.7)] overflow-hidden max-h-[300px] mx-auto">
            <img class="w-full h-full object-cover" src="../../../../assets/images/img5.jpg" alt="card img">
            <base-button :shade="baseNews">Read more</base-button>
            <div class="rounded-fine p-3 w-1/2 absolute inset-y-3 right-3 bg-[rgba(0,0,0,0.3)] text-white text-wrap">
                <h3>Description about the news will go here wrapped from top to bottom.</h3>
            </div>
        </div>
        <div class="relative h-[300px] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded-fine shadow-[10px_10px_20px_rgba(0,0,0,0.7)] overflow-hidden max-h-[300px] mx-auto">
            <img class="w-full h-full object-cover" src="../../../../assets/images/img6.jpg" alt="card img">
            <base-button :shade="baseNews">Read more</base-button>
            <div class="rounded-fine p-3 w-1/2 absolute inset-y-3 right-3 bg-[rgba(0,0,0,0.3)] text-white text-wrap">
                <h3>Description about the news will go here wrapped from top to bottom.</h3>
            </div>
        </div>
        <div class="relative h-[300px] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded-fine shadow-[10px_10px_20px_rgba(0,0,0,0.7)] overflow-hidden max-h-[300px] mx-auto">
            <img class="w-full h-full object-cover" src="../../../../assets/images/img5.jpg" alt="card img">
            <base-button :shade="baseNews">Read more</base-button>
            <div class="rounded-fine p-3 w-1/2 absolute inset-y-3 right-3 bg-[rgba(0,0,0,0.3)] text-white text-wrap">
                <h3>Description about the news will go here wrapped from top to bottom.</h3>
            </div>
        </div>
        <div class="relative h-[300px] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded-fine shadow-[10px_10px_20px_rgba(0,0,0,0.7)] overflow-hidden max-h-[300px] mx-auto">
            <img class="w-full h-full object-cover" src="../../../../assets/images/img4.jpg" alt="card img">
            <base-button :shade="baseNews">Read more</base-button>
            <div class="rounded-fine p-3 w-1/2 absolute inset-y-3 right-3 bg-[rgba(0,0,0,0.3)] text-white text-wrap">
                <h3>Description about the news will go here wrapped from top to bottom.</h3>
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

    const baseNews = `absolute left-5 bottom-5 font-bold hover:bg-primary hover:text-white bg-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-lg shadow-white/50 border-[#00cba9]`;



</script>

<style scoped>

</style>
