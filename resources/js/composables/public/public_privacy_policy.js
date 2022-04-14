import {ref} from 'vue';
import {useStore} from "vuex";

export default function usePublicPrivacyPolicy(){
    const privacy_policy = ref([]);
    const store = useStore();

    // fetch privacy_policy
    const fetchPrivacyPolicy = async() => {
        const response = await axios.get('/api/public/privacy_policy')
        privacy_policy.value = await response.data;
    }

    // preview privacy_policy
    const previewPrivacyPolicy = async(id) =>{
        try {
            const response = await axios.get('/api/cms/privacy_policy/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            privacy_policy.value = await response.data.data;
        }catch (error) {
        }
    }

    return{
        privacy_policy,
        fetchPrivacyPolicy,
        previewPrivacyPolicy
    }
}
