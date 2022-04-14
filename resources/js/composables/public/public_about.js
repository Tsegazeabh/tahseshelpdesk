import {ref} from 'vue';
import {useStore} from "vuex";

export default function usePublicAbout(){
    const about = ref([]);
    const isLoading = ref(false);
    const store = useStore();

    // fetch about
    const fetchAbout = async() => {
        try {
         isLoading.value = true;
        const response = await axios.get('/api/public/about')
        isLoading.value = false;
            about.value = await response.data;
        }catch (error){
            isLoading.value = false;
        }
    }

    // preview about
    const previewAbout = async(id) =>{
        try {
            const response = await axios.get('/api/cms/about/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            about.value = await response.data.data;
        }catch (error) {}
    }

    return{
        about,
        isLoading,
        fetchAbout,
        previewAbout
    }
}
