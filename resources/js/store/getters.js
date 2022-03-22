export default {
    getToken(state){
        console.log(state.authToken);
        return state.authToken;
    },
    getUser(state){
        return state.user;
    },
    isLoggedIn(state){
        return state.isAuthenticated;
    },
}
