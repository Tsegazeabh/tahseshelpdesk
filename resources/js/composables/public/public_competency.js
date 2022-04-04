import {ref,reactive} from 'vue';
import {notify} from "@kyvg/vue3-notification";

export default function usePublicCompetency(){
    const competency = ref([]);
    const latest_competency = ref([]);
    const allCompetency = ref([]);

    // fetch competency
    const fetchCompetency = async(page=1) => {
        const response = await axios.get('/api/public/competencies?page=' + page)
        allCompetency.value = await response.data.data;
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
            const response = await axios.get('/api/public/competencies/latest_competencies')
            latest_competency.value = await response.data;
            console.log(response.data);
            console.log(latest_competency.value);
        }catch (error){
            console.log(error.response);
        }
    }

    return{
        allCompetency,
        competency,
        latest_competency,
        latestCompetency,
        fetchCompetency,
        getCompetency
    }
}
