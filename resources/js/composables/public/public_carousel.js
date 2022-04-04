import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";

export default function usePublicCarousel(){
    const allCarousel = ref([]);

    // fetch carousel
    const fetchCarousel = async() => {
        try {
            const response = await axios.get('/api/public/carousel_galley')
            allCarousel.value = await response.data;
            console.log(allCarousel.value);
        }catch (error) {
            console.log(error.response);
        }
    }

    return{
        allCarousel,
        fetchCarousel
    }
}
