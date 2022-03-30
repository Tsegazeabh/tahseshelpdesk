import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function usePartner(){
    const partner = ref([]);
    const allPartner = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })
    // fetch partner
    const fetchPartner = async(page=1) => {
        const response = await axios.get('/api/cms/partners/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        allPartner.value = await response.data.data;
    }

    // create partner
    const createPartner = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/partners/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/partners');
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

    // fetch partner
    const getPartner = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/partners/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            console.log(response.data.data);
            partner.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }

    }

    // update partner
    const updatePartner = async(id) =>{
        notification.value.success = false;
        notification.value.error = false;
        errors.value = {};
        try {
            await axios.put('/api/cms/partners/update/'+ id, partner.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/partners');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete partner
    const deletePartner = async(id) =>{
        await axios.get('/api/cms/partners/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore partner
    const restorePartner = async(id) =>{
        await axios.get('/api/cms/partners/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish partner
    const publishPartner = async(data,status) =>{
        errors.value = {}
        let update_partner = ref([]);
        update_partner.value = data;
        update_partner.value.is_published = status;
        if (status === true){
            update_partner.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_partner.value.published_at = null;
        }
        console.log(update_partner.value);
        try {
            await axios.put('/api/cms/partners/update/'+ update_partner.value.id, update_partner.value,{
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
        allPartner,
        partner,
        errors,
        fetchPartner,
        getPartner,
        createPartner,
        updatePartner,
        deletePartner,
        restorePartner,
        publishPartner,
        notification
    }
}
