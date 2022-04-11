import {ref} from 'vue';
import {useStore} from "vuex";

export default function usePublicCompetency(){
    const competency = ref([]);
    const isLoading = ref(false);
    const latest_competency = ref([]);
    const allCompetency = ref([]);
    const meta = ref([]);
    const store = useStore();

    // fetch competency
    const fetchCompetency = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/public/competencies?page=' + page)
            isLoading.value = false;
            allCompetency.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }


    // fetch competency
    const getCompetency = async(id) =>{
        const response = await axios.get('/api/public/competencies/show/'+ id)
        competency.value = await response.data;
        console.log(response.data);
    }

    // latest competency
    const latestCompetency = async () =>{
        try {
            isLoading.value=true;
            const response = await axios.get('/api/public/competencies/latest_competencies')
            isLoading.value=false;
            latest_competency.value = await response.data;
        }catch (error){
            isLoading.value=false;
        }
    }

    // preview competency
    const previewCompetency = async(id) =>{
        try {
            const response = await axios.get('/api/cms/competencies/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            competency.value = await response.data.data;
            console.log(response.data.data)
        }catch (error) {
            console.log(error.response);
        }
    }

    return{
        allCompetency,
        competency,
        latest_competency,
        isLoading,
        meta,
        latestCompetency,
        fetchCompetency,
        getCompetency,
        previewCompetency
    }
}
