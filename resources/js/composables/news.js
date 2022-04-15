import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useNews(){
    const news = ref([]);
    const isLoading = ref(false);
    const allNews = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch news
    const fetchNews = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/news/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false;
        allNews.value = await response.data.data;
        meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create news
    const createNews = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/news/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/news');
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

    // fetch news
    const getNews = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/news/show/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            console.log(response.data.data);
            news.value = await response.data.data;
        }catch (error) {
            errors.value = error.response.data.errors;
        }
    }

    // update news
    const updateNews = async(id) =>{
        errors.value = {};
        try {
            await axios.put('/api/cms/news/update/'+ id, news.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/news');
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

    // delete news
    const deleteNews = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/news/delete/'+ id, {
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
                title: "Sorry, something went wrong",
                type:"warning"
            });
        }
    }

    // restore news
    const restoreNews = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/news/restore/'+ id, {
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
                title: "Sorry, something went wrong",
                type:"warning"
            });
        }
    }

    // publish or un-publish news
    const publishNews = async(data,status) =>{
        errors.value = {}
        let notifyStatus = status === 1 ? 'Published' : 'UnPublished';
        let update_news = ref([]);
        update_news.value = data;
        update_news.value.is_published = status;
        if (status === true){
            update_news.value.published_at = moment().format();
        }else{
            update_news.value.published_at = null;
        }
        try {
            await axios.put('/api/cms/news/update/'+ update_news.value.id, update_news.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            notify({
                title: "Record "+ notifyStatus +" Successfully 🎉",
                type:"success"
            });
        }catch (error) {
            errors.value = error.response.data.errors;
            notify({
                title: "Sorry, something went wrong",
                type:"warning"
            });
        }
    }

    return{
        allNews,
        news,
        errors,
        isLoading,
        meta,
        fetchNews,
        getNews,
        createNews,
        updateNews,
        deleteNews,
        restoreNews,
        publishNews,
    }
}
