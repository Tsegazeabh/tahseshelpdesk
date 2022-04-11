import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";
import {useStore} from "vuex";

export default function usePublicNews(){
    const news = ref([]);
    const isLoading = ref(false);
    const latest_news = ref([]);
    const allNews = ref([]);
    const meta = ref([]);
    const store = useStore();

    // fetch news
    const fetchNews = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/public/news?page=' + page)
            isLoading.value = false;
            allNews.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }


    // fetch news
    const getNews = async(id) =>{
        const response = await axios.get('/api/public/news/show/'+ id)
        news.value = await response.data;
        console.log(response.data);
    }

    // latest news
    const latestNews = async () =>{
        try {
            isLoading.value=true;
            const response = await axios.get('/api/public/news/latest_news')
            isLoading.value=false;
            latest_news.value = await response.data;
        }catch (error){
            isLoading.value=false;
        }
    }

    // preview news
    const previewNews = async(id) =>{
        try {
            const response = await axios.get('/api/cms/news/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            news.value = await response.data.data;
            console.log(response.data.data)
        }catch (error) {
            console.log(error.response);
        }
    }

    return{
        allNews,
        news,
        latest_news,
        isLoading,
        meta,
        latestNews,
        fetchNews,
        getNews,
        previewNews
    }
}
