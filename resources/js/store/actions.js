import router from "../router";
import axios from 'axios';
import {notify} from "@kyvg/vue3-notification";

export default {
    //Login
    login(context,data){
        axios.post('api/login',data).then((response) => {
            let payload = {token:response.data.token}
            context.commit('setAuth', payload);
            router.replace('/cms');
            let auth_token = context.getters['getToken'];
            localStorage.setItem('auth_token', auth_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters['getToken'];
            setTimeout(()=>{
                notify({
                    title: "Well-come To Tahses CMS 🎉",
                    type:"success"
                });
            },3000)
        }).catch((error) => {
            notify({
                title: error.response.data.message,
                type:"error"
            });
        });
    },

    // Logout
    logout(context){
        axios.get('/api/cms/logout',{
            headers: {
            'Authorization': 'Bearer '+ context.getters['getToken']
        }
    }).then(() => {
            context.commit('clearAuth');
            localStorage.removeItem('auth_token');
            router.replace('/login');
        }).catch(() => {});

    },

    // forgot password
    forgotPassword(context, payload){
        axios.post('/api/forgot-password', payload).then((response) => {
            notify({
                title: response.data.message,
                type:"success"
            });

            setTimeout(()=>{
                router.replace('/login');
            } ,2000)
        }).catch((error) => {
            notify({
                title: error.response.data.message,
                type:"error"
            });
        })
    },

    // Reset password
    resetPassword(context, payload){
        axios.post('/api/reset-password', payload).then((response) => {
            notify({
                title: response.data.message,
                type:"success"
            });
            setTimeout(()=>{
                router.replace('/login');
            },2000)
        }).catch((error) => {
            notify({
                title: error.response.data.message,
                type:"error"
            });
        })
    }
}
