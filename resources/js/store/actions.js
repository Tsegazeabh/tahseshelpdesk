import router from "../router";
import axios from 'axios';

export default {
    login(context,data){
        let token = '';
        axios.post('api/login',data).then((response) => {
            let payload = {user:response.data.user,token:response.data.token}
            context.commit('setAuth', payload);
            // axios.interceptors.request.use(function (config) {
            //     config.headers.Authorization = context.getters('getToken');
            //     return config;
            // });
            router.push('/cms');
            console.log('getters: ', context.getters['getToken']);
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters['getToken'];
        }).catch((error) => {
            console.log(error.response.data)
        });
    },
    logout(context){
        axios.post('api/logout').then((response) => {
            console.log(response.data)
            context.commit('clearAuth');
        }).catch((error) => {
            console.log(error.response)
        });

    }
}
