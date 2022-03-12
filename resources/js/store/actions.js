import router from "../router";

export default {
    login(context,data){
        let token = '';
        axios.post('api/login',data).then((response) => {
            let payload = {user:response.data.user,token:response.data.token}
            context.commit('setAuth', payload);
            router.push('/dashboard');
        }).catch((error) => { console.log(error.response.data)});
    },
    logout(context){
        axios.post('api/logout').then((response) => {
            console.log(response.data)
            context.commit('clearAuth');
        }).catch((error) => {console.log(error.response)});

    }
}
