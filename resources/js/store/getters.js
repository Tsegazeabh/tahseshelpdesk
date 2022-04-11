export default {
    getToken(state){
        return state.authToken;
    },
    isLoggedIn(state){
        return state.isAuthenticated;
    },
}
