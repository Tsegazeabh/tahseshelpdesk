<template>
    <nav class="flex mb-4 py-3 px-5 text-gray-700 rounded-lg border bg-gray-800 border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <div class="flex items-center">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Cms</span>
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
        <router-link  to="/cms/create_about" class="text-sm float-right p-2 bg-green-400 text-white hover:bg-green-500 rounded-md">Create</router-link>
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
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <span class="sr-only">Restore</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <template v-if="isLoading">
                    <base-spinner></base-spinner>
                </template>
                <template v-if="allAbout && allAbout.length !== 0 && !isLoading">
                    <tr v-for="about in filterAbout" :key="about.id" class="bg-white border-b hover:bg-gray-100">
                    <td class="w-4 p-4">
                        {{ about.id }}
                    </td>
                    <th scope="row" class="max-w-4 px-6 py-4 font-medium text-gray-900 whitespace-normal">
                        {{ about.title }}
                    </th>
                    <td class="px-6 py-4 text-red-400" :class="{'text-green-400': about.is_published === 1}">
                        {{ about.is_published === 1 ? 'Yes' : 'No' }}
                    </td>
                    <td class="px-6 py-4 text-center">
                        <template v-if="!about.is_published">
                        <router-link :to="{name:'edit_about', params:{id: about.id}}"
                                     class="text-blue-400 hover:text-blue-600">
                            <i class="fas fa-edit cursor-pointer mr-1"></i> Edit </router-link>
                        </template>
                        <template v-else>
                            <button class="cursor-not-allowed text-gray-300 text-center" disabled>
                                <i class="fas fa-edit cursor-not-allowed mr-1"></i> Edit </button>
                        </template>
                    </td>
                    <td class="px-6 py-4 text-center">
                        <router-link :to="{name:'preview_about', params:{id: about.id}}"
                                     class="text-blue-400 hover:text-blue-600">
                            <i class="fas fa-eye cursor-pointer mr-1"></i> preview </router-link>
                    </td>
                    <td v-if="about.deleted_at === null" class="px-6 py-4">
                        <template v-if="about.is_published">
                            <button @click="statusAbout(about, false)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                                <i class="fas fa-circle-xmark cursor-pointer mr-1"></i> Unpublish </button>
                        </template>
                        <template v-else class="px-6 py-4">
                            <button @click="statusAbout(about, true)" class="px-8 py-4 text-blue-400 hover:text-blue-600 ">
                                <i class="fas fa-globe cursor-pointer mr-1"></i> publish </button>
                        </template>
                    </td>
                    <td v-else class="px-6 py-4">
                        <template v-if="about.is_published" class="px-6 py-4 ">
                            <button @click="statusAbout(about, false)" class="cursor-not-allowed text-gray-300 px-6 py-4" disabled>
                                <i class="fas fa-circle-xmark text-gray-300 cursor-not-allowed mr-1"></i> Unpublish </button>
                        </template>
                        <template v-else class="px-6 py-4">
                            <button @click="statusAbout(about, true)" class="cursor-not-allowed text-gray-300 px-8 py-4" disabled>
                                <i class="fas fa-globe text-gray-300 cursor-not-allowed mr-1"></i> publish </button>
                        </template>
                    </td>
                    <td v-if="about.deleted_at === null" class="px-6 py-4">
                        <button @click="destroyAbout(about.id, true)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                            <i class="fa-solid fa-box-archive cursor-pointer mr-1"></i> Archive </button>
                    </td>
                    <td v-if="about.deleted_at !== null" class="px-6 py-4">
                        <button @click="restoreAboutMethod(about.id)" class="px-6 py-4 text-blue-400 hover:text-blue-600 ">
                            <i class="fas fa-trash-arrow-up cursor-pointer mr-1"></i> Restore </button>
                    </td>
                    <td v-if="about.deleted_at !== null" class="px-6 py-4">
                        <button @click="destroyAbout(about.id, false)" class="px-6 py-4 text-red-400 hover:text-red-600 ">
                            <i class="fa-solid fa-trash-can cursor-pointer mr-1"></i> Delete </button>
                    </td>
                    <td v-else class="px-6 py-4">
                        <button @click="destroyAbout(about.id)" class="cursor-not-allowed text-gray-300 px-6 py-4" disabled>
                            <i class="fa-solid fa-trash-can text-gray-300 cursor-not-allowed mr-1"></i> Delete </button>
                    </td>

                </tr>
                </template>
                <template v-else-if="(!allAbout || allAbout.length <= 0) && !isLoading">
                    <tr>
                        <td class="p-2 mx-auto flex justify-center items-center text-red-400"><svg class="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            No Published Contents Yet!
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
            <div class="flex justify-center items-center mx-auto w-full">
                <section v-if="allAbout && allAbout.length !== 0 && meta.total > 5" class="py-2 w-full bg-white flex justify-center items-center mx-auto">
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
import {ref, onMounted, computed} from 'vue';
import useAbout from "@composable/about";

const search_key = ref('');
const pageNumber = ref(0);
const { allAbout, publishAbout, fetchAbout, deleteAbout, restoreAbout, isLoading, meta } = useAbout();

    // fetchAbout();
onMounted(()=>{
    fetchAbout();
});

    function paginate(pageNum){
        pageNumber.value = pageNum;
        fetchAbout(pageNum);
    }


const filterAbout = computed(() => {
    return allAbout.value.filter((about) => {
        return (
            about.title
                .toLowerCase()
                .indexOf(search_key.value.toLowerCase()) !== -1
        );
    });
});

const destroyAbout = async (id, status) => {
    let my_status = status ? 'Archive' : 'Delete';
        if(!window.confirm('Are You Sure You want to '+ my_status +' this?')){
            return
        }
        await deleteAbout(id);
        await fetchAbout();
};

const showAbout = async(id) => {
    console.log('preview coming soon...', id);
}

const restoreAboutMethod = async (id) => {
    if(!window.confirm('Are You sure you want to restore this?')){
        return
    }
    await restoreAbout(id);
    await fetchAbout();
}

const statusAbout = async (data,status) => {
    let my_status = status === true ? 'Publish' : 'UnPublish';

    if(!window.confirm('Are You sure you want to '+ my_status +' this?')){
        return
    }
    await publishAbout(data,status);
    await fetchAbout();

}

</script>
