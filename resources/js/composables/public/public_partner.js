import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";

export default function usePublicPartner(){
    const allPartner = ref([]);
    let errors = ref({});

    // fetch partner
    const fetchPartner = async() => {
        const response = await axios.get('/api/public/partners')
        allPartner.value = await response.data;
    }

    return{
        allPartner,
        fetchPartner,

    }
}
