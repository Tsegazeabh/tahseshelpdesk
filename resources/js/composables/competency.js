import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useCompetency(){
    const competency = ref([]);
    const allCompetency = ref([]);
    const meta = ref([]);
    const isLoading = ref(false);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch competency
    const fetchCompetency = async(page=1) => {
        isLoading.value =false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/competencies/index?page='+ page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false
        allCompetency.value = await response.data.data;
        meta.value = response.data.meta;
        }catch (error) {
            isLoading.value= false;
        }
    }

    // create competency
    const createCompetency = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/competencies/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/competencies');
            notify({
                title: "Record Created Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Validation Error",
                type:"error"
            });
        }

    }

    // fetch competency
    const getCompetency = async(id) =>{
        errors.value = {};
        try{
            const response = await axios.get('/api/cms/competencies/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            console.log('response: '+ response.data.data);
            competency.value = await response.data.data;
        }catch (error) {
            console.log('error: '+error.response.data);
            errors.value = error.response.data.errors;
        }
    }

    // update competency
    const updateCompetency = async(id) =>{
        errors.value = {};
        try {
            await axios.put('/api/cms/competencies/update/'+ id, competency.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/competencies');
            notify({
                title: "Record Updated Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Validation Error",
                type:"error"
            });
        }
    }

    // delete competency
    const deleteCompetency = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/competencies/delete/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            const message = response.data.message;
            notify({
                title: message,
                type:"success"
            });
        }catch (error){
            errors.value = error.response.data.errors;
            notify({
                title: "Sorry, Something Went Wrong!",
                type:"warning"
            });
        }
    }

    // restore competency
    const restoreCompetency = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/competencies/restore/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            notify({
                title: "Record Restored Successfully 🎉",
                type:"success"
            });
        }catch (error){
            errors.value = error.response.data.errors;
            notify({
                title: "Sorry, Something Went Wrong!",
                type:"warning"
            });
        }
    }

    // publish or un-publish competency
    const publishCompetency = async(data,status) =>{
        errors.value = {}
        let notifyStatus = status === 1 ? 'Published' : 'UnPublished';
        let update_competency = ref([]);
        update_competency.value = data;
        update_competency.value.is_published = status;
        if (status === true){
            update_competency.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_competency.value.published_at = null;
        }
        try {
            await axios.put('/api/cms/competencies/update/'+ update_competency.value.id, update_competency.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            notify({
                title: "Record " + notifyStatus + " Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Sorry, Something Went Wrong!",
                type:"warning"
            });
        }
    }


    return{
        allCompetency,
        competency,
        errors,
        meta,
        restoreCompetency,
        publishCompetency,
        fetchCompetency,
        getCompetency,
        createCompetency,
        updateCompetency,
        deleteCompetency,
        isLoading
    }
}
