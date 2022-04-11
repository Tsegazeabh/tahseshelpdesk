import {useStore} from "vuex";
import {notify} from "@kyvg/vue3-notification";


export default function useProfile(){
    const store = useStore();


    // change password
    const changePassword = async (data) =>{

        try {
            const response = await axios.post('/api/cms/change-password',data,{
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

    return{
        changePassword,
    }
}
