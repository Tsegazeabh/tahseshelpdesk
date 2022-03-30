import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function usePrivacyPolicy(){
    const privacy_policy = ref([]);
    const all_privacy_policy = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })
    // fetch privacy_policy
    const fetchPrivacyPolicy = async(page=1) => {
        const response = await axios.get('/api/cms/privacy_policy/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        all_privacy_policy.value = await response.data.data;
    }

    // create privacy_policy
    const createPrivacyPolicy = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/privacy_policy/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/privacy_policy');
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

    // fetch privacy_policy
    const getPrivacyPolicy = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/privacy_policy/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            console.log(response.data.data);
            privacy_policy.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }
    }

    // update privacy_policy
    const updatePrivacyPolicy = async(id) =>{
        notification.value.success = false;
        notification.value.error = false;
        errors.value = {};
        try {
            await axios.put('/api/cms/privacy_policy/update/'+ id, privacy_policy.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/privacy_policy');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete privacy_policy
    const deletePrivacyPolicy = async(id) =>{
        await axios.get('/api/cms/privacy_policy/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore privacy_policy
    const restorePrivacyPolicy = async(id) =>{
        await axios.get('/api/cms/privacy_policy/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish privacy_policy
    const publishPrivacyPolicy = async(data,status) =>{
        errors.value = {}
        let update_privacy_policy = ref([]);
        update_privacy_policy.value = data;
        update_privacy_policy.value.is_published = status;
        if (status === true){
            update_privacy_policy.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_privacy_policy.value.published_at = null;
        }
        console.log(update_privacy_policy.value);
        try {
            await axios.put('/api/cms/privacy_policy/update/'+ update_privacy_policy.value.id, update_privacy_policy.value,{
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
        all_privacy_policy,
        privacy_policy,
        errors,
        fetchPrivacyPolicy,
        getPrivacyPolicy,
        createPrivacyPolicy,
        updatePrivacyPolicy,
        deletePrivacyPolicy,
        restorePrivacyPolicy,
        publishPrivacyPolicy,
        notification
    }
}
