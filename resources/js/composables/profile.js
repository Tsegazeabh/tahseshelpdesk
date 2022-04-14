import {useStore} from "vuex";
import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";


export default function useProfile(){
    const store = useStore();
    const company = ref({});


    // change password
    const changePassword = async (data) =>{

        try {
            await axios.post('/api/cms/change-password',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            notify({
                title: "Password Changed Successfully 🎉",
                type:"success"
            });
            await store.dispatch('logout')
        }catch (error) {
            notify({
                title: error.response.data.message,
                type:"error"
            });
        }

    }

    //fetch company info
    const fetchCompanyInfo = async () => {
        try {
            const response = await axios.get('/api/cms/company',{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            company.value = response.data[0];
        }catch (error) {
            notify({
                title: error.response.data.message,
                type:"error"
            });
        }
    }

    //save company info
    const saveCompanyInfo = async () =>{
        try {
            await axios.post('/api/cms/company/update', company.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })

            notify({
                title: "Company Information Updated Successfully 🎉",
                type:"success"
            });
        }catch (error){
            notify({
                title: error.response.data.message,
                type:"error"
            });
        }
    }

    return{
        company,
        changePassword,
        fetchCompanyInfo,
        saveCompanyInfo,
    }
}
