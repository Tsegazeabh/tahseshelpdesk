<template>
    <template v-if="isLoading">
        <base-spinner></base-spinner>
    </template>
    <template v-if="latest_news && latest_news.length !== 0 && !isLoading">
        <div class="block grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
            <div v-for="news in latest_news" :key="news.id" class="relative h-[300px] w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] rounded-fine shadow-[10px_10px_20px_rgba(0,0,0,0.7)] overflow-hidden max-h-[300px] mx-auto">
                <img class="w-full h-full object-cover" :src="getFirstImage(news.description)" alt="card img">
                <router-link :to="{name:'news.detail',params:{id:news.id}}" class="absolute left-5 bottom-5 font-bold hover:bg-primary hover:text-white bg-white rounded-bl-fine rounded-tr-fine px-4 py-4 border border-1 shadow-lg shadow-white/50 border-[#00cba9]">Read more</router-link>
                <div class="rounded-fine p-3 w-1/2 absolute inset-y-3 right-3 bg-[rgba(0,0,0,0.7)] text-white text-wrap">
                    <p class="font-bold">{{getTitleShortened(news.title)}}</p>
                    <h3 class="font-normal mt-2">{{getDescriptionShortened(news.description)}}</h3>
                </div>
            </div>
        </div>
    <div class="h-10 w-full bg-gray-200 text-white mt-4">
        <router-link class="hover:font-extrabold font-semibold text-gray-900 p-2 float-right pr-20" :to="{name:'news.index'}">View all</router-link>
    </div>
    </template>
    <template v-else-if="(!latest_news || latest_news.length <= 0) && !isLoading">
        <div class="flex justify-center items-center">
            <h2 class="text-lg capitalize text-pink-600">There Is No Published Content!</h2>
        </div>
    </template>
</template>

<script setup>
    import helpers from "@composable/helpers";
    import usePublicNews from '@composable/public/public_news';
    import {onMounted} from "vue";

    const { getDescriptionShortened, getTitleShortened, getFirstImage } = helpers();
    const { latest_news, latestNews,isLoading } = usePublicNews();

    onMounted(latestNews);

</script>

