import {notify} from "@kyvg/vue3-notification";
import {ref} from "vue";
import {useStore} from "vuex";


export default function useContactUs(){
    const allRequest = ref([]);
    const request = ref([]);
    const meta = ref([]);
    const isLoading = ref(false);
    const store = useStore();

    // fetch request
    const fetchRequest = async () =>{
        isLoading.value = false;
        try {
            isLoading.value = true;
            const response = await axios.get('/api/cms/contact_us/index',{
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            })
            isLoading.value = false;
            allRequest.value = response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
            notify({
                title: "Oops, Something Went Wrong Please Try Again",
                type:"error"
            });
        }

    }

    // view request
    const getRequest = async (id) => {
        try {
            isLoading.value = true;
            const response = await axios.get('/api/cms/contact_us/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            })
            isLoading.value = false;
            request.value = response.data.data;
        }catch (error) {
            isLoading.value = false;
            notify({
                title: "Oops, Something Went Wrong Please Try Again",
                type:"error"
            });
        }
    }

    // delete request
    const deleteRequest = async(id) =>{
        try {
            await axios.get('/api/cms/contact_us/delete/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            notify({
                title: "Request Closed Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            notify({
                title: "Sorry, Something Went Wrong!",
                type:"warning"
            });
        }
    }

    // restore request
    const restoreRequest = async(id) =>{
        try {
            await axios.get('/api/cms/contact_us/restore/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            notify({
                title: "Request Restored Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            notify({
                title: "Sorry, Something Went Wrong!",
                type:"warning"
            });
        }
    }


    return{
        request,
        allRequest,
        isLoading,
        meta,
        fetchRequest,
        getRequest,
        deleteRequest,
        restoreRequest
    }
}
