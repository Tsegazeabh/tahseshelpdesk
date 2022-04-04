import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";

export default function usePublicProduct(){
    const product = ref([]);
    const latest_product = ref([]);
    const allProduct = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch product
    const fetchProduct = async(page=1) => {
        const response = await axios.get('/api/public/products?page=' + page)
        allProduct.value = await response.data.data;
    }


    // fetch product
    const getProduct = async(id) =>{
        const response = await axios.get('/api/public/products/show/'+ id)
        product.value = await response.data;
        console.log(response.data);
    }

    // latest product
    const latestProduct = async () =>{
        try {
            const response = await axios.get('/api/public/products/latest_products')
            latest_product.value = await response.data;
            console.log(latest_product.value);
        }catch (error){
            console.log(error.response);
        }
    }

    return{
        allProduct,
        product,
        latest_product,
        latestProduct,
        fetchProduct,
        getProduct
    }
}
