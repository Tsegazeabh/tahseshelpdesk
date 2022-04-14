import {ref} from 'vue';
import {useStore} from "vuex";

export default function usePublicCarousel(){
    const allCarousel = ref([]);
    const isLoading = ref(false);
    const store = useStore();

    // fetch carousel
    const fetchCarousel = async() => {
        try {
            isLoading.value = true;
            const response = await axios.get('/api/public/carousel_galley')
            isLoading.value=false;
            allCarousel.value = await response.data;
        }catch (error) {
            isLoading.value=false;
        }
    }

    // preview carousel
    const previewCarousel = async(id) =>{
        isLoading.value = false;
        try {
        isLoading.value = true;
            const response = await axios.get('/api/cms/carousels/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            isLoading.value = false;
            allCarousel.value = await response.data.data;
        }catch (error) {
            isLoading.value = false;
        }
    }

    return{
        allCarousel,
        isLoading,
        fetchCarousel,
        previewCarousel
    }
}
