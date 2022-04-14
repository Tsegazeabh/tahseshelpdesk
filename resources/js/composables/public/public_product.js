import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {notify} from "@kyvg/vue3-notification";

export default function usePublicProduct(){
    const isLoading = ref(false);
    const product = ref([]);
    const latest_product = ref([]);
    const allProduct = ref([]);
    const meta = ref([]);
    const store = useStore();

    // fetch product
    const fetchProduct = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
            const response = await axios.get('/api/public/products?page=' + page)
            isLoading.value = false;
            allProduct.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }


    // fetch product
    const getProduct = async(id) =>{
        const response = await axios.get('/api/public/products/show/'+ id)
        product.value = await response.data;
    }

    // latest product
    const latestProduct = async () =>{
        try {
            isLoading.value = true;
            const response = await axios.get('/api/public/products/latest_products')
            isLoading.value=false;
            latest_product.value = await response.data;
        }catch (error){
            isLoading.value = false;
        }
    }

    // preview product
    const previewProduct = async(id) =>{
        try {
            const response = await axios.get('/api/cms/products/preview/'+ id,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            product.value = await response.data.data;
        }catch (error) {
        }
    }

    return{
        allProduct,
        product,
        latest_product,
        isLoading,
        meta,
        latestProduct,
        fetchProduct,
        getProduct,
        previewProduct
    }
}
