import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useCompetency(){
    const competency = ref([]);
    const allCompetency = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })
    // fetch competency
    const fetchCompetency = async(page=1) => {
        const response = await axios.get('/api/cms/competencies/index?page='+ page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        allCompetency.value = await response.data.data;
    }

    // create competency
    const createCompetency = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/competencies/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/competencies');
            notification.value.success = true;
            notification.value.message = 'Record Created Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            console.log(errors.value);
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
            // Object.keys(error.response.data.errors).forEach(key => {
            //     errors.value += error.response.data.errors[key][0] + ' ';
            //     console.log(error.response.data.errors[key][0])
            // })
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
        notification.value.success = false;
        notification.value.error = false;
        errors.value = {};
        try {
            await axios.put('/api/cms/competencies/update/'+ id, competency.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/competencies');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete competency
    const deleteCompetency = async(id) =>{
        await axios.get('/api/cms/competencies/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore competency
    const restoreCompetency = async(id) =>{
        await axios.get('/api/cms/competencies/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish competency
    const publishCompetency = async(data,status) =>{
        errors.value = {}
        let update_competency = ref([]);
        update_competency.value = data;
        update_competency.value.is_published = status;
        if (status === true){
            update_competency.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_competency.value.published_at = null;
        }
        console.log(update_competency.value);
        try {
            await axios.put('/api/cms/competencies/update/'+ update_competency.value.id, update_competency.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            console.log('successfully ended try block');
            notification.value.success = true;
            notification.value.message = 'Record Published/Unpublished Successfully';
        }catch (error) {
            console.log('catch block');
            errors.value = error.response.data.errors;
        }
    }


    return{
        allCompetency,
        competency,
        errors,
        restoreCompetency,
        publishCompetency,
        fetchCompetency,
        getCompetency,
        createCompetency,
        updateCompetency,
        deleteCompetency,
        notification
    }
}
