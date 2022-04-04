import router from "../router";
import axios from 'axios';
import { notify } from "@kyvg/vue3-notification";

export default {
    login(context,data){
        let token = '';
        axios.post('api/login',data).then((response) => {
            let payload = {user:response.data.user,token:response.data.token}
            context.commit('setAuth', payload);
            router.replace('/cms');
            let auth_user = context.getters['getUser'];
            let auth_token = context.getters['getToken'];
            localStorage.setItem('auth_token', auth_token);
            localStorage.setItem('auth_user', JSON.stringify(auth_user));
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters['getToken'];
        }).catch((error) => {
            console.log(error.response.data)
        });
    },
    logout(context){
        const user = context.getters['getUser'];
        const token = context.getters['getToken'];
        axios.post('/api/cms/logout', user,{
            headers: {
            'Authorization': 'Bearer '+ token
        }
    }).then((response) => {
            console.log(response.data)
            context.commit('clearAuth');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_user');
            router.replace('/login');
            notify({
                title: "Logged Out Successfully! 🎉",
                type:"success"
            });
        }).catch((error) => {
            console.log(error.response)
        });

    }
}
