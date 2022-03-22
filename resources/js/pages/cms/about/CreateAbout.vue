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
        axios.post('/api/cms/about/create',form,{
            headers: {
                'Authorization': 'Bearer '+ store.getters['getToken']
            }
        }).then((res) => {
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
