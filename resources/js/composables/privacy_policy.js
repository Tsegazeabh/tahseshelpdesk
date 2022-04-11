import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function usePrivacyPolicy(){
    const privacy_policy = ref([]);
    const isLoading = ref(false);
    const all_privacy_policy = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch privacy_policy
    const fetchPrivacyPolicy = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/privacy_policy/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false;
            all_privacy_policy.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create privacy_policy
    const createPrivacyPolicy = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/privacy_policy/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/privacy_policy');
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

    // fetch privacy_policy
    const getPrivacyPolicy = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/privacy_policy/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            privacy_policy.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }
    }

    // update privacy_policy
    const updatePrivacyPolicy = async(id) =>{
        errors.value = {};
        try {
            await axios.put('/api/cms/privacy_policy/update/'+ id, privacy_policy.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/privacy_policy');
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

    // delete privacy_policy
    const deletePrivacyPolicy = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/privacy_policy/delete/'+ id, {
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

    // restore privacy_policy
    const restorePrivacyPolicy = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/privacy_policy/restore/'+ id, {
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

    // publish or un-publish privacy_policy
    const publishPrivacyPolicy = async(data,status) =>{
        errors.value = {};
        let notifyStatus = status === 1 ? 'Published' : 'UnPublished';
        let update_privacy_policy = ref([]);
        update_privacy_policy.value = data;
        update_privacy_policy.value.is_published = status;
        if (status === true){
            update_privacy_policy.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_privacy_policy.value.published_at = null;
        }

        try {
            await axios.put('/api/cms/privacy_policy/update/'+ update_privacy_policy.value.id, update_privacy_policy.value,{
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
        all_privacy_policy,
        privacy_policy,
        errors,
        isLoading,
        meta,
        fetchPrivacyPolicy,
        getPrivacyPolicy,
        createPrivacyPolicy,
        updatePrivacyPolicy,
        deletePrivacyPolicy,
        restorePrivacyPolicy,
        publishPrivacyPolicy,
    }
}
