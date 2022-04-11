import {ref, reactive, computed} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import formatDate from '@composable/dateFormat';
import moment from "moment";


export default function useAbout(){
    const about = ref([]);
    const isLoading = ref(false);
    const allAbout = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});


    // fetch about
    const fetchAbout = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/about/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
            )
            isLoading.value = false
        allAbout.value = await response.data.data;
        meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create about
    const createAbout = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/about/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms');
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

            // Object.keys(error.response.data.errors).forEach(key => {
            //     errors.value += error.response.data.errors[key][0] + ' ';
            //     console.log(error.response.data.errors[key][0])
            // })
        }

    }

    // fetch about
    const getAbout = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/about/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            about.value = await response.data.data;
            console.log(typeof about.value);
        }catch (error) {
            errors.value = error.response.data.errors;
        }
    }

    // update about
    const updateAbout = async(id) =>{
        errors.value = {};
        try {
            await axios.put('/api/cms/about/update/'+ id, about.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms');
            notify({
                title: "Record Updated Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Validation Error ",
                type:"error"
            });
        }
    }

    // delete about
    const deleteAbout = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/about/delete/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            notify({
                title: "Record Deleted Successfully 🎉",
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

    // restore about
    const restoreAbout = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/about/restore/'+ id, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            });
            notify({
                title: "Record Restored Successfully 🎉",
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

    // publish or un-publish about
    const publishAbout = async(data,status) =>{
            errors.value = {};
        let notifyStatus = status === true ? 'Published' : 'UnPublished';
        let update_about = ref([]);
            update_about.value = data;
            update_about.value.is_published = status;
            if (status === true){
                update_about.value.published_at = moment().format();
            }else{
                update_about.value.published_at = null;
            }
        try {
            await axios.put('/api/cms/about/update/'+ update_about.value.id, update_about.value,{
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
        allAbout,
        about,
        errors,
        isLoading,
        meta,
        fetchAbout,
        getAbout,
        createAbout,
        updateAbout,
        deleteAbout,
        restoreAbout,
        publishAbout
    }
}
