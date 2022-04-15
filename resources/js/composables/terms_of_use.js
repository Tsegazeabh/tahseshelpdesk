import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useTermsOfUse(){
    const terms_of_use = ref([]);
    const isLoading = ref(false);
    const all_terms_of_use = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch terms_of_use
    const fetchTermsOfUse = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/terms_of_use/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false;
        all_terms_of_use.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create terms_of_use
    const createTermsOfUse = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/terms_of_use/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/terms_of_use');
            notify({
                title: "Record Created Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Validation Error ",
                type:"error"
            });
        }

    }

    // fetch terms_of_use
    const getTermsOfUse = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/terms_of_use/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            terms_of_use.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }

    }

    // update terms_of_use
    const updateTermsOfUse = async(id) =>{
        errors.value = {};
        try {
            await axios.put('/api/cms/terms_of_use/update/'+ id, terms_of_use.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/terms_of_use');
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

    // delete terms_of_use
    const deleteTermsOfUse = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/terms_of_use/delete/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            const message = response.data.message;
            notify({
                title: message,
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

    // restore terms_of_use
    const restoreTermsOfUse = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/terms_of_use/restore/'+ id, {
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

    // publish or un-publish terms_of_use
    const publishTermsOfUse = async(data,status) =>{
        errors.value = {};
        let notifyStatus = status ? 'Published' : 'UnPublished';
        let update_terms_of_use = ref([]);
        update_terms_of_use.value = data;
        update_terms_of_use.value.is_published = status;
        if (status === true){
            update_terms_of_use.value.published_at = moment().format();
        }else{
            update_terms_of_use.value.published_at = null;
        }
        try {
            await axios.put('/api/cms/terms_of_use/update/'+ update_terms_of_use.value.id, update_terms_of_use.value,{
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
        all_terms_of_use,
        terms_of_use,
        errors,
        isLoading,
        meta,
        fetchTermsOfUse,
        getTermsOfUse,
        createTermsOfUse,
        updateTermsOfUse,
        deleteTermsOfUse,
        restoreTermsOfUse,
        publishTermsOfUse,
    }
}
