import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useService(){
    const service = ref([]);
    const allService = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })
    // fetch service
    const fetchService = async(page=1) => {
        const response = await axios.get('/api/cms/services/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        allService.value = await response.data.data;
    }

    // create service
    const createService = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/services/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/services');
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

    // fetch service
    const getService = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/services/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            service.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }
    }

    // update service
    const updateService = async(id) =>{
        notification.value.success = false;
        notification.value.error = false;
        errors.value = {};
        try {
            await axios.put('/api/cms/services/update/'+ id, service.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/services');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete service
    const deleteService = async(id) =>{
        await axios.get('/api/cms/services/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore service
    const restoreService = async(id) =>{
        await axios.get('/api/cms/services/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish service
    const publishService = async(data,status) =>{
        errors.value = {}
        let update_service = ref([]);
        update_service.value = data;
        update_service.value.is_published = status;
        if (status === true){
            update_service.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_service.value.published_at = null;
        }
        console.log(update_service.value);
        try {
            await axios.put('/api/cms/services/update/'+ update_service.value.id, update_service.value,{
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
        allService,
        service,
        errors,
        fetchService,
        getService,
        createService,
        updateService,
        deleteService,
        restoreService,
        publishService,
        notification
    }
}
