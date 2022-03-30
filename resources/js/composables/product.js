import {ref,reactive} from 'vue';
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {notify} from "@kyvg/vue3-notification";
import moment from "moment";

export default function useProduct(){
    const product = ref([]);
    const allProduct = ref([]);
    const store = useStore();
    const router = useRouter();
    let errors = ref({});
    let notification = ref({
        success: false,
        warning: false,
        error: false,
        message: ''
    })
    // fetch product
    const fetchProduct = async(page=1) => {
        const response = await axios.get('/api/cms/products/index?page=' + page, {
                headers: {
                    'Authorization': 'Bearer ' + store.getters['getToken']
                }
            }
        )
        allProduct.value = await response.data.data;
    }

    // create product
    const createProduct = async (data) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.post('/api/cms/products/create',data,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            })
            await router.push('/cms/products');
            notification.value.success = true;
            notification.value.message = 'Record Created Successfully';
            console.log('error:'+errors);
        }catch (error) {
            errors.value = error.response.data.errors;
            console.log('error:'+errors);
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
            // Object.keys(error.response.data.errors).forEach(key => {
            //     errors.value += error.response.data.errors[key][0] + ' ';
            //     console.log(error.response.data.errors[key][0])
            // })
        }

    }

    // fetch product
    const getProduct = async(id) =>{
        const response = await axios.get('/api/cms/products/show/'+ id,{
            headers: {
                'Authorization': 'Bearer '+ store.getters['getToken']
            }
        })
        console.log(response.data.data);
        product.value = await response.data.data;
    }

    // update product
    const updateProduct = async(id) =>{
        errors.value = {};
        notification.value.success = false;
        notification.value.error = false;
        try {
            await axios.put('/api/cms/products/update/'+ id, product.value,{
                headers: {
                    'Authorization': 'Bearer '+ store.getters['getToken']
                }
            });
            await router.push('/cms/products');
            notification.value.success = true;
            notification.value.message = 'Record Updated Successfully';
        }catch (error) {
            errors.value = error.response.data.errors;
            notification.value.error = true;
            notification.value.message = 'Something went wrong please try again!';
        }
    }

    // delete product
    const deleteProduct = async(id) =>{
        await axios.get('/api/cms/products/delete/'+id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Deleted Successfully';
    }

    // restore product
    const restoreProduct = async(id) =>{
        await axios.get('/api/cms/products/restore/'+ id, {
            headers: {
                'Authorization': 'Bearer ' + store.getters['getToken']
            }
        });
        notification.value.success = true;
        notification.value.message = 'Record Restored Successfully';
    }

    // publish or un-publish product
    const publishProduct = async(data,status) =>{
        errors.value = {}
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
            console.log('successfully ended try block');
            notification.value.success = true;
            notification.value.message = 'Record Published/Unpublished Successfully';
        }catch (error) {
            console.log('catch block');
            errors.value = error.response.data.errors;
        }
    }

    return{
        allProduct,
        product,
        errors,
        fetchProduct,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct,
        restoreProduct,
        publishProduct,
        notification
    }
}
