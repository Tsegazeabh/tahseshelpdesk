export default {
    setAuth(state,payload){
        state.isAuthenticated = true;
        state.authToken = payload.token;
        },
    clearAuth(state){
        state.isAuthenticated = false;
        state.authToken = '';
    },
}
