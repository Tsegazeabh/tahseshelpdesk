import {ref} from 'vue';
import {useStore} from "vuex";
import {notify} from "@kyvg/vue3-notification";

export default function usePublicService(){
    const service = ref([]);
    const isLoading = ref(false);
    const latest_service = ref([]);
    const allService = ref([]);
    const meta = ref([]);
    const store = useStore();

    // fetch service
    const fetchService = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value=true;
        const response = await axios.get('/api/public/services?page=' + page)
            isLoading.value=false;
        allService.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error){
            isLoading.value=false;
        }
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
            isLoading.value=true;
            const response = await axios.get('/api/public/services/latest_services')
            isLoading.value=false;
            latest_service.value = await response.data;
        }catch (error) {
            isLoading.value=false;
        }
    }

    // preview service
    const previewService = async(id) =>{
        try {
            const response = await axios.get('/api/cms/services/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            service.value = await response.data.data;
            console.log(response.data.data)
        }catch (error) {
            console.log(error.response);
        }
    }

    return{
        allService,
        service,
        latest_service,
        isLoading,
        meta,
        latestService,
        fetchService,
        getService,
        previewService
    }
}
