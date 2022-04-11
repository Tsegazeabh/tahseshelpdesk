<template>
    <nav class="flex mb-4 py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
                <router-link :to="{name:'cms'}" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    <svg class="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    Cms
                </router-link>
            </li>
            <li>
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <router-link :to="{name:'partners'}" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Partners</router-link>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Create Partner</span>
                </div>
            </li>
        </ol>
    </nav>
    <div class="my-8">
        <div class="p-6 bg-white rounded-md shadow-md">
            <h2 class="text-lg text-gray-700 font-semibold capitalize">Create Partner</h2>

            <form @submit.prevent="submitForm" enctype="multipart/form-data">
                <div class="grid grid-cols-1 gap-6 mt-4">
                    <div>
                        <label class="text-gray-700" for="title">Title</label>
                        <p v-if="v$.title.$error" class="text-red-600 text-sm py-1">
                            <span>{{ v$.title.$errors[0].$message }} </span>
                        </p>
                        <input v-model="form.title" :class="{'border border-red-600': v$.title.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" id="title">
                    </div>

                    <div>
                        <label class="text-gray-700" for="url">Url</label>
                        <p v-if="v$.url.$error" class="text-red-600 text-sm py-1">
                            <span>{{ v$.url.$errors[0].$message }} </span>
                        </p>
                        <input v-model="form.url" :class="{'border border-red-600': v$.url.$error}" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" id="url">
                    </div>

                    <div>
                        <label class="text-gray-700">Description</label>
                        <p v-if="v$.description.$error" class="text-red-600 text-sm py-1">
                            <span>{{ v$.description.$errors[0].$message }} </span>
                        </p>
                        <editor
                            v-model="form.description"
                            api-key="rtjncvw6lujg8x1sordmdwp5jnwcl3pyiztsoi216anokyu4"
                            :init="{
                                     height: 500,
                                     menubar: false,
                                     plugins: [
                                       'advlist autolink lists link image charmap print preview anchor',
                                       'searchreplace visualblocks code fullscreen',
                                       'insertdatetime media table imagetools paste code help wordcount'
                                     ],
                                     toolbar:
                                       'undo redo | link image | formatselect | underline bold italic backcolor code | subscript superscript | \
                                       alignleft aligncenter alignright alignjustify | \
                                       bullist numlist outdent indent | removeformat | help',
                                     image_advtab: true,
                                     image_title: true,
                                     images_upload_url: '/api/upload-image',
                                     style_formats: [
                                          {title: 'Image Left', selector: 'img', styles: {
                                            'float' : 'left',
                                            'margin': '0 10px'
                                          }},
                                          {title: 'Image Right', selector: 'img', styles: {
                                            'float' : 'right',
                                            'margin': '0 10px'
                                          }}
                                        ]
                                   }"
                        />
                    </div>
                </div>

                <div class="flex justify-end mt-4">
                    <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import {ref, reactive, onMounted, computed} from "vue";
import Editor from '@tinymce/tinymce-vue';
import BreadCrumb from '@components/BreadCrumb';
import usePartner from "@composable/partner";
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const { createPartner, errors } = usePartner();
const rules = computed(()=>{
    return {
        title:{required},
        url:{required},
        description:{required}
    }
});

const form = reactive({
    title: '',
    description: '',
    url: ''
});

const v$ = useVuelidate(rules,form)
// submitting the form
const submitForm = async () => {
    v$.value.$validate();
    if(!v$.value.$error) {
        await createPartner({...form});
    }
}

</script>

<style scoped>

</style>
