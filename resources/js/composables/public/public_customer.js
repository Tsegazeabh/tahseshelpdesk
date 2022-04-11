import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {notify} from "@kyvg/vue3-notification";

export default function usePublicCustomer(){
    const customer = ref([]);
    const isLoading = ref(false);
    const latest_customer = ref([]);
    const allCustomer = ref([]);
    const meta = ref([]);
    const store = useStore();


    // fetch customer
    const fetchCustomer = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/public/customers?page=' + page)
            isLoading.value = false;
            allCustomer.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }


    // fetch customer
    const getCustomer = async(id) =>{
        const response = await axios.get('/api/public/customers/show/'+ id)
        customer.value = await response.data;
        console.log(response.data);
    }

    // latest customer
    const latestCustomer = async () =>{
        try {
            isLoading.value=true;
            const response = await axios.get('/api/public/customers/latest_customers')
            isLoading.value=false;
            latest_customer.value = await response.data;
        }catch (error) {
            isLoading.value=false;
        }
    }

    // preview customer
    const previewCustomer = async(id) =>{
        try {
            const response = await axios.get('/api/cms/customers/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            customer.value = await response.data.data;
            console.log(response.data.data)
        }catch (error) {
            console.log(error.response);
        }
    }

    return{
        allCustomer,
        customer,
        latest_customer,
        isLoading,
        meta,
        latestCustomer,
        fetchCustomer,
        getCustomer,
        previewCustomer
    }
}
