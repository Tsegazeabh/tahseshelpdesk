import {ref, reactive, computed} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import formatDate from '@composable/dateFormat';
import moment from "moment";


export default function useAbout(){
    const about = ref([]);
    const allAbout = ref([]);
    const allAboutPaginate = ref({});
    // const filteredResult = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })

    // fetch about
    const fetchAbout = async(page=1) => {
        const response = await axios.get('/api/cms/about/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
            )
        allAbout.value = await response.data.data;
        allAboutPaginate.value = await response.data;
        console.log(response.data)
    }

    // create about
    const createAbout = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/about/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms');
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

    // fetch about
    const getAbout = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/about/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            about.value = await response.data.data;
            console.log(typeof about.value);
        }catch (error) {
            errors.value = error.response.data.errors;
        }
    }

    // update about
    const updateAbout = async(id) =>{
        notification.value.success = false;
        notification.value.error = false;
        errors.value = {};
        try {
            await axios.put('/api/cms/about/update/'+ id, about.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete about
    const deleteAbout = async(id) =>{
        await axios.get('/api/cms/about/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore about
    const restoreAbout = async(id) =>{
        await axios.get('/api/cms/about/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish about
    const publishAbout = async(data,status) =>{
            errors.value = {}
        let update_about = ref([]);
            update_about.value = data;
            update_about.value.is_published = status;
            if (status === true){
                update_about.value.published_at = moment().format();
                console.log(moment().format());
            }else{
                update_about.value.published_at = null;
            }
        console.log(update_about.value);
        try {
            await axios.put('/api/cms/about/update/'+ update_about.value.id, update_about.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
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
        allAbout,
        about,
        errors,
        allAboutPaginate,
        // filteredResult,
        fetchAbout,
        getAbout,
        createAbout,
        updateAbout,
        deleteAbout,
        restoreAbout,
        publishAbout,
        notification
    }
}
