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
                    <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Carousel Gallery</span>
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

            <input v-model="search_key" class="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Search">
        </div>
        <router-link  :to="{ name:'create_carousel_gallery'}" class="float-right p-2 bg-green-400 text-white hover:bg-green-500 rounded-md">Create</router-link>
    </div>

    <div class="flex flex-col mt-6 w-full">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-gray-300">
                <tr>
                    <th scope="col" class="sr-only px-6 py-3">
                        image
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Title
                    </th>
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
                <template v-if="isLoading">
                    <base-spinner></base-spinner>
                </template>
                <template v-if="allCarousel && allCarousel.length !== 0 && !isLoading">
                    <tr v-for="carousel in filterCarousel" :key="carousel.id" class="bg-white border-b hover:bg-gray-100">
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            <div class="w-16 h-16 inline-flex">
                                <img class="w-16 h-16 object-cover rounded-full" :src="carousel.image" alt="Free unsplash image">
                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-normal">
                            {{ carousel.title }}
                        </th>
                        <td class="px-6 py-4 text-red-400 text-center" :class="{'text-green-400': carousel.is_published === 1}">
                            {{ carousel.is_published === 1 ? 'Yes' : 'No' }}
                        </td>
                        <td class="px-6 py-4 text-center">
                            <template v-if="!carousel.is_published">
                            <router-link :to="{name:'edit_carousel_gallery', params:{id: carousel.id}}" class="text-blue-400 hover:text-blue-600">
                                <i class="fas fa-edit cursor-pointer mr-1"></i> Edit </router-link>
                            </template>
                            <template v-else>
                                <button class="cursor-not-allowed text-gray-300" disabled>
                                    <i class="cursor-not-allowed text-gray-300 fas fa-edit mr-1"></i> Edit </button>
                            </template>
                        </td>
                        <td class="px-6 py-4 text-center">
                            <router-link :to="{name:'preview_carousel', params:{id: carousel.id}}"
                                         class="text-blue-400 hover:text-blue-600">
                                <i class="fas fa-eye cursor-pointer mr-1"></i> preview </router-link>
                        </td>
                        <td v-if="carousel.deleted_at === null" class="px-6 py-4">
                            <template v-if="carousel.is_published">
                                <button @click="statusCarousel(carousel, false)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                                    <i class="fas fa-circle-xmark cursor-pointer mr-1"></i> Unpublish </button>
                            </template>
                            <template v-else class="px-6 py-4">
                                <button @click="statusCarousel(carousel, true)" class="px-8 py-4 text-blue-400 hover:text-blue-600 ">
                                    <i class="fas fa-globe cursor-pointer mr-1"></i> publish </button>
                            </template>
                        </td>
                        <td v-else class="px-6 py-4">
                            <template v-if="carousel.is_published" class="px-6 py-4 ">
                                <button @click="statusCarousel(carousel, false)" class="cursor-not-allowed text-gray-300 px-6 py-4" disabled>
                                    <i class="fas fa-circle-xmark text-gray-300 cursor-not-allowed mr-1"></i> Unpublish </button>
                            </template>
                            <template v-else class="px-6 py-4">
                                <button @click="statusCarousel(carousel, true)" class="cursor-not-allowed text-gray-300 px-8 py-4" disabled>
                                    <i class="fas fa-globe text-gray-300 cursor-not-allowed mr-1"></i> publish </button>
                            </template>
                        </td>
                        <td v-if="carousel.deleted_at === null" class="px-6 py-4">
                            <button @click="destroyCarousel(carousel.id, true)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                                <i class="fa-solid fa-box-archive cursor-pointer mr-1"></i> Archive </button>
                        </td>
                        <td v-if="carousel.deleted_at !== null" class="px-6 py-4">
                            <button @click="restoreCarouselMethod(carousel.id)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                                <i class="fas fa-trash-arrow-up cursor-pointer mr-1"></i> Restore </button>
                        </td>
                        <td v-if="carousel.deleted_at !== null" class="px-6 py-4">
                            <button @click="destroyCarousel(carousel.id,false)" class="px-6 py-4 text-red-400 hover:text-red-600 ">
                                <i class="fa-solid fa-trash-can cursor-pointer mr-1"></i> Delete </button>
                        </td>
                        <td v-else class="px-6 py-4">
                            <button @click="destroyCarousel(carousel.id)" class="cursor-not-allowed text-gray-300 px-6 py-4" disabled>
                                <i class="fa-solid fa-trash-can text-gray-300 cursor-not-allowed mr-1"></i> Delete </button>
                        </td>

                    </tr>
                </template>
                <template v-else-if="(!allCarousel || allCarousel.length <= 0) && !isLoading">
                    <tr>
                        <td class="p-2 mx-auto flex justify-center items-center text-red-400"><svg class="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            No Published Contents Yet!
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
            <div class="flex justify-center items-center mx-auto w-full">
                <section v-if="allCarousel && allCarousel.length !== 0 && meta.total > 5" class="py-2 w-full bg-white flex justify-center items-center mx-auto">
                    <div class="flex flex-col items-center">
                        <span class="text-sm text-gray-700">
                        Showing <span class="font-semibold text-gray-900">{{meta.from}}</span> to <span class="font-semibold text-gray-900">{{meta.to}}</span> of <span class="font-semibold text-gray-900">{{ meta.total }}</span> Entries
                        </span>

                        <div class="inline-flex mt-2 xs:mt-0">
                            <button @click="paginate(pageNumber - 1)" :class="{'bg-gray-400 cursor-not-allowed hover:bg-gray-400': pageNumber <= 1}"  class="py-1 px-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900"
                                    :disabled="pageNumber <= 1">
                                Prev
                            </button>

                            <span v-for="(item,index) in Math.ceil(meta.total / meta.per_page)" :key="index">
                                <button @click="paginate(index+1)" class="py-1 px-2 hover:bg-gray-300" :class="{'bg-gray-400 text-white': pageNumber === index+1}">{{index+1}}</button>
                            </span>
                            <button @click="paginate(pageNumber + 1)" :class="{'bg-gray-400 cursor-not-allowed hover:bg-gray-400': pageNumber >= meta.last_page}" class="py-1 px-2 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900"
                                    :disabled="pageNumber >= meta.last_page">
                                Next
                            </button>
                        </div>
                    </div>
                </section>
                <!--               end pagination -->

            </div>

        </div>
    </div>

