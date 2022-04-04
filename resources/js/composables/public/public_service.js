import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";

export default function usePublicService(){
    const service = ref([]);
    const latest_service = ref([]);
    const allService = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch service
    const fetchService = async(page=1) => {
        const response = await axios.get('/api/public/services?page=' + page)
        allService.value = await response.data.data;
    }


    // fetch service
    const getService = async(id) =>{
        const response = await axios.get('/api/public/services/show/'+ id)
        service.value = await response.data;
        console.log(response.data);
    }

    // latest service
    const latestService = async () =>{
        try {
            const response = await axios.get('/api/public/services/latest_services')
            latest_service.value = await response.data;
            console.log(latest_service.value);
        }catch (error) {
            console.log(error.response);
        }
    }

    return{
        allService,
        service,
        latest_service,
        latestService,
        fetchService,
        getService
    }
}
