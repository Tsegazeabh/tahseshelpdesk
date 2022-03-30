<template>
    <nav class="flex mb-4 py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <router-link :to="{name:'cms'}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Cms
                </router-link>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">News</span>
                </div>
            </li>
        </ol>
    </nav>
    <div class="flex items-center justify-between">
        <div class="relative mx-4 lg:mx-0">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>

            <input class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" v-model="search_key" type="text" placeholder="Search">
        </div>
        <router-link  :to="{name:'create_news'}" class="text-sm float-right p-2 bg-green-400 text-white hover:bg-green-500 rounded-md">Create</router-link>
    </div>

    <div class="flex flex-col mt-6 w-full">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                <tr>
                    <th scope="col" class="p-4">
                        Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
<!--                    <th scope="col" class="px-6 py-3">-->
<!--                        Description-->
<!--                    </th>-->
                    <th scope="col" class="px-6 py-3">
                        Published
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Edit</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Preview</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">status</span>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Delete</span>
                        <!--                        <span class="sr-only">Restore</span>-->
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Restore</span>
                        <!--                        <span class="sr-only">Restore</span>-->
                    </th>
                </tr>
                </thead>
                <tbody>
                <template v-if="allNews && allNews.length > 0">
                    <tr v-for="news in filterNews" :key="news.id" class="bg-white border-b hover:bg-gray-100">
                        <td class="w-4 p-4">
                            {{ news.id }}
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {{ news.title }}
                        </th>
<!--                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" v-html="filteredDescription(news.description)">-->
<!--                        </td>-->
                        <td class="px-6 py-4 text-red-400" :class="{'text-green-400': news.is_published === 1}">
                            {{ news.is_published === 1 ? 'Yes' : 'No' }}
                        </td>
                        <td class="px-6 py-4 text-right">
                            <router-link :to="{name:'edit_news', params:{id: news.id}}" class="text-blue-400 hover:text-blue-600">
                                <i class="fas fa-edit cursor-pointer mr-1"></i> Edit </router-link>
                        </td>
                        <td class="px-6 py-4">
                            <button @click="showNews(news.id)" class="text-blue-400 hover:text-blue-600">
                                <i class="fas fa-eye cursor-pointer mr-1"></i> preview </button>
                        </td>
                        <td v-if="news.deleted_at === null" class="px-6 py-4">
                            <template v-if="news.is_published">
                                <button @click="statusNews(news, false)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                                    <i class="fas fa-circle-xmark cursor-pointer mr-1"></i> Unpublish </button>
                            </template>
                            <template v-else class="px-6 py-4">
                                <button @click="statusNews(news, true)" class="px-8 py-4 text-blue-400 hover:text-blue-600 ">
                                    <i class="fas fa-globe cursor-pointer mr-1"></i> publish </button>
                            </template>
                        </td>
                        <td v-else class="px-6 py-4">
                            <template v-if="news.is_published" class="px-6 py-4 ">
                                <button @click="statusNews(news, false)" class="cursor-not-allowed text-gray-300 px-6 py-4" disabled>
                                    <i class="fas fa-circle-xmark text-gray-300 cursor-not-allowed mr-1"></i> Unpublish </button>
                            </template>
                            <template v-else class="px-6 py-4">
                                <button @click="statusNews(news, true)" class="cursor-not-allowed text-gray-300 px-8 py-4" disabled>
                                    <i class="fas fa-globe text-gray-300 cursor-not-allowed mr-1"></i> publish </button>
                            </template>
                        </td>
                        <td v-if="news.deleted_at === null" class="px-6 py-4">
                            <button @click="destroyNews(news.id)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                                <i class="fa-solid fa-box-archive cursor-pointer mr-1"></i> Archive </button>
                        </td>
                        <td v-if="news.deleted_at !== null" class="px-6 py-4">
                            <button @click="restoreNewsMethod(news.id)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                                <i class="fas fa-trash-arrow-up cursor-pointer mr-1"></i> Restore </button>
                        </td>
                        <td v-if="news.deleted_at !== null" class="px-6 py-4">
                            <button @click="destroyNews(news.id)" class="px-6 py-4 text-red-400 hover:text-red-600 ">
                                <i class="fa-solid fa-trash-can cursor-pointer mr-1"></i> Delete </button>
                        </td>
                        <td v-else class="px-6 py-4">
                            <button @click="destroyNews(news.id)" class="cursor-not-allowed text-gray-300 px-6 py-4" disabled>
                                <i class="fa-solid fa-trash-can text-gray-300 cursor-not-allowed mr-1"></i> Delete </button>
                        </td>

                    </tr>
                </template>
                <template v-else>
                    <p class="text-center p-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        No Published Contents Yet!
                    </p>
                </template>
                </tbody>
            </table>
        </div>

    </div>

</template>

<script setup>
import {ref, onMounted, reactive, computed } from 'vue';
import BreadCrumb from '@components/BreadCrumb';
import useNews from "@composable/news";

const search_key = ref('');
const { allNews, publishNews, fetchNews, updateNews, deleteNews, restoreNews, notification } = useNews();

onMounted(fetchNews);


const filterNews = computed(() => {
    return allNews.value.filter((news) => {
        return (
            news.title
                .toLowerCase()
                .indexOf(search_key.value.toLowerCase()) !== -1
        );
    });
});

const destroyNews = async (id) => {
    if(!window.confirm('Are You Sure You want to delete this Permanently?')){
        return
    }
    await deleteNews(id);
    await fetchNews();
}

const showNews = async(id) => {
    console.log('preview coming soon...', id);
}

const restoreNewsMethod = async (id) => {
    if(!window.confirm('Are You sure you want to restore this?')){
        return
    }
    await restoreNews(id);
    await fetchNews();
}

const statusNews = async (data,status) => {
    if(!window.confirm('Are You sure you want to publish this?')){
        return
    }
    await publishNews(data,status);
    await fetchNews();
}

</script>

<style scoped>

</style>
