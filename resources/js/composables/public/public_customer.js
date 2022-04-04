import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";

export default function usePublicCustomer(){
    const customer = ref([]);
    const latest_customer = ref([]);
    const allCustomer = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch customer
    const fetchCustomer = async(page=1) => {
        const response = await axios.get('/api/public/customers?page=' + page)
        allCustomer.value = await response.data.data;
    }


    // fetch customer
    const getCustomer = async(id) =>{
        const response = await axios.get('/api/public/customers/show/'+ id)
        customer.value = await response.data;
        console.log(response.data);
    }

    // latest customer
    const latestCustomer = async () =>{
        const response = await axios.get('/api/public/customers/latest_customers')
        latest_customer.value = await response.data;
        console.log(latest_customer.value);
    }

    return{
        allCustomer,
        customer,
        latest_customer,
        latestCustomer,
        fetchCustomer,
        getCustomer
    }
}
