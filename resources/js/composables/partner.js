import {ref} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function usePartner(){
    const partner = ref([]);
    const isLoading = ref(false);
    const allPartner = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch partner
    const fetchPartner = async(page=1) => {
        isLoading.value = false;
        try {
         isLoading.value = true;
        const response = await axios.get('/api/cms/partners/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false;
        allPartner.value = await response.data.data;
        meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create partner
    const createPartner = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/partners/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/partners');
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

    // fetch partner
    const getPartner = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/partners/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            partner.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }

    }

    // update partner
    const updatePartner = async(id) =>{
        errors.value = {};
        try {
            await axios.put('/api/cms/partners/update/'+ id, partner.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/partners');
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

    // delete partner
    const deletePartner = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/partners/delete/'+ id, {
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

    // restore partner
    const restorePartner = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/partners/restore/'+ id, {
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

    // publish or un-publish partner
    const publishPartner = async(data,status) =>{
        errors.value = {};
        let notifyStatus = status === 1 ? 'Published' : 'UnPublished';
        let update_partner = ref([]);
        update_partner.value = data;
        update_partner.value.is_published = status;
        if (status === true){
            update_partner.value.published_at = moment().format();
        }else{
            update_partner.value.published_at = null;
        }
        try {
            await axios.put('/api/cms/partners/update/'+ update_partner.value.id, update_partner.value,{
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
        allPartner,
        partner,
        errors,
        isLoading,
        meta,
        fetchPartner,
        getPartner,
        createPartner,
        updatePartner,
        deletePartner,
        restorePartner,
        publishPartner,
    }
}
