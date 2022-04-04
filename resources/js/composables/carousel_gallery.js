import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useCarousel(){
    const carousel = ref([]);
    const allCarousel = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })
    // fetch carousel
    const fetchCarousel = async(page=1) => {
        const response = await axios.get('/api/cms/carousels/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        allCarousel.value = await response.data.data;
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
        console.log(form.image)
        data.append('title',form.title);
        data.append('description',form.description);
        data.append('image',form.image);
        try {
            await axios.post('/api/cms/carousels/create',data,config);
            await router.replace('/cms/carousel_gallery');
            notification.value.success = true;
            notification.value.message = 'Record Created Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            console.log(errors.value);
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
            // Object.keys(error.response.data.errors).forEach(key => {
            //     errors.value += error.response.data.errors[key][0] + ' ';
            //     console.log(error.response.data.errors[key][0])
            // })
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
            console.log(response.data.data);
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
            console.log('try block');
        }catch (error) {
            console.log(error.response);
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete carousel
    const deleteCarousel = async(id) =>{
        await axios.get('/api/cms/carousels/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore carousel
    const restoreCarousel = async(id) =>{
        await axios.get('/api/cms/carousels/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish carousel
    const publishCarousel = async(data,status) =>{
        errors.value = {}
        let update_carousel = ref([]);
        update_carousel.value = data;
        update_carousel.value.is_published = status;
        if (status === true){
            update_carousel.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_carousel.value.published_at = null;
        }
        console.log(update_carousel.value);
        try {
            await axios.post('/api/cms/carousels/publish/'+ update_carousel.value.id, update_carousel.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken'],
                }
            });
            console.log('successfully ended try block');
            notification.value.success = true;
            notification.value.message = 'Record Published/Unpublished Successfully';
        }catch (error) {
            console.log('catch block');
            errors.value = error.response.data.errors;
        }
    }

    return{
        allCarousel,
        carousel,
        errors,
        fetchCarousel,
        getCarousel,
        createCarousel,
        updateCarousel,
        deleteCarousel,
        restoreCarousel,
        publishCarousel,
        notification
    }
}
