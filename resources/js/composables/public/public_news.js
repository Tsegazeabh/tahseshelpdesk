import {ref} from 'vue';
import {notify} from "@kyvg/vue3-notification";

export default function usePublicNews(){
    const news = ref([]);
    const latest_news = ref([]);
    const allNews = ref([]);
    let errors = ref({});

    // fetch news
    const fetchNews = async(page=1) => {
        const response = await axios.get('/api/public/news?page=' + page)
        allNews.value = await response.data.data;
    }


    // fetch news
    const getNews = async(id) =>{
        const response = await axios.get('/api/public/news/show/'+ id)
        news.value = await response.data;
        console.log(response.data);
    }

    // latest news
    const latestNews = async () =>{
        const response = await axios.get('/api/public/news/latest_news')
        latest_news.value = await response.data;
        console.log(latest_news.value);
    }

    return{
        allNews,
        news,
        latest_news,
        latestNews,
        fetchNews,
        getNews
    }
}
