export default {
    getToken(state){
        return state.authToken;
    },
    getUser(state){
        return state.user;
    },
    isLoggedIn(state){
        return state.isAuthenticated;
    }
}
