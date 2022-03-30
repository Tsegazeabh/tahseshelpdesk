import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useTermsOfUse(){
    const terms_of_use = ref([]);
    const all_terms_of_use = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })
    // fetch terms_of_use
    const fetchTermsOfUse = async(page=1) => {
        const response = await axios.get('/api/cms/terms_of_use/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        all_terms_of_use.value = await response.data.data;
        console.log(response.data.data);
    }

    // create terms_of_use
    const createTermsOfUse = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/terms_of_use/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/terms_of_use');
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

    // fetch terms_of_use
    const getTermsOfUse = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/terms_of_use/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            console.log(response.data.data);
            terms_of_use.value = await response.data.data;
        }catch (error) {
            console.log('errors: '+ error.response.data);
            errors.value = error.response.data.errors;
        }

    }

    // update terms_of_use
    const updateTermsOfUse = async(id) =>{
        notification.value.success = false;
        notification.value.error = false;
        errors.value = {};
        try {
            await axios.put('/api/cms/terms_of_use/update/'+ id, terms_of_use.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/terms_of_use');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete terms_of_use
    const deleteTermsOfUse = async(id) =>{
        await axios.get('/api/cms/terms_of_use/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore terms_of_use
    const restoreTermsOfUse = async(id) =>{
        await axios.get('/api/cms/terms_of_use/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish terms_of_use
    const publishTermsOfUse = async(data,status) =>{
        errors.value = {}
        let update_terms_of_use = ref([]);
        update_terms_of_use.value = data;
        update_terms_of_use.value.is_published = status;
        if (status === true){
            update_terms_of_use.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_terms_of_use.value.published_at = null;
        }
        console.log(update_terms_of_use.value);
        try {
            await axios.put('/api/cms/terms_of_use/update/'+ update_terms_of_use.value.id, update_terms_of_use.value,{
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
        all_terms_of_use,
        terms_of_use,
        errors,
        fetchTermsOfUse,
        getTermsOfUse,
        createTermsOfUse,
        updateTermsOfUse,
        deleteTermsOfUse,
        restoreTermsOfUse,
        publishTermsOfUse,
        notification
    }
}
