import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";

export default function usePublicPartner(){
    const allPartner = ref([]);
    const isLoading = ref(false);
    let errors = ref({});

    // fetch partner
    const fetchPartner = async() => {
        try{
            isLoading.value=false;
            const response = await axios.get('/api/public/partners')
            isLoading.value=false;
            allPartner.value = await response.data;
        }catch (error) {
            isLoading.value=false;
        }
    }

    return{
        allPartner,
        isLoading,
        fetchPartner,

    }
}
