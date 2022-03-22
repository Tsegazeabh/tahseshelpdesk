<template>
    <bread-crumb></bread-crumb>
    <div class="my-8">
        <div class="p-6 bg-white rounded-md shadow-md">
            <h2 class="text-lg text-gray-700 font-semibold capitalize">Create Competency</h2>

            <form @submit.prevent="submitForm" enctype="multipart/form-data">
                <div class="grid grid-cols-1 gap-6 mt-4">
                    <div>
                        <label class="text-gray-700" for="title">Title</label>
                        <input v-model="form.title" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" id="title">
                    </div>

                    <div>
                        <label class="text-gray-700">Description</label>
                        <!--                            <input v-model="form.description" class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="text" id="description">-->
                        <!--                            <editor class="rounded-md" :editor="editor" v-model="form.description" ></editor>-->
                        <editor
                            v-model="form.description"
                            api-key="no-api-key"
                            :init="{
                                     height: 500,
                                     menubar: false,
                                     plugins: [
                                       'advlist autolink lists link image charmap print preview anchor',
                                       'searchreplace visualblocks code fullscreen',
                                       'insertdatetime media table imagetools paste code help wordcount'
                                     ],
                                     toolbar:
                                       'undo redo | link image | formatselect | bold italic backcolor | \
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

                    <!--                        <div>-->
                    <!--                            <label class="text-gray-700" for="password">Password</label>-->
                    <!--                            <input class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="password" id="password">-->
                    <!--                        </div>-->

                    <!--                        <div class="flex items-center">-->
                    <!--                            <label class="text-gray-700"></label>-->
                    <!--                            <label class="block focus:outline-none">-->
                    <!--                                <span class="sr-only">Choose profile photo</span>-->
                    <!--                                <input @input="Upload" type="file" name="images" class="block w-full text-sm text-slate-500-->
                    <!--                                  file:mr-4 file:py-2 file:px-4-->
                    <!--                                  file:rounded-full file:border-0-->
                    <!--                                  file:text-sm file:font-semibold-->
                    <!--                                  file:bg-violet-50 file:text-violet-700-->
                    <!--                                  hover:file:bg-violet-100-->
                    <!--                                " multiple/>-->
                    <!--                            </label>-->
                    <!--                        </div>-->
                </div>

                <div class="flex justify-end mt-4">
                    <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import {ref, reactive, onMounted} from "vue";
import {useStore} from "vuex";
import Editor from '@tinymce/tinymce-vue';
import BreadCrumb from '@components/BreadCrumb';

const store = useStore();
const form = reactive({
    title: '',
    description: '',
});

// form submit method
function submitForm(){
    // axios.defaults.headers.common['Authorization'] = context.getters('getToken');
    axios.post('/api/cms/competency/create',form).then((res) => {
        // console.log(res.data);
    }).catch((e) => {
        console.log(e.response);
    });

}
onMounted(()=>{
    // console.log('createAbout',store.getters['getToken']);
});
//upload image
function Upload(event) {
    form.image = event.target.files;
}

</script>

<style scoped>

</style>
