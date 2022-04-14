<template>
    <template v-if="isLoading">
        <base-spinner></base-spinner>
    </template>
    <template v-if="latest_competency && latest_competency.length !== 0 && !isLoading">
    <div class="flex flex-wrap justify-center items-center py-6">
        <div v-for="competency in latest_competency" :key="competency.id"
             class="m-8 h-[300px] w-[280px] md:h-[350px] md:w-[27vw] grid grid-cols-1 grid-rows-2 shadow-xl shadow-gray-600 rounded-large border border-1 border-[#00cba9] p-6 mx-auto">
            <div class="w-11/12 mx-auto rounded-large overflow-hidden border border-1 border-[#00cba9]">
                <img class="w-full h-full object-cover" :src="getFirstImage(competency.description)" alt="card image">
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
    <template v-else-if="(!latest_competency || latest_competency.length <= 0) && !isLoading">
        <div class="flex justify-center items-center">
            <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </template>
</template>

<script setup>
    import usePublicCompetency from "@composable/public/public_competency";
    import {onMounted} from "vue";
    import helpers from "@composable/helpers";

    const {getFirstImage, getTitleShortened,getDescriptionShort} = helpers();
    const { latestCompetency, latest_competency, isLoading } = usePublicCompetency();


    onMounted(latestCompetency)
</script>

<style scoped>

</style>
