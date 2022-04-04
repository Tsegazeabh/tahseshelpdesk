<template>
<!--    competency cards-->
    <template v-if="latest_competency && latest_competency.length !== 0">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-4 py-6">
        <div v-for="competency in latest_competency" :key="competency.id"
             class="m-3 w-[300px] h-[300px] md:h-[350px] grid grid-cols-1 grid-rows-2 shadow-xl shadow-gray-600 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]">
                <img class="w-full h-full object-cover" :src="getFirstImage(competency.image)" alt="card image">
            </div>
            <div class="flex flex-col justify-between items-center">
                <h3 class="pl-4 my-3 mx-3 text-center font-bold text-base">{{ getDescriptionShort(competency.title) }}</h3>
                <div class="w-full">
                    <router-link :to="{name:'competencies.detail',params:{id:competency.id}}" class="float-right font-bold hover:bg-primary hover:text-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-lg shadow-gray-600 border-[#00cba9] float-right">Read more</router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="h-10 w-full bg-gray-200 text-white mt-4">
        <router-link :to="{name:'competencies.index'}" class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20">View all</router-link>
    </div>
    </template>
    <template v-else>
        <div class="min-h-[30vh]">
            <h2 class="text-2xl capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </template>
</template>

<script setup>
    import  BaseButton from '@components/BaseButton';
    import usePublicCompetency from "@composable/public/public_competency";
    import {onMounted} from "vue";
    import helpers from "@composable/helpers";

    const {getFirstImage, getTitleShortened,getDescriptionShort} = helpers();
    const { latestCompetency, latest_competency } = usePublicCompetency();


    onMounted(latestCompetency)
</script>

<style scoped>

</style>
