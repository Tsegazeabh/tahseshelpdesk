import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useProduct(){
    const product = ref([]);
    const isLoading = ref(false);
    const allProduct = ref([]);
    const meta = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});

    // fetch product
    const fetchProduct = async(page=1) => {
        isLoading.value = false;
        try {
            isLoading.value = true;
        const response = await axios.get('/api/cms/products/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
            isLoading.value = false;
            allProduct.value = await response.data.data;
            meta.value = response.data.meta;
        }catch (error) {
            isLoading.value = false;
        }
    }

    // create product
    const createProduct = async (data) =>{
        errors.value = {};
        try {
            await axios.post('/api/cms/products/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/products');
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

    // fetch product
    const getProduct = async(id) =>{
        const response = await axios.get('/api/cms/products/show/'+ id,{
            headers: {
                'Authorization': 'Bearer '+ store.getters['getToken']
            }
        })
        product.value = await response.data.data;
    }

    // update product
    const updateProduct = async(id) =>{
        errors.value = {};
        try {
            await axios.put('/api/cms/products/update/'+ id, product.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/products');
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

    // delete product
    const deleteProduct = async(id) =>{
        errors.value = {};
        try {
            const response = await axios.get('/api/cms/products/delete/'+id, {
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

    // restore product
    const restoreProduct = async(id) =>{
        errors.value = {};
        try {
            await axios.get('/api/cms/products/restore/'+ id, {
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

    // publish or un-publish product
    const publishProduct = async(data,status) =>{
        errors.value = {};
        let notifyStatus = status === 1 ? 'Published' : 'UnPublished';
        let update_product = ref([]);
        update_product.value = data;
        update_product.value.is_published = status;
        if (status === true){
            update_product.value.published_at = moment().format();
            console.log(moment().format());
        }else{
            update_product.value.published_at = null;
        }
        console.log(update_product.value);
        try {
            await axios.put('/api/cms/products/update/'+ update_product.value.id, update_product.value,{
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
        allProduct,
        product,
        errors,
        isLoading,
        meta,
        fetchProduct,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
        restoreProduct,
        publishProduct,
    }
}
