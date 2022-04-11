import {notify} from "@kyvg/vue3-notification";
import {reactive} from "vue";


export default function usePublicContactUs(){
    const errors = reactive({});
    // send request
    const sendRequest = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/public/contact_us/request',data)
            await notify({
                title: "Request Sent Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Oops, Something Went Wrong Please Try Again",
                type:"error"
            });
        }

    }


    return{
        sendRequest
    }
}
