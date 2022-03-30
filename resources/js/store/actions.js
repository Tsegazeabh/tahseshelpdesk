import router from "../router";
import axios from 'axios';

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
            // localStorage.setItem('user', JSON.stringify(user));
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters['getToken'];
        }).catch((error) => {
            console.log(error.response.data)
        });
    },
    logout(context){
        axios.post('api/logout').then((response) => {
            console.log(response.data)
            context.commit('clearAuth');
            localStorage.removeItem('auth_token');
        }).catch((error) => {
            console.log(error.response)
        });

    }
}
