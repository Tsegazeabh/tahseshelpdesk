<template>
    <bread-crumb></bread-crumb>
    <div class="mt-8">
        <div class="mt-4">
            <div class="p-6 bg-white rounded-md shadow-md">
                <h2 class="text-lg text-gray-700 font-semibold capitalize">Create Terms Of Use</h2>

                <form @submit.prevent="submitForm">
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
                                     image_title: true,
                                     automatic_uploads: true,
                                     file_picker_types: 'image',
                                     file_picker_callback: fileUploader,
                                   }"
                            />
                        </div>

<!--                        <div>-->
<!--                            <label class="text-gray-700" for="password">Password</label>-->
<!--                            <input class="form-input w-full mt-2 rounded-md focus:border-indigo-600" type="password" id="password">-->
<!--                        </div>-->

                        <div class="flex items-center">
                            <label class="text-gray-700"></label>
<!--                            <input class="form-input w-full mt-2 p-2 rounded-md text-sm rounded-lg border cursor-pointer text-gray-400 focus:outline-none focus:border-transparent bg-gray-700 border-gray-600 placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">-->
                            <label class="block focus:outline-none">
                                <span class="sr-only">Choose profile photo</span>
                                <input @input="Upload" type="file" class="block w-full text-sm text-slate-500
                                  file:mr-4 file:py-2 file:px-4
                                  file:rounded-full file:border-0
                                  file:text-sm file:font-semibold
                                  file:bg-violet-50 file:text-violet-700
                                  hover:file:bg-violet-100
                                " multiple/>
                            </label>
                        </div>
                    </div>

                    <div class="flex justify-end mt-4">
                        <button class="px-4 py-2 bg-gray-800 text-gray-200 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import Editor from '@tinymce/tinymce-vue';
import BreadCrumb from '@components/BreadCrumb';

const form = reactive({
    title: '',
    description: '<p>Content of the editor.</p>',
    image: [],
});

// form submit method
function submitForm(){

      axios.post('/api/upload-image',form).then((res) => {
        console.log(res.data);
      }).catch((e) => {
          console.log(e.response);
      });

}
//upload image
function Upload(event) {
    form.image = event.target.files;
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
