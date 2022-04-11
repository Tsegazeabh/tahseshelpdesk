import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";


export default function useCustomer(){
    const customer = ref([]);
    const isLoading = ref(false);
    const allCustomer = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});


    // fetch customer
    const fetchCustomer = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/customers/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false;
        allCustomer.value = await response.data.data;
        meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create customer
    const createCustomer = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/customers/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/customers');
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

    // fetch customer
    const getCustomer = async(id) =>{
        try {
            const response = await axios.get('/api/cms/customers/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            customer.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }
    }

    // update customer
    const updateCustomer = async(id) =>{
        errors.value = {};
        try {
            await axios.put('/api/cms/customers/update/'+ id, customer.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/customers');
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

    // delete customer
    const deleteCustomer = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/customers/delete/'+ id, {
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
                title: "Sorry, something went wrong",
                type:"warning"
            });
        }
    }

    // restore customer
    const restoreCustomer = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/customers/restore/'+ id, {
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
                title: "Sorry, something went wrong",
                type:"warning"
            });
        }
    }

    // publish or un-publish customer
    const publishCustomer = async(data,status) =>{
        errors.value = {};
        let notifyStatus = status === 1 ? 'Published' : 'UnPublished';
        let update_customer = ref([]);
        update_customer.value = data;
        update_customer.value.is_published = status;
        if (status === true){
            update_customer.value.published_at = moment().format();
        }else{
            update_customer.value.published_at = null;
        }
        try {
            await axios.put('/api/cms/customers/update/'+ update_customer.value.id, update_customer.value,{
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
                title: "Sorry, something went wrong",
                type:"warning"
            });
        }
    }


    return{
        allCustomer,
        customer,
        errors,
        isLoading,
        meta,
        fetchCustomer,
        getCustomer,
        createCustomer,
        updateCustomer,
        deleteCustomer,
        restoreCustomer,
        publishCustomer,
    }
}
