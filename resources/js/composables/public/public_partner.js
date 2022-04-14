import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";

export default function usePublicPartner(){
    const allPartner = ref([]);
    const isLoading = ref(false);

    // fetch partner
    const fetchPartner = async() => {
            isLoading.value=false;
        try{
            isLoading.value=true;
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
