<template>
    <bread-crumb></bread-crumb>
    <div class="my-8">
        <div class="p-6 bg-white rounded-md shadow-md">
            <h2 class="text-lg text-gray-700 font-semibold capitalize">Create About</h2>

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
                                     // automatic_uploads: true,
                                     // file_picker_types: 'image',
                                     // file_picker_callback: fileUploader,
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
import {ref, reactive, onMounted} from "vue";
import {useStore} from "vuex";
import Editor from '@tinymce/tinymce-vue';
import axios from "axios";
import BreadCrumb from '@components/BreadCrumb';

const store = useStore();
let response = reactive({});
let form = reactive({
    id: '',
    title: '',
    description: '',
});

// form submit method
function submitForm(){
    console.log(form);
    // axios.defaults.headers.common['Authorization'] = context.getters('getToken');
    axios.post(`/api/cms/about/update/${form.id}`,form).then((res) => {
        console.log(res.data);
    }).catch((e) => {
        console.log(e.response);
    });

}
onMounted(()=>{
    axios.defaults.headers.common['Authorization'] = 'Bearer '+ store.getters['getToken'];
    axios.get('/api/cms/about/manage').then((res)=>{
        form.id = res.data.data[0].id;
        form.title = res.data.data[0].title;
        form.description = res.data.data[0].description;
    }).catch((error)=>{
        console.log(error.response);
    })
});
//upload image
function Upload(event) {
    form.image = event.target.files;
    console.log('form: ',form.image)
    console.log('input: ',event.target.files);
}

function fileUploader(cb, value, meta) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.onchange = function () {
        var file = this.files[0];

        var reader = new FileReader();
        reader.onload = function () {
            var id = 'blobid' + (new Date()).getTime();
            var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
            var base64 = reader.result.split(',')[1];
            var blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);

            /* call the callback and populate the Title field with the file name */
            cb(blobInfo.blobUri(), { title: file.name });
        };
        reader.readAsDataURL(file);
    };
    input.click();
}
</script>

<style scoped>

</style>
