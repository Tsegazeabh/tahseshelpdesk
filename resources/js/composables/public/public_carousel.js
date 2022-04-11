import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";

export default function usePublicCarousel(){
    const allCarousel = ref([]);
    const isLoading = ref(false);

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

    return{
        allCarousel,
        isLoading,
        fetchCarousel
    }
}
