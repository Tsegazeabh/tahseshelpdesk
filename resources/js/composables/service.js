import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useService(){
    const service = ref([]);
    const isLoading = ref(false);
    const allService = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch service
    const fetchService = async(page=1) => {
            isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/services/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false;
        allService.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create service
    const createService = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/services/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/services');
            notify({
                title: "Record Created Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Validation Error",
                type:"error"
            });
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
        errors.value = {};
        try {
            await axios.put('/api/cms/services/update/'+ id, service.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/services');
            notify({
                title: "Record Updated Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Validation Error",
                type:"error"
            });
        }
    }

    // delete service
    const deleteService = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/services/delete/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            notify({
                title: "Record Deleted Successfully 🎉",
                type:"success"
            });
        }catch (error){
            errors.value = error.response.data.errors;
            notify({
                title: "Sorry, Something Went Wrong!",
                type:"warning"
            });
        }
    }

    // restore service
    const restoreService = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/services/restore/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            notify({
                title: "Record Restored Successfully 🎉",
                type:"success"
            });
        }catch (error){
            errors.value = error.response.data.errors;
            notify({
                title: "Sorry, Something Went Wrong!",
                type:"warning"
            });
        }
    }

    // publish or un-publish service
    const publishService = async(data,status) =>{
        errors.value = {};
        let notifyStatus = status === true ? 'Published' : 'UnPublished';
        let update_service = ref([]);
        update_service.value = data;
        update_service.value.is_published = status;
        if (status === true){
            update_service.value.published_at = moment().format();
        }else{
            update_service.value.published_at = null;
        }
        try {
            await axios.put('/api/cms/services/update/'+ update_service.value.id, update_service.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            notify({
                title: "Record " + notifyStatus + " Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Sorry, Something Went Wrong!",
                type:"warning"
            });
        }
    }

    return{
        allService,
        service,
        errors,
        isLoading,
        meta,
        fetchService,
        getService,
        createService,
        updateService,
        deleteService,
        restoreService,
        publishService,
    }
}
