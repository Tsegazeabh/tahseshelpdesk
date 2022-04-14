import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";


export default function useCompanyInfo(){
    const company = ref({});


    //fetch company info
    const fetchCompanyInfo = async () => {
        try {
            const response = await axios.get('/api/public/company/info')
            company.value = response.data[0];
        }catch (error) {
            notify({
                title: error.response.data.message,
                type:"error"
            });
        }
    }


    return{
        company,
        fetchCompanyInfo,
    }
}
