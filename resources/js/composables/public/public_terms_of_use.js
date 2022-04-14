import {ref} from 'vue';
import {useStore} from "vuex";

export default function usePublicTermsOfUse(){
    const terms_of_use = ref([]);
    const store = useStore();

    // fetch terms_of_use
    const fetchTermsOfUse = async() => {
        const response = await axios.get('/api/public/terms_of_use')
        terms_of_use.value = await response.data;
    }

    // preview terms_of_use
    const previewTermsOfUse = async(id) =>{
        try {
            const response = await axios.get('/api/cms/terms_of_use/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            terms_of_use.value = await response.data.data;s
        }catch (error) {
        }
    }

    return{
        terms_of_use,
        fetchTermsOfUse,
        previewTermsOfUse
    }
}
