import {ref} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useCarousel(){
    const carousel = ref([]);
    const isLoading = ref(false);
    const allCarousel = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch carousel
    const fetchCarousel = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/carousels/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false;
        allCarousel.value = await response.data.data;
        meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create carousel
    const createCarousel = async (form) =>{
        errors.value = {};
        const config = {
            headers: {
                'Authorization': 'Bearer '+ store.getters['getToken'],
                'Content-Type': 'multipart/form-data'
            }
        }
        let data = new FormData();
        data.append('title',form.title);
        data.append('description',form.description);
        data.append('image',form.image);
        try {
            await axios.post('/api/cms/carousels/create',data,config);
            await router.replace('/cms/carousel_gallery');
            notify({
                title: "Record Created Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: errors.value.image[1],
                type:"error"
            });
        }

    }

    // fetch carousel
    const getCarousel = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/carousels/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            carousel.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }

    }

    // update carousel
    const updateCarousel = async(id) =>{
        let data = new FormData();
        data.append('title',carousel.value.title);
        data.append('description',carousel.value.description);
        data.append('image',carousel.value.image);
        errors.value = {};
        try {
            await axios.post('/api/cms/carousels/update/'+ id, data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken'],
                    'Content-Type': 'multipart/form-data'
                }
            });
            await router.replace('/cms/carousel_gallery');
            notify({
                title: "Record updated Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            errors.value.image.forEach((e)=>{
                notify({
                    title: e,
                    type:"error"
                });
            })
        }
    }

    // delete carousel
    const deleteCarousel = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/carousels/delete/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });

            const message = await response.data.message;
            await notify({
                title: message,
                type:"success"
            });
        }catch (error) {
            errors.value = error.response;
            notify({
                title: 'Something Went Wrong!',
                type: 'warning'
            });
        }
    }

    // restore carousel
    const restoreCarousel = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/carousels/restore/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            notify({
                title: "Record Restored Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response;
            notify({
                title: 'Something Went Wrong!',
                type: 'warning'
            });
        }
    }

    // publish or un-publish carousel
    const publishCarousel = async(data,status) =>{
        errors.value = {}
        let notifyStatus = status === true ? 'Published' : 'UnPublished';
        let update_carousel = ref([]);
        update_carousel.value = data;
        update_carousel.value.is_published = status;
        if (status === true){
            update_carousel.value.published_at = moment().format();
        }else{
            update_carousel.value.published_at = null;
        }
        try {
            await axios.post('/api/cms/carousels/publish/'+ update_carousel.value.id, update_carousel.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken'],
                }
            });
            notify({
                title: "Record " + notifyStatus + " Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: 'Something Went Wrong!',
                type: 'warning'
            });
        }
    }

    return{
        allCarousel,
        carousel,
        errors,
        isLoading,
        meta,
        fetchCarousel,
        getCarousel,
        createCarousel,
        updateCarousel,
        deleteCarousel,
        restoreCarousel,
        publishCarousel,
    }
}
