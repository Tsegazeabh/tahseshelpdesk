export default {
    setAuth(state,payload){
        state.isAuthenticated = true;
        state.authToken = payload.token;
        state.user = payload.user;
        console.log(state.isAuthenticated);
    },
    clearAuth(state){
        state.isAuthenticated = false;
        state.authToken = '';
        state.user = {};
    },
}
