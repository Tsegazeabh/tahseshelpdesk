import {ref} from 'vue';

export default function usePublicAbout(){
    const about = ref([]);

    // fetch about
    const fetchAbout = async() => {
        const response = await axios.get('/api/public/about')
        about.value = await response.data;
        console.log(response.data);
    }

    return{
        about,
        fetchAbout
    }
}