</template>

<script setup>
import {ref, onMounted, reactive, computed, watch} from 'vue';
import useCarousel from "@composable/carousel_gallery";


const search_key = ref('');
const pageNumber = ref(0);
const { allCarousel, publishCarousel, fetchCarousel, deleteCarousel, restoreCarousel, isLoading, meta } = useCarousel();

onMounted(fetchCarousel);

function paginate(pageNum){
    pageNumber.value = pageNum;
    fetchCarousel(pageNum);
}

const filterCarousel = computed(() => {
    return allCarousel.value.filter((carousel) => {
        return (
            carousel.title
                .toLowerCase()
                .indexOf(search_key.value.toLowerCase()) !== -1
        );
    });
});

const destroyCarousel = async (id,status) => {
    let my_status = status ? 'Archive' : 'Delete';
    if(!window.confirm('Are You Sure You want to '+ my_status +' this?')){
        return
    }
    await deleteCarousel(id);
    await fetchCarousel();
};

const showCarousel = async(id) => {
    console.log('preview coming soon...', id);
}

const restoreCarouselMethod = async (id) => {
    if(!window.confirm('Are You sure you want to restore this?')){
        return
    }
    await restoreCarousel(id);
    await fetchCarousel();
}

const statusCarousel = async (data,status) => {
    let my_status = status === true ? 'Publish' : 'UnPublish';

    if(!window.confirm('Are You sure you want to '+ my_status +' this?')){
        return
    }
    await publishCarousel(data,status);
    await fetchCarousel();
}
</script>

