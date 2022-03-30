import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";


export default function useCustomer(){
    const customer = ref([]);
    const allCustomer = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })

    // fetch customer
    const fetchCustomer = async(page=1) => {
        const response = await axios.get('/api/cms/customers/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        allCustomer.value = await response.data.data;
    }

    // create customer
    const createCustomer = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/customers/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/customers');
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

    // fetch customer
    const getCustomer = async(id) =>{
        try {
            const response = await axios.get('/api/cms/customers/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            console.log(response.data.data);
            customer.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }
    }

    // update customer
    const updateCustomer = async(id) =>{
        notification.value.success = false;
        notification.value.error = false;
        errors.value = {};
        try {
            await axios.put('/api/cms/customers/update/'+ id, customer.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/customers');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete customer
    const deleteCustomer = async(id) =>{
        await axios.get('/api/cms/customers/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore customer
    const restoreCustomer = async(id) =>{
        await axios.get('/api/cms/customers/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish customer
    const publishCustomer = async(data,status) =>{
        errors.value = {}
        let update_customer = ref([]);
        update_customer.value = data;
        update_customer.value.is_published = status;
        if (status === true){
            update_customer.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_customer.value.published_at = null;
        }
        console.log(update_customer.value);
        try {
            await axios.put('/api/cms/customers/update/'+ update_customer.value.id, update_customer.value,{
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
        allCustomer,
        customer,
        errors,
        fetchCustomer,
        getCustomer,
        createCustomer,
        updateCustomer,
        deleteCustomer,
        restoreCustomer,
        publishCustomer,
        notification
    }
}
