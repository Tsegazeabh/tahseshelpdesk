import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useNews(){
    const news = ref([]);
    const allNews = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })
    // fetch news
    const fetchNews = async(page=1) => {
        const response = await axios.get('/api/cms/news/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        allNews.value = await response.data.data;
    }

    // create news
    const createNews = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/news/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/news');
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
        notification.value.success = false;
        notification.value.error = false;
        errors.value = {};
        try {
            await axios.put('/api/cms/news/update/'+ id, news.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/news');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete news
    const deleteNews = async(id) =>{
        await axios.get('/api/cms/news/delete/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore news
    const restoreNews = async(id) =>{
        await axios.get('/api/cms/news/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish news
    const publishNews = async(data,status) =>{
        errors.value = {}
        let update_news = ref([]);
        update_news.value = data;
        update_news.value.is_published = status;
        if (status === true){
            update_news.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_news.value.published_at = null;
        }
        console.log(update_news.value);
        try {
            await axios.put('/api/cms/news/update/'+ update_news.value.id, update_news.value,{
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
        allNews,
        news,
        errors,
        fetchNews,
        getNews,
        createNews,
        updateNews,
        deleteNews,
        restoreNews,
        publishNews,
        notification
    }
}
