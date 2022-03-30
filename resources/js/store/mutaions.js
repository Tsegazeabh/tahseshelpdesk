export default {
    setAuth(state,payload){
        state.isAuthenticated = true;
        state.authToken = payload.token;
        state.user = payload.user;
        console.log('setAuth called *****')
        console.log(payload);
        console.log('setAuth ended *****')
    },
    clearAuth(state){
        state.isAuthenticated = false;
        state.authToken = '';
        state.user = {};
    },
}
